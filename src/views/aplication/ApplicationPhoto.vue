<template>
    <el-form-item label="照片" prop="photo">
        <el-upload ref="upload" class="upload-demo" :action='httpUrl.photoUpload' :limit="1" :on-exceed="handleExceed"
            :auto-upload="false" :headers="headers" accept="image" :before-upload="beforeAvatarUpload">
            <template #trigger>
                <el-button type="primary">选择照片</el-button>
            </template>
            <el-button class="ml-3" type="success" @click="submitUpload" style="margin-left:20px;">
                上传照片
            </el-button>
            <!-- 上传提示部分，备用 -->
            <!-- <template #tip>
          <div class="el-upload__tip text-red">
            仅需上传一张照片，新上传的照片会覆盖之前的
          </div>
        </template> -->
        </el-upload>
    </el-form-item>
</template>

<script lang="ts" setup>
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { ref } from 'vue'
import { genFileId } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import httpUrl from '../../request/httpUrl'
// 照片上传部分
// 获取token
let token = localStorage.getItem("token")
if (!token) {
    token = sessionStorage.getItem("token")
}
let headers = { token: token }
const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
    upload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    upload.value!.handleStart(file)
}

const submitUpload = () => {
    upload.value!.submit()
}

let beforeAvatarUpload = (File) => {
    const isJPG = File.type === 'image/jpeg' || 'image/png'
    const isLt2M = File.size / 1024 / 1024 < 2

    if (!isJPG) {
        ElMessageBox.alert('上传头像图片只能是 JPG 格式!', '提示', {
            confirmButtonText: 'OK'
        })
    }
    if (!isLt2M) {
        ElMessageBox.alert('上传头像图片大小不能超过 2MB!', '提示', {
            confirmButtonText: 'OK'
        })
    }
    return isJPG && isLt2M
}





</script>