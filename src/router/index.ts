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


export default router;