<template>
  <div h="auto" w="auto" m="20" class="table" :style="{
    boxShadow: `var(${getCssVarName('light')})`
  }">
    <!-- 表单部分 -->
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm"
      style="width:640px">
      <el-row>
        <el-col :span="12">
          <!-- 基础信息 -->
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="true" style="width:68px">男</el-radio>
              <el-radio label="false" style="width:68px">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="学号" prop="number">
            <el-input v-model="ruleForm.number" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="学院" prop="institute">
            <el-input v-model="ruleForm.institute" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="ruleForm.major" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="ruleForm.phone" type="text" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="11" style="margin-left:10px ;">
          <!-- 自我介绍 -->
          <el-form-item label="自我介绍" prop="introduction" label-position="top">
            <el-input v-model="ruleForm.introduction" :rows="8" type="textarea" show-word-limit:true />
          </el-form-item>
          <!-- 选择报名方向 -->
          <el-form-item label="方向" prop="group">
            <el-radio-group v-model="ruleForm.group">
              <el-radio label="false" border style="width:89px">前端</el-radio>
              <el-radio label="true" border style="width:89px">后端</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 上传照片 -->
          <ApplicationPhoto />
        </el-col>
      </el-row>
      <!-- 提交及重置按钮 -->
      <ApplicationSubmit :ruleFormRef="ruleFormRef" :ruleForm="ruleForm" @resert="resetForm(ruleFormRef)"
        @formCheck="formCheck(ruleFormRef)" class="application" />
    </el-form>

  </div>
</template>


<script lang="ts" setup>
import ApplicationPhoto from './ApplicationPhoto.vue'
import ApplicationSubmit from './ApplicationSubmit.vue'

import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

// 样式
const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
// 输入内容及规则部分
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  name: '',
  number: '',
  institute: '',
  major: '',
  group: '',
  phone: '',
  sex: '',
  introduction: ''
})

const rules = reactive({
  name: [
    { required: true, message: '请输入你的名字', trigger: 'blur' },
    { pattern: /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/, message: '姓名应为二到十个汉字', trigger: 'blur' },
  ],
  number: [
    {
      required: true,
      message: '请输入你的学号',
      trigger: 'blur',
    },
    {
      pattern: /^[1-9]\d{9}$/,
      message: '请输入正确的学号',
      trigger: 'blur'
    }
  ],
  institute: [
    {
      required: true,
      pattern: /^([\u4e00-\u9fa5]{2,15})$/,
      message: '请输入你的学院',
      trigger: 'blur'
    }
  ],
  major: [
    {
      required: true,
      pattern: /^([\u4e00-\u9fa5]{2,15})$/,
      message: '请输入你的专业',
      trigger: 'blur'
    }
  ],
  group: [
    {
      required: true,
      message: '请选择你报名的方向',
    }
  ],
  phone: [
    {
      required: true,
      message: '请输入你的电话号码',
      trigger: 'blur'
    },
    {
      pattern: /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/,
      message: '请输入正确的电话号码',
      trigger: 'blur'
    }
  ],
  sex: {
    required: true,
    trigger: 'change',
    message: '性别是必填项'
  },
  introduction: [{
    required: true,
    message: '请进行自我介绍',
    trigger: 'blur'
  },
  {
    min: 50,
    message: '自我介绍字数应不少于50字',
    trigger: 'blur',
  }, {
    max: 1000,
    message: '自我介绍字数不超过1000字',
    trigger: 'blur',
  }]
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const formCheck = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return
  }
  formEl.validate()
}

</script>



<style scoped>
.table {
  padding: 50px;
  padding-bottom: 80px;
  border-radius: 15px;
  box-shadow: 33px;
  background-color: white;
}

el-input {
  width: 120px;
}

el-form-item {
  width: 120px;
}

.application {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* 移动元素本身50% */
}
</style>