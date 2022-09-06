<template>
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
import httpUrl from '../../request/httpUrl'
import { ref,toRef,Ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

const props=defineProps({
    image:{
        type:String
    }
})
let imageUrl:Ref<string|undefined> = ref('')
imageUrl=toRef(props,'image')
    const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  if(response.resultStatus!='200'){
    ElMessage.error(response.resultIns)
  }
}
// 获取token
let token = localStorage.getItem("token")
if (!token) {
    token = sessionStorage.getItem("token")
}
let headers = { token: token }
//请求前函数
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type!='image/png'&&rawFile.type!='image/jpeg'&&rawFile.type!='image/gif')  {
    ElMessage.error('只允许上传图片')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不能超过2MB')
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
