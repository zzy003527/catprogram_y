<template>
    <el-button ref="btn" size="small" :type="btnType" id="0" @click="bookSubmit">{{ props.scope.row.tag }}
    </el-button>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { handleError } from '../../request/requestApi'
// import { toRaw } from '@vue/reactivity';
import axios from 'axios'

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

//按钮样式
const btnType = ref('primary')

// 上传函数
let last = 0
const bookSubmit = () => {
    // 节流
    let now = new Date().getTime()
    if (now - last < 2000) {
        return
    }
    // 判断当前状态
    if (props.scope.row.tag == '预约') {
        btnType.value = 'info'
        props.scope.row.tag = '预约中'
        axios({
            url: 'http://127.0.0.1:4523/m1/1473415-0-default/cat/reservation/reservation/add',
            method: 'post',
            params: {
                time: props.scope.row.timeQuantum
            }
        }).then(res => {
            res
            btnType.value = 'success'
            props.scope.row.tag = '预约成功'
            setTimeout(() => {
                btnType.value = 'danger'
                props.scope.row.tag = '取消预约'
            }, 1500);
            // 更新表格
            props.refresh
        }).catch(handleError)
    }
    if (props.scope.row.tag == '取消预约') {
        btnType.value = 'info'
        props.scope.row.tag = '取消ing'
        axios({
            url: 'http://127.0.0.1:4523/m1/1473415-0-default/cat/reservation/reservation/del',
            method: 'post',
            params: {
                time: props.scope.row.timeQuantum
            }
        }).then(res => {
            console.log(res);
            btnType.value = 'warning'
            props.scope.row.tag = '取消成功'
            setTimeout(() => {
                btnType.value = 'primary'
                props.scope.row.tag = '预约'
            }, 1500);
            // 更新表格
            props.refresh()
        }).catch(handleError)
    }
    //封装使用
    // timeSubmit({ time: props.scope.row.timeQuantum }).then(res => {
    //     console.log(res);
    // }).catch(handleError)
    last = new Date().getTime()
}

const btn = ref<any>(null)

defineExpose({
    bookSubmit,
    btn
})
</script>

<style scoped>
</style>
