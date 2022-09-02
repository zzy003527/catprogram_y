import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import login from "../views/LoginRegister/login.vue"
import register from "../views/LoginRegister/register.vue"
import forgetPassword from "../views/LoginRegister/forgetPassword.vue"
import changePassword from "../views/LoginRegister/changePassword.vue"
// 工作室介绍页面的组件引入
import Introduce from "../views/introduction/introduce.vue"
import IntroduceOne from "../views/introduction/children/introduce_one.vue"
import IntroduceTwo from "../views/introduction/children/introduce_two.vue"
import IntroduceThree from "../views/introduction/children/introduce_three.vue"
import IntroduceFour from "../views/introduction/children/introduce_four.vue"
// 后台主页
import backPage from "../views/backPage.vue"
// 报名页面
import Application from "../views/aplication/Application.vue"
// 预约面试页面
import Booking from "../views/Booking/Booking.vue"
// 查看用户进度页面
import UserProgress from "../views/userprogress/userProgress.vue"



const routes: Array<RouteRecordRaw> = [
    // 根路径重定向
    {
        path: '/',
        redirect: '/introduce'
    },
    // 介绍页面路由
    {
        path: '/introduce',
        component: Introduce,
        // 介绍页面路由的子路由
        children: [
            {
                path: 'introduceone',
                component: IntroduceOne
            },
            {
                path: 'introducetwo',
                component: IntroduceTwo
            },
            {
                path: 'introducethree',
                component: IntroduceThree
            },
            {
                path: 'introducefour',
                component: IntroduceFour
            },
            // 登录注册部分
            {
                path: 'login',
                component: login,
            },
            {
                path: 'register',
                component: register
            },
            {
                path: 'forgetPassword',
                component: forgetPassword
            },
            {
                path: 'changePassword',
                component: changePassword
            }
        ]
    },
    // 后台主页
    {
        path: '/backPage',
        component: backPage,
        redirect: '/backPage/application',
        children: [
            {
                path: 'application',
                component: Application
            },
            {
                path: 'booking',
                component: Booking
            },
            {
                path: 'userprogress',
                component: UserProgress
            }
        ]
    }
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to,form,next) => {
    // 如果进入的时候检测到进入介绍页面并且localStorage中有token的话，就证明有七天免登录
    if(to.path.indexOf("/introduce") !== -1 && localStorage.getItem("token")) {
        // 跳转到后台主页
        router.push("/backPage")
    }
    // 如果进入(非介绍页或登录注册页)的时候没有检测到localStorage或者sessionStorage中有token的话，那么就跳转到介绍页
    let userToken = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : window.sessionStorage.getItem('token')
    if(to.path.indexOf("/introduce") === -1 && !userToken) {
        router.push("/")
    }
    // 如果用户未能验证身份，则 `next` 会被调用两次
    next()
  })
  


export default router;