import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 工作室介绍页面的组件引入
import Introduce from "../components/introduce.vue"
import IntroduceOne from "../components/introduce_one.vue"
import IntroduceTwo from "../components/introduce_two.vue"
import IntroduceThree from "../components/introduce_three.vue"
import IntroduceFour from "../components/introduce_four.vue"
// 登录注册页面的组件引入
import Login from "../components/login.vue"
import Register from "../components/register.vue"


const routes: Array<RouteRecordRaw> = [
    // 根路径重定向
    {
        path:'/',
        redirect: '/introduce'
    },
    // 介绍页面路由
    {
        path: '/introduce',
        component: Introduce,
        // redirect: '/login', 
        // 介绍页面路由的子路由
        children:[
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
            }
        ]
    },
    // 登录页面路由
    {
        path: '/login',
        component: Login
    },
    // 注册页面路由
    {
        path: '/register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;