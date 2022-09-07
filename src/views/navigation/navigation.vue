<template>
    <div class="navigation">
        <a class="left" :href="httpUrl.introduce">C.A.T</a>
        <div class="right">
            <router-link to="/backPage/application" class="right-item">个人信息</router-link>
            <router-link to="/backPage/booking" class="right-item">预约面试</router-link>
            <router-link to="/backPage/userProgress" class="right-item">面试进度</router-link>
            <a class="right-item" @click="signout"> 退出登录</a>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入所需方法
import { ElMessageBox } from 'element-plus'
import { logout } from '../../request/requestApi'
import httpUrl from '/@/request/httpUrl'
import store from "/@/store/index";
// 退出登录部分
const signout = () => {

    ElMessageBox.alert('真的要退出吗', '提示', {
        confirmButtonText: '是的',
        callback: (actions) => {
           if(actions=='confirm') signoutCallback()
        },
    })
}
const signoutCallback = () => {
    logout().then(() => {
        window.localStorage.removeItem('token')
        window.sessionStorage.removeItem('token')
        // window.location.href = "http://106.52.239.206:80/"
        window.location.href =httpUrl.introduce
        window.localStorage.removeItem('booked')
        store.commit('configNavigationShow',false)
        // 再次确认
    }).catch(err => {
        ElMessageBox.alert(err.resultIns, '提示', {
            confirmButtonText: 'OK',
        })
    })
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: rgb(104, 9, 9);
    transition: 0.5s;
    cursor: pointer;
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
