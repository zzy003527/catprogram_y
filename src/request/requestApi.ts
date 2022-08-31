// ./src/request/requestApi.ts
// 这是封装请求的ts文件

import request from './request'; // axios 封装
import httpUrl from "./httpUrl"; // 接口 url
// import qs from 'qs'

// 此处的两个请求为示例，如果使用请自行更改-----------------------------------------------------------------------------------------------------------------
// 获取 banner
const getBanner = async () => {
    return await request.get(httpUrl.banner);
}
// ------------------------------------------登录注册部分-----------------------------------------
// 用户登录
const login = async (params) => {
    return await request.post<string>(httpUrl.login, params);
}
const handleError = (err: any) => {
    // console.log("请求错误", err);
    throw err;
}
// 用户注册
const register = async(params) => {
    return await request.post<string>(httpUrl.register,params);
}
// ---------------------------------------------------------------------------------------------------------------------------------------
// 上传表单
const apply = async (params) => {
    return await request.post<string>(httpUrl.apply,params);
}
//获取预约信息
const BookData = async (params) => {
    return await request.post(httpUrl.BookData,params);
}
//用户提交预约时间
const timeSubmit = async (params) => {
    return await request.post<string>(httpUrl.timeSubmit,params);
}
//用户取消预约
const bookCancel = async (params) => {
    return await request.post<string>(httpUrl.bookCancel,params);
}


//查看用户进度
const userProgress = async (params) => {
    return await request.post<string>(httpUrl.userProgress,params);
}
export {
    getBanner,
    login,
    register,
    handleError,
    apply,
    BookData,
    timeSubmit,
    bookCancel,
    userProgress
}