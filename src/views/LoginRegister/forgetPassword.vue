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
      	<router-link class="list-group-item" active-class="active" to="/introduce/changePassword"> 
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
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkEmail = (_rule: any, value: any, callback: any) => {
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
  email: [{ validator: checkEmail, trigger: 'blur' }],
  checkMessage: [{ validator: checkEmail, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
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