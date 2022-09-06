<script setup lang="ts">
import navigation from './views/navigation/navigation.vue';
import store from './store/index'

 let token = localStorage.getItem("token")
if (!token) {
    token = sessionStorage.getItem("token")
}
if(token)store.commit('configNavigationShow',true)
</script>


<template>
  <div id="app">
    <navigation v-show="store.state.navigationShow" />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
