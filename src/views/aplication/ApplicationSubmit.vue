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
import { ElMessageBox } from 'element-plus'
// import { emit } from 'process';
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
    ruleForm: Object,
    //解决了类型被当作值的问题
    ruleFormRef: {} as PropType<FormInstance> | Object
})

// 表单上传部分
const submitForm = (formEl: FormInstance | undefined) => {
    // 判断校验是否通过
    if(formEl) {
    }
    if (!formEl) {
        //触发表单校验提示
        emit("formCheck")
        return
    }

    let form

    formEl.validate((valid) => {
        if (valid) {
            // 上传成功
            if (props.ruleForm) {
                // 由于前面接受的参数过多，删除一些不需要的
                form = toRaw(props.ruleForm)
                delete form.number
                delete form.name
                delete form.phone
            }
            apply(       
                form
            ).then((res) => {
                if (res.resultStatus == 200)
                    ElMessageBox.alert('提交成功', '提示', {
                        confirmButtonText: 'OK',
                        callback: () => {
                            router.push('/backPage/booking')
                            emit("resert")
                        }
                    })
                else {
                    ElMessageBox.alert(res.obj, '提示', {
                        confirmButtonText: 'OK'
                    })
                }
                return res
            }).catch(err => {
                open(false)
                return err
            })
        }
        // 上传失败
        else {
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
const open = (state: Boolean) => {
    if (state) ElMessageBox.alert('提交成功', '提示', {
        confirmButtonText: 'OK'
    })
    else ElMessageBox.alert('提交失败', '提示', {
        confirmButtonText: 'OK'
    })
}
</script>

<style scoped>
/* .el-button:focus {
    color: #ffffff;
    background-color: #409eff;
    outline: 0;
}

.el-button:hover {
    color: #ffffff;
    background-color: #79bbff;
}

.el-button:active {
    color: #ffffff;
    border-color: #409eff;
    outline: 0;
} */
</style>
