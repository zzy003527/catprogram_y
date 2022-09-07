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
import { tr } from 'element-plus/es/locale';
import router from '../router';
import {refreshToken} from "./requestApi"
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
    //console.log(config);
    
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




let isNotRefresh = true;
let requests:Array<any> = [];

function getFreshToken(){
    return localStorage.getItem('refreshToken') == null?sessionStorage.getItem('refreshToken'):localStorage.getItem('refreshToken');
}

function getToken(){
    return localStorage.getItem('token') == null?sessionStorage.getItem('token'):localStorage.getItem('token');
}

//清除localstorage sessionstorage数据 返回登录页面
function backToLogin(){
     sessionStorage.clear();
     localStorage.clear();
     //重定向到初始页面
     window.location.href="/";
}

//更新本地token和refreshToken
function resetTokenAndRefreshToken(newToken,refreshToken){
    if(localStorage.getItem('refreshToken')!=null){
        localStorage.setItem('token',newToken);
        localStorage.setItem('refreshToken',refreshToken);
    }else if(sessionStorage.getItem('refreshToken')!=null){
        sessionStorage.setItem('token',newToken);
        sessionStorage.setItem('refreshToken',refreshToken);
    }
    
}

//添加响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    
    const data = response;
    const status = data.data.resultStatus;
    const config = response.config;
    let text = '';
    switch(status){
        //token过期,需要刷新token
        case '402':
            //有refreshToken
            if(getFreshToken() != null){
                //没有在刷新token
                if(isNotRefresh){
                    isNotRefresh = false;
                    return refreshToken(getFreshToken()).then((res)=>{
                        if(res.resultStatus != '200'){
                            //刷新token失败，需要重新登录
                            console.log(res.resultIns);
                            //清除localstorage sessionstorage 返回登录页面
                            backToLogin();
                            //跳回登录页面
                        }else{
                            //更新本地的token和refreshToken
                            console.log('刷新token,refreshToken');
                            //更新本地token和refreshToken
                            // localStorage.setItem('token',res.obj);
                            // localStorage.setItem('refreshToken',res.map.refreshToken);
                            resetTokenAndRefreshToken(res.obj,res.map.refreshToken);
                            //执行requests队列中的请求
                            //更新等待请求队列的token
                            response.config.headers!.token = (localStorage.getItem('token') == null?sessionStorage.getItem('token'):localStorage.getItem('token')) as string | number | boolean;
                            //执行等待队列的请求
                            requests.forEach(run => run())
                            //requests.forEach(a=>a(res.obj));
                            //将请求队列置空
                            requests = [];
                            //重新执行当前未执行成功的请求并返回
                            console.log('重新发送未执行成功的请求')
                            return axios(config);
                        }
                    }).catch(()=>{
                        console.log('报错？？？？');
                        //清除localstorage sessionstorage 返回登录页面
                        // backToLogin();
                    }).finally(()=>{
                        //刷新结束，更改标识
                        isNotRefresh = true;
                    })
                //正在刷新token,拒绝请求加入队列，等到刷新成功token后执行
                }else{
                    return new Promise(resolve=>{
                        requests.push(() => {
                            config.headers!.token = (localStorage.getItem('token') == null?sessionStorage.getItem('token'):localStorage.getItem('token')) as string | number | boolean;
                            resolve(axios(config));
                        })
                    })
                }
            }else{
                //找不到refreshToken，无法刷新，重新登录
                //跳回登录页面
                //清除localstorage sessionstorage 返回登录页面
                backToLogin();
                console.log("token过期,需要重新登录");
            }
            break
        //未登录
        case '406':
            console.log('需要重新登录')
            //清除localstorage sessionstorage 返回登录页面
            backToLogin();
            break
    }

    return data

    // // 判断是否需要Token刷新
    // if(response.data.resultStatus === '406') {
    //     alert("请重新登陆")
    // }

    // //需要刷新token
    // if (response.data.resultStatus === "402") {
    //     axios.defaults.headers.common['refreshToken'] = localStorage.getItem("refreshToken") as string | number | boolean;
    //     // 刷新Token（可以使用同步操作）

    //     console.log(localStorage.getItem("refreshToken"));
    //         // 将新的Token设置到axios的默认请求头
    //         axios.defaults.headers.common['token'] = localStorage.getItem("token") as string | number | boolean;
    //         // 将新的Token设置到重发的请求头
    //         response.config.headers!.token = localStorage.getItem("token") as string | number | boolean;

    //     // 请求重发
    //     return axios.request(response.config);
    //     //return
    // }

    //return response
})



//     // 根据刷新状态处理请求
// function handleByRefreshStatus(config, type = 'response') {
//     return new Promise((resolve) => {
//       const status = localStorage.getItem('refresh_token_status')
//       if (type === 'request') {
//         // 判断是否正在刷新 token
//         if (!status) {
//           resolve(config)
//         } else {
//           requestQueue.add(config, resolve)
//         }
//       } else {
//         // 将请求添加到队列中，待刷新完成后执行队列
//         requestQueue.add(config, resolve)
  
//         // 判断 token 刷新状态
//         if (!status) {
//           // 设置刷新状态
//           localStorage.setItem('refresh_token_status', 1)
  
//           // 获取新 token
//           refreshTokenFetch(localStorage.getItem('access_token'))
//             .then(({ data: res }) => {
//               if (!(res && res.data && res.data.access_token)) {
//                 throw res
//               }
//               localStorage.setItem('access_token', res.data.access_token)
  
//               localStorage.removeItem('refresh_token_status')
  
//               // 执行队列
//               requestQueue.execute()
//             })
//             .catch(err => {
//               console.error('refresh token failed', err)
//               localStorage.removeItem('refresh_token_status')
//               // 清空队列
//               requestQueue.clear()
//               // 登录过期处理
//               loginExpired()
//             })
//         }
//       }
//     })
//   }
  
//   // 登录过期处理
//   function loginExpired() {
//     // 客户端提示用户登录过期的处理方案
//   }
  
//   // 刷新 token 请求
//   function refreshTokenFetch(refresh_token) {
//     return service.post('/refreshToken', {
//         refresh_token,
//     })
//   }
  
	

export default service;