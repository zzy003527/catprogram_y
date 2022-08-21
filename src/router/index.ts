import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 工作室介绍页面的组件引入
import Introduce from "../components/introduce.vue"
import IntroduceOne from "../components/introduce_one.vue"
import IntroduceTwo from "../components/introduce_two.vue"
import IntroduceThree from "../components/introduce_three.vue"
import IntroduceFour from "../components/introduce_four.vue"


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
        // redirect: '/introduce/introduceone',
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
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;