<template>
  学号：<el-input v-model="userNumber" placeholder="Please input" />
  用户名：<el-input v-model="userName" placeholder="Please input" />
  密码：  <el-input
    v-model="password"
    type="password"
    placeholder="Please input password"
    show-password
  />
  确认密码：  <el-input
    v-model="checkPassword"
    type="password"
    placeholder="Please input password"
    show-password
  />
  邮箱：<el-input v-model="userEmail" placeholder="Please input" />
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const userNumber = ref('')
const userName = ref('')
const password = ref('')
const checkPassword = ref('')
const userEmail = ref('')
</script>
<style scoped>
</style>