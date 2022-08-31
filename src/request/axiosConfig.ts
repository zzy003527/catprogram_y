// ./src/plugins/axios/axiosConfigs.ts
/*
 * @Author: una
 * @Date: 2021-06-16 17:16:12
 * @LastEditors: una
 * @LastEditTime: 2021-07-09 14:51:28
 * @Description: 封装 axios
 */
//这是axios配置的ts文件 

import axios, { AxiosRequestConfig,AxiosResponse } from 'axios';

// 创建axios的实例
const service = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    baseURL: process.env.NODE_ENV === 'production' ? `/` : '/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        // 'Content-Type': 'application/json'`
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

// 添加请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    let token = localStorage.getItem("token")
    if(!token) {
        token = sessionStorage.getItem("token")
    }
    if (token) { //判断token是否存在
        config.headers!.Authorization = token;  //将token设置成请求头
      }
      return config;
    },
    (err: any) => {
        return Promise.reject(err)
      },
)


// //添加响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    return response
})

export default service;