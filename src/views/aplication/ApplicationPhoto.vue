<template>
    <el-form-item label="照片" prop="photo">
        <el-upload ref="upload" class="upload-demo" :action='request.photoUpload' :limit="1" :on-exceed="handleExceed"
            :auto-upload="false">
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
import request from '../../request/httpUrl'
// 照片上传部分
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



</script>