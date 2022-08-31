<template>
    <div class="navigation">
        <router-link to="/" class="left">C.A.T</router-link>
        <div class="right">
            <router-link to="/" class="right-item">主页</router-link>
            <router-link to="/backPage/application" class="right-item">报名</router-link>
            <router-link to="/backPage/booking" class="right-item">预约面试</router-link>
            <a class="right-item" @click="signout"> 退出登录</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { logout } from '../../request/requestApi'
import { Router, useRouter } from 'vue-router';
const router: Router = useRouter()


const signout = () => {
    router.push('/')
    ElMessageBox.alert('真的要退出吗', '提示', {
        confirmButtonText: '是的',
        callback: () => {
            signoutCallback()
        },
    })
}
const signoutCallback = () => {
    logout(window.localStorage.getItem('token')).then(res => {
        ElMessageBox.alert(res.resultIns, '提示', {
            confirmButtonText: '是的',
        })
        window.localStorage.removeItem('token')
    })
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: rgb(104, 9, 9);
}

a:hover {
    color: rgb(226, 32, 32);
}

.navigation {
    width: 100%;
    max-width: 1228px;
    display: flex;
    justify-content: space-between;
    z-index: 9;
    position: absolute;
    top: 10px;
    /* left: calc(-2em+50%); */
    left: 50%;
    transform: translateX(-50%);
    padding-left: 2em;
    margin-left: -2em;
    font-size: 20px;
}

.left {
    margin-left: 30px;
    font-size: 30px;
}

.left,
.right-item {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 20px;
}

.right {
    display: flex;
    justify-content: space-around;
}
</style>
