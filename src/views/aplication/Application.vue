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
              <el-radio :label="true" style="width:68px">男</el-radio>
              <el-radio :label="false" style="width:68px">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- <el-form-item label="学号" prop="number">
            <el-input v-model="ruleForm.number" type="text" autocomplete="off" />
          </el-form-item> -->
          <el-form-item label="学院" prop="institute">
            <!-- <el-input v-model="ruleForm.institute" type="text" autocomplete="off" /> -->
            <el-select v-model="ruleForm.institute" class="m-2" placeholder=" " style="width:100% ;">
              <el-option v-for="item in InstituteOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="ruleForm.major" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="手机" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber" type="text" autocomplete="off" />
          </el-form-item>
          <!-- 选择报名方向 -->
          <el-form-item label="方向" prop="group">
            <el-radio-group v-model="ruleForm.group">x
              <el-radio :label="false" border style="width:101px">前端</el-radio>
              <el-radio :label="true" border style="width:101px">后端</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="11" style="margin-left:10px ;">
          <!-- 自我介绍 -->
          <el-form-item label="自我介绍" prop="introduction" label-position="top">
            <el-input v-model="ruleForm.introduction" :rows="5" type="textarea" show-word-limit:true />
          </el-form-item>
          <!-- 上传照片 -->
          <ApplicationPhoto :image='imageUrl' />
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
import { userProgress } from '../../request/requestApi';
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
// import { ElMessageBox } from 'element-plus';
// import { useRouter } from 'vue-router'
// const router = useRouter()

//查看是否报名
// 样式
const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
// 学院及专业可选框填充部分
const InstituteOptions = [
  {
    value: '机电工程学院',
    label: '机电工程学院',
  },
  {
    value: '自动化学院',
    label: '自动化学院',
  },
  {
    value: '计算机学院',
    label: '计算机学院',
  },
  {
    value: '信息工程学院',
    label: '信息工程学院',
  },
  {
    value: '轻工化工学院',
    label: '轻工化工学院',
  },
  {
    value: '土木与交通工程学院',
    label: '土木与交通工程学院',
  },
  {
    value: '材料与能源学院',
    label: '材料与能源学院',
  },
  {
    value: '环境科学与工程学院',
    label: '环境科学与工程学院',
  },
  {
    value: '外国语学院',
    label: '外国语学院',
  },
  {
    value: '物理与光电工程学院',
    label: '物理与光电工程学院',
  },
  {
    value: '生物医药学院',
    label: '生物医药学院',
  },
  {
    value: '生态环境与资源学院',
    label: '生态环境与资源学院',
  },
  {
    value: '集成电路学院',
    label: '集成电路学院',
  }
]
// 输入内容
const ruleForm = reactive({
  name: '',
  // number: '',
  institute: '',
  major: '',
  group: '',
  phoneNumber: '',
  sex: '',
  introduction: ''
})
//若已报名，内容填充
const imageUrl=ref('')
userProgress().then(res=>{
  if (res.resultStatus=='200'){
    let userData=res.obj
    ruleForm.name=userData.username
    ruleForm.institute=userData.institute
    ruleForm.major=userData.major
    ruleForm.group=userData.group
    ruleForm.phoneNumber=userData.phoneNumber
    ruleForm.sex=userData.sex
    ruleForm.introduction=userData.introduction
    imageUrl.value= userData.imageSite
  }
  // 如果获取失败
  // if(res.resultStatus=='404'){
  //   ElMessageBox.alert(`${res.resultIns}，点击跳转到主界面`, '提示', 
  //   {
  //     confirmButtonText: 'OK',
  //     callback: () => {
  //       router.push('/')
  //     }
  //   })
  // }
})
// 输入内容及规则部分
const ruleFormRef = ref<FormInstance>()



const rules = reactive({
  name: [
    { required: true, message: '请输入你的名字', trigger: 'blur' },
    { pattern:  /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/, message: '姓名应为二到十个汉字', trigger: 'blur' },
  ],
  // number: [
  //   {
  //     required: true,
  //     message: '请输入你的学号',
  //     trigger: 'blur',
  //   },
  //   {
  //     pattern: /^[1-9]\d{9}$/,
  //     message: '请输入正确的学号',
  //     trigger: 'blur'
  //   }
  // ],
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
  phoneNumber: [
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
  },{
    max: 1000,
    message: '自我介绍字数不超过1000字',
    trigger: 'change',
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
  background-color: #ffffff;
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