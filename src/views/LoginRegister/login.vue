<template>
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="学号" prop="studentNumber">
      <el-input v-model="ruleForm.studentNumber" class="NumberInput" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" show-password class="NumberInput" autocomplete="off" />
    </el-form-item>
    <div>
      <span class="forgetPassword">
        <router-link class="list-group-item" active-class="active" to="/introduce/forgetPassword">忘记密码？</router-link>
      </span>
    </div>
    <div class="loginFooter">
      <el-button class="loginSubmit" type="primary" @click="submitForm(ruleFormRef)">登陆
      </el-button>
    </div>
    <el-checkbox v-model="checked1" label="七天免登录" size="small" />
  </el-form>
  <el-divider />

  还没有账号？ <router-link class="list-group-item" active-class="active" to="/introduce/register">注册账号</router-link>
</template>


<script lang='ts' setup>
// 引入所需方法
import { Router, useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { login, handleError } from '../../request/requestApi'
import store from '../../store/index';


// 声明router，用于编程式导航，相当于之前学的this.$router
const router: Router = useRouter()

const checked1 = ref(true)
//设置学号和密码不能够为空
const ruleFormRef = ref<FormInstance>()
const checkUserNumber = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入学号'))
  } else {
    callback()
  }
}
const validatePass = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  studentNumber: '',
  pass: '',

})

const rules = reactive({
  studentNumber: [{ validator: checkUserNumber, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }]
})
//如果登陆成功就触发成功弹窗
const sucessLogin = () => {
  ElMessage({
    message: '登陆成功',
    type: 'success',
  })
}
const failLogin = (msg: string) => {
  ElMessage.error(`${msg}`)
}
let timer = true;
const submitForm = (formEl: FormInstance | undefined) => {

  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {

      if (timer) {

        timer = false;
        setTimeout(() => {
          console.log('7777');
          timer = true;
        }, 3000);
        login({
          studentId: ruleForm.studentNumber,
          password: ruleForm.pass,
          isSeven: checked1.value
        }).then((res) => {
          if (res.resultStatus != 200) {
            failLogin(res.resultIns)
          }
          else {
            sucessLogin()
            store.commit("configLoginCars", false)
            //登陆成功的时候根据是否勾选七天免登陆来判断把token存储到localstorage里面还是sessionstorage
            if (checked1.value == true) {
              localStorage.setItem('token', `${res.obj}`);
              localStorage.setItem("refreshToken", res.map.refreshToken)
            }
            else {
              sessionStorage.setItem('token', `${res.obj}`);
              sessionStorage.setItem("refreshToken", res.map.refreshToken)
            }
            // 跳转到后台主页
            router.push('/backPage')
            store.commit('configNavigationShow', true)
            console.log(store);

          }
          return res
        })
          .catch(handleError);
        //登陆之后清空数据
        ruleForm.studentNumber = '';
        ruleForm.pass = '';
      }

    } else {
      console.log('error submit!')
      return false;
    }
  })



}

</script>
<style scoped>
.loginNumber {
  display: flex;
  justify-content: center;
}

.loginHeaderTitle {
  font-size: 50px;
  color: #aa87c58f;
  margin-left: 0;
  padding: 0;
  text-align: left;
  font-family: fantasy;
}

.forgetPassword {
  position: absolute;
  bottom: 187px;
  right: 104px;
  font-size: 12px;
}
</style>
<style>
.loginWindow {
  width: 480px !important;
  border-radius: 10px !important;
}

.NumberInput {
  width: 230px !important;
}

.el-dialog__header {
  padding-bottom: 0;
  width: 440px;
  height: 251px;
  background-image: url(/login.jpg);
  border-radius: 10px 10px 0 0;
  background: right top no-repeat url(/login.jpg);
  background-size: 484px 296px;
}

.loginSubmit {
  width: 266px;
  margin-top: 34px;
  border-radius: 149px !important;

}

.loginFooter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>