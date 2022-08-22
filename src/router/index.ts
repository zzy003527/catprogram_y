import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import login from "../components/login.vue"
import register from "../components/register.vue"
import forgetPassword from "../components/forgetPassword.vue"
import changePassword from "../components/changePassword.vue"
const routes: Array<RouteRecordRaw> = [

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/forgetPassword',
        component: forgetPassword
    },
    {
        path: '/changePassword',
        component: changePassword
    }
    ],
});

export default router;