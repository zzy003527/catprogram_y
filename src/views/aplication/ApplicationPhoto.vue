<template>
    <!-- <el-form-item label="照片" prop="photo">
        <el-upload ref="upload" class="upload-demo" :action='httpUrl.photoUpload' :limit="1" :on-exceed="handleExceed"
            :auto-upload="false" :headers="headers" accept="image" :on-success="handleSuccess"
            :before-upload="beforeAvatarUpload">
            <template #trigger>
                <el-button type="primary">选择照片</el-button>
            </template>
            <el-button class="ml-3" type="success" @click="submitUpload" style="margin-left:20px;">
                上传照片
            </el-button> -->
    <!-- 上传提示部分，备用 -->
    <!-- <template #tip>
          <div class="el-upload__tip text-red">
            仅需上传一张照片，新上传的照片会覆盖之前的
          </div>
        </template> -->
    <!-- </el-upload>
    </el-form-item> -->
    <el-form-item label="照片" prop="photo">
        <el-upload class="avatar-uploader" :action='httpUrl.photoUpload' :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :headers="headers">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
                <Plus />
            </el-icon>
        </el-upload>
    </el-form-item>
</template>

<script lang="ts" setup>
// import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
// import { ref } from 'vue'
// import { genFileId } from 'element-plus'
// import { ElMessageBox,ElMessage } from 'element-plus'
import httpUrl from '../../request/httpUrl'
// import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
// import { ref } from 'vue'
// import { genFileId } from 'element-plus'
// import { ElMessageBox,ElMessage } from 'element-plus'
// import httpUrl from '../../request/httpUrl'
// // 照片上传部分
// // 获取token
// let token = localStorage.getItem("token")
// if (!token) {
//     token = sessionStorage.getItem("token")
// }
// let headers = { token: token }
// const upload = ref<UploadInstance>()
//     const handleSuccess=(Response)=>{
//     console.log(Response);
//     if(Response.resultStatus!='200'){
//         ElMessageBox.alert(`图片上传失败，${Response.resultIns}`, '提示', {
//             confirmButtonText: 'OK'
//         })
//     }
// }
// // 照片上传部分

// const upload = ref<UploadInstance>()
//     const handleSuccess=(Response)=>{
//     console.log(Response);
//     if(Response.resultStatus!='200'){
//         ElMessageBox.alert(`图片上传失败，${Response.resultIns}`, '提示', {
//             confirmButtonText: 'OK'
//         })
//     }
// }
// const handleExceed: UploadProps['onExceed'] = (response,files) => {
//     console.log(response);
//     upload.value!.clearFiles()
//     const file = files[0] as UploadRawFile
//     file.uid = genFileId()
//     upload.value!.handleStart(file)
// }

// const submitUpload = () => {
//     upload.value!.submit()
// }

// const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
//   if (rawFile.type !== 'image/jpeg'&&rawFile.type!='image/png'&&rawFile.type!='image/jpeg'&&rawFile.type!='image/gif') 
//   {
//     ElMessage.error('图片必须为jpg,jpeg或png格式')
//     return false
//   } else if (rawFile.size / 1024 / 1024 > 2) {
//     ElMessage.error('图片大小不能超过2MB')
//     return false
//   }
//   return true
// }

import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
    response
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
// 获取token
let token = localStorage.getItem("token")
if (!token) {
    token = sessionStorage.getItem("token")
}
let headers = { token: token }
//请求前函数
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg'&&rawFile.type!='image/png'&&rawFile.type!='image/jpeg'&&rawFile.type!='image/gif')  {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}



</script>
<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
    
    <style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
