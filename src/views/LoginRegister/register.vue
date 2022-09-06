<template>
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name" class="NumberInput" autocomplete="off" />
    </el-form-item>
    <el-form-item label="学号" prop="studentNumber">
      <el-input v-model="ruleForm.studentNumber" class="NumberInput" autocomplete="off" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" class="NumberInput" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input class="NumberInput" v-model="ruleForm.pass" show-password type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" show-password autocomplete="off" class="NumberInput" />
    </el-form-item>

    <div class="loginFooter">
      <el-button class="loginSubmit" type="primary" @click="submitForm(ruleFormRef)">注册
      </el-button>
      <div>
        <router-link class="list-group-item" active-class="active" to="/introduce/login">返回登陆</router-link>
      </div>
    </div>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { register } from "../../request/requestApi"
import { Router, useRouter } from 'vue-router'
// 声明router，用于编程式导航，相当于之前学的this.$router
const router: Router = useRouter()
const ruleFormRef = ref<FormInstance>()
const checkName = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入姓名'))
  } else {
    callback()
  }
}
const checkUserNumber = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入学号'))
  } else {
    callback()
  }
}
const checkEmail = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入邮箱'))
  } else {
    let reg = /^\w{1,18}@[a-z0-9]+(\.[a-z]{2,4})+$/i;
    if (!reg.test(value)) {
      callback(new Error('邮箱格式不正确'))
    }
    else {
      callback()
    }
  }
}
const validatePass = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (!(/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,16}$/.test(value))) {
    callback(new Error('密码至少包含数字和英文，长度6-16'))
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
  name: '',
  studentNumber: '',
  email: '',
  pass: '',
  checkPass: '',
})

const rules = reactive({
  name: [{ validator: checkName, trigger: 'blur' }],
  studentNumber: [{ validator: checkUserNumber, trigger: 'blur' }],
  email: [{ validator: checkEmail, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})


//如果登陆成功就触发成功弹窗
const sucessLogin = () => {
  ElMessage({
    message: '注册成功，请登陆',
    type: 'success',
  })
}
// 失败弹窗
const failLogin = (msg: string) => {
  ElMessage.error(`${msg}`)
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      // 准备报名数据
      const registerParams = {
        email: ruleForm.email,
        password: ruleForm.pass,
        studentId: ruleForm.studentNumber,
        username: ruleForm.name
      }
      // 发送请求
      register(registerParams).then((res) => {
        if (res.resultStatus != 200) {
          failLogin(res.resultIns)
        } else {
          sucessLogin()
          //注册成功之后 就返回登陆的页面
          router.push("/introduce/login")

        }
      }).catch((err) => {
        console.log(err);
      })
    } else {
      return false
    }
  })
}


</script>

<style scoped>
.loginSubmit {
  width: 266px;
  margin-top: 24px;
  border-radius: 149px !important;

}
</style>
<style>
.NumberInput {
  width: 230px !important;
}

.loginFooter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>