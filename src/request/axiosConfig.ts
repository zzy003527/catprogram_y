// ./src/plugins/axios/axiosConfigs.ts
/*
 * @Author: una
 * @Date: 2021-06-16 17:16:12
 * @LastEditors: una
 * @LastEditTime: 2021-07-09 14:51:28
 * @Description: 封装 axios
 */
//这是axios配置的ts文件 

import axios from 'axios'
// import axios, { AxiosRequestConfig } from 'axios';

// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import store from '../store/index';
// import { ElMessage } from "element-plus";
// import qs from 'qs';

// 创建axios的实例
const service = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    baseURL: process.env.NODE_ENV === 'production' ? `/` : '/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        // 'Content-Type': 'application/json;charset=utf-8'
    },
    withCredentials: false, // 跨域请求时是否需要使用凭证
    timeout: 3000,
    // `validateStatus` 定义对于给定的 HTTP 响应状态码是 resolve 或 reject  promise 。
    validateStatus() {
        // `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
        // 使用 async-await，处理 reject 情况较为繁琐，所以全部返回 resolve，在业务代码中处理异常
        return true;
    },

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [(data) => {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data);
        }
        return data;
    }]
});

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
// const pending = new Map();

// /**
//  * @description: 添加请求
//  * @param {AxiosRequestConfig} config
//  */
// const addPending = (config: AxiosRequestConfig) => {
//     const url = [
//         config.method,
//         config.url,
//         qs.stringify(config.params),
//         qs.stringify(config.data)
//     ].join('&');

//     config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
//         if (!pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
//             // console.log("请求队列中不存在当前请求，添加请求")
//             pending.set(url, cancel);
//         }
//     });
// }

// /**
//  * @description: 移除请求
//  * @param {AxiosRequestConfig} config
//  * @return {*}
//  */
// let isRemove = false
// const removePending = (config: AxiosRequestConfig) => {
//     const url = [
//         config.method,
//         config.url,
//         qs.stringify(config.params),
//         qs.stringify(config.data)
//     ].join('&');

//     if (pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
//         // console.log("请求队列中已存在当前请求，不再重复请求");
//         const cancel = pending.get(url);
//         isRemove = true
//         cancel(url); // 取消请求
//         pending.delete(url);
//     }
// }

// /**
//  * @description: 清空 pending 中的请求（在路由跳转时调用）
//  */
// export const clearPending = () => {
//     // console.log("清空请求队列");
//     for (const [url, cancel] of pending) {
//         cancel(url); // 取消请求
//     }
//     pending.clear(); // 清空请求
// }

// // 添加请求拦截器
// service.interceptors.request.use((config: AxiosRequestConfig) => {
//     // console.log('发送请求之前', config.url);

//     removePending(config); // 在请求开始前，对之前的请求做检查取消操作
//     addPending(config); // 将当前请求添加到 pending 中
//     // 这里可以对token进行操作
//     return config;
// }, (error: any) => {
//     // console.log('发送请求错误', error.response, error.data);

//     // 错误抛到业务代码
//     error.data = {
//         message: '服务器异常，请联系管理员！'
//     };

//     return Promise.reject(error);

// });

// //添加响应拦截器
// service.interceptors.response.use((response: AxiosResponse) => {
//     // console.log('响应拦截', response.status, response);

//     removePending(response); // 在请求结束后，移除本次请求

//     /* 处理 http 错误，抛到业务代码 */
//     const status = response.status;
//     const decide = status < 200 || status >= 300;
//     if (decide) { // http 错误
//         const message = showStatus(status);
//         // console.log("处理 http 错误", message);
//         if (typeof response.data === 'string') {
//             response.data = { message };
//         } else {
//             response.data.message = message;
//         }
//         ElMessage({
//             message,
//             type: 'error',
//             showClose: true
//         });
//         return Promise.reject(response.data);
//     } else { // 接口连接成功
//         if (response.request.status == 200) {
//             return response
//         } else { // 接口报错
//             if (response.config.url) {
//                 if (response.config.url.indexOf('login') > -1) {

//                 } else {
//                     ElMessage({
//                         message: response.data.data || response.data.message,
//                         type: 'error',
//                         showClose: true
//                     });
//                 }
//                 throw response;// 抛出错误
//             }
//         }
//     }
// }, (error: any) => {
//     // console.log('请求错误', error, axios.isCancel(error), error.message);
//     if (axios.isCancel(error)) { // 取消请求
//         if (isRemove) { // 路由切换导致的取消请求，不提示
//             // console.log('重复请求: ' + error.message);
//             ElMessage({
//                 message: '请勿重复请求',
//                 type: 'warning',
//                 showClose: true
//             });
//             isRemove = false
//         }
//     } else {
//         const message = '请求超时或服务器异常，请检查网络或联系管理员！';
//         ElMessage({
//             message,
//             type: 'error',
//             showClose: true
//         });
//     }

//     return Promise.reject(error);
// });

// const showStatus = (status: number) => {
//     let message = '';
//     switch (status) {
//         case 400:
//             message = '请求错误(400)';
//             break;
//         case 401:
//             message = '未授权，请重新登录(401)';
//             break;
//         case 403:
//             message = '拒绝访问(403)';
//             break;
//         case 404:
//             message = '请求出错(404)';
//             break;
//         case 408:
//             message = '请求超时(408)';
//             break;
//         case 500:
//             message = '服务器错误(500)';
//             break;
//         case 501:
//             message = '服务未实现(501)';
//             break;
//         case 502:
//             message = '网络错误(502)';
//             break;
//         case 503:
//             message = '服务不可用(503)';
//             break;
//         case 504:
//             message = '网络超时(504)';
//             break;
//         case 505:
//             message = 'HTTP版本不受支持(505)';
//             break;
//         default:
//             message = `连接出错(${status})!`;
//     }
//     return message;
//     // return `${message}，请检查网络或联系管理员！`
// };

export default service;