<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="新密码" prop="pass">
      <el-input class="NumberInput" v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="确认新密码" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
        class="NumberInput"
      />
    </el-form-item>
    	
    <div class="loginFooter">
   
     
      <el-button class="loginSubmit"  type="primary" @click="submitForm(ruleFormRef)"
        >确认
      </el-button>   
      <div> <router-link class="list-group-item" 
                       active-class="active" to="/introduce/login">返回登陆</router-link></div>
      </div>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import store from "../../store/index"
import { changePassword } from "../../request/requestApi"
import { ElMessage } from 'element-plus'

const ruleFormRef = ref<FormInstance>()


  //如果登陆成功就触发成功弹窗
const sucessLogin = () => {
  ElMessage({
    message: '修改密码成功',
    type: 'success',
  })
}
// 失败弹窗
const failLogin = (msg: string) => {
  ElMessage.error(`${msg}`)
}

const validatePass = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if(!(/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(value))){
    callback(new Error('密码至少包含数字和英文，长度6-20'))
  }
  else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请确认密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次输入的密码不匹配！"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(() => {
    // 准备数据
    const params = {
      email: store.state.thisEmail,
      newPassword: ruleForm.pass
    }
    changePassword(params).then((res) => {
      if(res.resultStatus !== '200') {
        // 失败弹窗
        failLogin(res.resultIns)
      } else {
        // 成功弹窗
        sucessLogin()
        // 清空输入框数据
        ruleForm.pass = ''
        ruleForm.checkPass = ''
      }
    }).catch((err) => {
      console.log(err);
    })
  })
}


</script>

<style scoped>
.loginSubmit{
    width: 266px;
    margin-top: 24px;
    border-radius: 149px !important;

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