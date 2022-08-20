<template>
  学号:<el-input v-model="usernNumber" placeholder="Please input" @blur="checkUserNumber" />
   <el-alert title="学号不能为空" type="error" v-show='tipUserNumber'/>
  密码:<el-input
    v-model="password"
    type="password"
    placeholder="Please input password"
    show-password
    @blur="checkPassword" 
  />
  <el-alert title="密码不能为空" type="error" v-show='tipPassword'/>
  忘记密码？
  <el-button type="primary">登陆</el-button>
   <el-checkbox v-model="checked1" label="七天免登录" size="large" />
  还没有账号？注册账号
  
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const usernNumber = ref('')
const password = ref('')
const checked1 = ref(true)
const tipUserNumber = ref(false)
const tipPassword = ref(false)
//checkUserNumber 设置学号框失去焦点之后
function checkUserNumber(){
  //学号不能为空
  if(usernNumber.value.trim()===''){
    tipUserNumber.value = true;
  }
   
}
function checkPassword(){
  if(password.value.trim()===''){
    tipPassword.value = true;
  }
}
</script>
<style scoped>
</style>