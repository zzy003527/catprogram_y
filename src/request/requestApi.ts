// ./src/request/requestApi.ts
// 这是封装请求的ts文件

import request from './request'; // axios 封装
import httpUrl from "./httpUrl"; // 接口 url
import qs from "qs";


// 此处的两个请求为示例，如果使用请自行更改-----------------------------------------------------------------------------------------------------------------
// 获取 banner
const getBanner = async () => {
    return await request.get(httpUrl.banner);
}
// 用户登录
const login = async (params) => {
    return await request.post<string>(httpUrl.login, qs.stringify(params));
}
// ---------------------------------------------------------------------------------------------------------------------------------------

const handleError = (err: any) => {
    // console.log("请求错误", err);
    throw err;
}

export {
    getBanner,
    login,
    handleError
}