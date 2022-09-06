// ./src/plugins/axios/axiosConfigs.ts
/*
 * @Author: una
 * @Date: 2021-06-16 17:16:12
 * @LastEditors: una
 * @LastEditTime: 2021-07-09 14:51:28
 * @Description: 封装 axios
 */
//这是axios配置的ts文件 

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import axios from "axios"

// 获取token
let token = localStorage.getItem("token")
if (!token) {
    token = sessionStorage.getItem("token")
}



// 创建axios的实例
const service = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    // baseURL: process.env.NODE_ENV === 'production' ? `/` : '/api',
    headers: {
        'token': `${token}`
    },
    withCredentials: false, // 跨域请求时是否需要使用凭证
    timeout: 10000,
});

// 添加请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    let userToken = localStorage.getItem("token")
    if (!userToken) {
        userToken = sessionStorage.getItem("token")
    }
    if (userToken) { //判断token是否存在
        config.headers!.token = userToken;  //将token设置成请求头
    }
    return config;
},
    (err: any) => {
        return Promise.reject(err)
    },
)
// service.interceptors.response.use(
//     async response => {
//       const config = response.config ;
//       const resData = response.data;
//       if (resData?.code === REQUEST_SUCCESS_CODE) {
//         // 请求成功
//         return Promise.resolve(resData?.data);
//       }

//       // token过期
//       if (resData.subCode === 'user.token.expired') {
//           // 重新请求token
//           const authCode = await getAuthCodePromise();
//           const [err, res] = await authBase(authCode);
//           alipayUserId = res?.alipayUserId || '';
//           userToken = res?.userToken || '';
//           config.headers.userToken = userToken;
//           // 重置baseUrl  特别注意：如果不重置会出现/api/api
//           config.baseURL = '';
//           // 重新请求
//           return miniAxios(config);

//       }
//       // 错误处理
//       return Promise.reject(resData);
//     },
//     err => {
//     },
//   );



// //添加响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    return response
})

export default service;