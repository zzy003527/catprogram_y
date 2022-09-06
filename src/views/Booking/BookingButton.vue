<template>
    <el-button ref="btn" size="small" :type="btnType" id="0" @click="bookSubmit" :disabled='disabled'>{{
    props.scope.row.tag }}
    </el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { handleError, timeSubmit, bookCancel } from '../../request/requestApi'
// import { toRaw } from '@vue/reactivity';
import { ElMessageBox } from 'element-plus'

let props = defineProps({
    // 接受按钮所在行的数据
    scope: {
        type: Object,
        default: {}
    },
    refresh: {
        type: Function,
        default: function () { }
    }
})
let emits=defineEmits(
    ['refresh']
)
//按钮基础样式
let disabled=ref()
const btnType = ref('primary')
const typeFull = () => {
    btnType.value = 'info'
}
// 根据按钮的状态对样式进行检查
let checkType=()=>{
    if (props.scope.row.tag == '预约') {
        btnType.value = 'primary' 
        disabled.value=false
    }
    else if (props.scope.row.tag == '已满'||'已过') disabled.value=true
    else if(props.scope.row.tag == '已满'||window.localStorage.getItem('booked')=='true')disabled.value=true
    if (props.scope.row.tag == '取消预约') {btnType.value = 'danger',disabled.value=false}
}
checkType()
// 上传函数
let last = 0
const bookSubmit = () => {
    // 节流
    let now = new Date().getTime()
    if (now - last < 200) {
        return 0
    }
    // 判断当前状态
    if (props.scope.row.tag == '预约') {
        // 封装使用
        let params = {
            time: props.scope.row.timeQuantum
        }
        timeSubmit(params).then(res => {
            console.log(res);
            if (res.resultStatus !== '200') {
                ElMessageBox.alert(res.resultIns, '提示', {
                    confirmButtonText: 'OK',
                    callback: () => {
                        console.log(res);
                    },
                })
                return 0
            } else {
                ElMessageBox.alert('预约成功', '提示', {
                    confirmButtonText: 'OK',
                })
                window.localStorage.setItem('booked','true')
                // 刷新预约人数
                emits('refresh')
                // 刷新按钮样式
                setTimeout(() => {
                btnType.value = 'danger'
                props.scope.row.tag = '取消预约'
                checkType()
                }, 100);
            }
        }).catch(handleError)
    }
    if (props.scope.row.tag == '取消预约') {
        bookCancel({ time: props.scope.row.timeQuantum }).then(res => {
            if (res.resultStatus == 404) {
                ElMessageBox.alert(res.resultIns, '提示', {
                    confirmButtonText: 'OK',
                })
                return 0
            }
            if (res.resultStatus != 200) {
                ElMessageBox.alert('取消失败', '提示', {
                    confirmButtonText: 'OK',
                })
                return 0
            }
            ElMessageBox.alert('取消成功', '提示', {
                confirmButtonText: 'OK',
            })
            // 刷新预约人数
            window.localStorage.removeItem('booked')
            emits('refresh')
            setTimeout(() => {
                btnType.value = 'primary'
            props.scope.row.tag = '预约'
            checkType()

            }, 100);


            // 刷新按钮样式
        }).catch(handleError)
    }
    last = new Date().getTime()
}

const btn = ref<any>(null)

defineExpose({
    bookSubmit,
    typeFull
})
</script>

<style scoped>
</style>
