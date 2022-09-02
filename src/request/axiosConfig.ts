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
// import axios from "axios"

// 获取token
let token = localStorage.getItem("token")
    if(!token) {
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
    
    if (token) { //判断token是否存在
        config.headers!.token = token;  //将token设置成请求头
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