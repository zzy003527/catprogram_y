<template>
    <el-form-item style="margin-top: 20px">
        <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>

    </el-form-item>
</template>

<script setup lang="ts">
import { toRaw } from 'vue'
import type { FormInstance } from 'element-plus'
import type { PropType } from 'vue'
import { apply } from '../../request/requestApi';
// import { emit } from 'process';
// const axios = require('axios').default;

const props = defineProps({
    ruleForm: Object,
    //解决了类型被当作值的问题
    ruleFormRef: {} as PropType<FormInstance> | Object
})
const { ruleForm, ruleFormRef } = { ...props }

console.log(ruleForm);

// 表单上传部分
const submitForm = (formEl: FormInstance | undefined) => {

    if (!formEl) {
        emit("formCheck")
        return
    }
    formEl.validate((valid) => {
        // 上传成功
        if (valid) {
            console.log('submit!', toRaw(ruleForm))
            let upload = apply(
                toRaw(ruleForm)
            ).then((res) => {
                open(true)
                return res
            }).catch(err => {
                open(false)
                return err
            })
            console.log(upload);


        }
        // 上传失败
        else {
            console.log(valid);
            console.log('error submit!', ruleForm)
            open(false)
            return false
        }
    })
}
// 表单重置
const emit = defineEmits(["resert", "formCheck"])

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    emit("resert")
    // formEl.resetFields()
}

// 弹出窗口提示
// import { ElMessageBox } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
const open = (state: Boolean) => {
    if (state) ElMessageBox.alert('提交成功', '提示', {
        confirmButtonText: 'OK',
        callback: (action: Action) => {
            ElMessage({
                type: 'info',
                message: `action: ${action}`,
            })
        }
    })
    else ElMessageBox.alert('提交失败', '提示', {
        confirmButtonText: 'OK',
        callback: (action: Action) => {
            ElMessage({
                type: 'info',
                // message: `action: ${action}`,
                message: `action: ${action}`,
            })
        },
    })
}
</script>

<style scoped>
</style>
