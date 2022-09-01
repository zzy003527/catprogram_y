<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号邮箱" prop="email">
      <el-input v-model="ruleForm.email"   class="NumberInput"  autocomplete="off" />
    </el-form-item>
     <el-form-item label="验证码" prop="checkMessage">
      <el-input v-model="ruleForm.checkMessage"   class="NumberInput"  autocomplete="off" >
       <template #append>
        <el-button type="primary" class="getMessage" v-show="timeTrue == true" @click="acquire">获取验证码</el-button> 
        <el-button type="primary" v-show="timeTrue == false" >{{ time }}秒后重新获取</el-button >
        </template>
     </el-input>
    </el-form-item>   	
    <div class="loginFooter">
      	<router-link class="list-group-item" active-class="active" to=""> 
            <el-button class="loginSubmit"  type="primary" @click="submitForm(ruleFormRef)">
            确认
            </el-button> 
        </router-link>
       
      <div> <router-link class="list-group-item" 
                       active-class="active" to="/introduce/login">返回登陆</router-link></div>
      </div>
  </el-form>
</template>

<script lang='ts' setup>
  // 引入所需方法
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { getVerifyCode } from '../../request/requestApi'
import store from "../../store/index"
import { Router, useRouter } from 'vue-router' 

// 声明router，用于编程式导航，相当于之前学的this.$router
const router: Router = useRouter()


//如果登陆成功就触发成功弹窗
const sucessLogin = () => {
  ElMessage({
    message: '获取验证码成功',
    type: 'success',
  })
}
//如果验证码验证成功就触发成功弹窗
const sucessLogin1 = () => {
  ElMessage({
    message: '验证码验证成功，请修改密码',
    type: 'success',
  })
}
// 失败弹窗
const failLogin = (msg: string) => {
  ElMessage.error(`${msg}` + "，请稍后重试")
}

const ruleFormRef = ref<FormInstance>()

const checkEmail1 = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入邮箱'))
  } 
    else{
      callback()
    }
  
}

const checkEmail2 = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } 
    else{
      callback()
    }
  
}

const ruleForm = reactive({
  email:'',
  checkMessage:''

})

const rules = reactive({
  email: [{ validator: checkEmail1, trigger: 'blur' }],
  checkMessage: [{ validator: checkEmail2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      // 获取验证码
      if(store.state.verifyCode !== ruleForm.checkMessage) {
        let message = "验证码错误"
        failLogin(message)
      } else {
        // 发送成功的弹窗，跳转到修改密码页面
        sucessLogin1()
        router.push("/introduce/changePassword")
        store.commit("configthisEmail",ruleForm.email)
      }
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
  })
}
const timeTrue = ref(true)
const time = ref(60)
 function acquire() {  
  // 准备要发送的数据
  const params = {
          email: ruleForm.email
        }
      getVerifyCode(params).then((res) => {
        console.log(res);
        
        if(res.resultStatus !== "200") {
          // 发送失败提示框
          failLogin(res.resultIns)
        } else {
          // 发送成功提示框
          sucessLogin()
          // 存入验证码
          store.commit("configverifyCode",res.obj)
        }
      }).catch((err) => {
        console.log(err);
      })
  // 设置获取验证码按钮重置
     timeTrue.value = false;   
     time.value = 60;   
     var setTimeoutS = setInterval(() => {  
      time.value--;   
     if (time.value <= 0) {     
     clearInterval(setTimeoutS);  
        timeTrue.value = true;      
  }   
   }, 1000); 
   } 


</script>

<style scoped>
.loginSubmit{
    width: 266px;
    margin-top: 24px;
    border-radius: 149px !important;

}
.getMessage{
    background-color: #409eff !important;
    color: #fff !important;
}
</style>
<style>
.NumberInput {
    width: 230px!important;
}
.loginFooter{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>