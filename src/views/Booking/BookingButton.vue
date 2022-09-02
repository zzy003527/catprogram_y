<template>
    <el-button ref="btn" size="small" :type="btnType" id="0" @click="bookSubmit">{{ props.scope.row.tag }}
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

//按钮样式
const btnType = ref('primary')
const typeFull = () => {
    btnType.value = 'info'
}
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
        console.log(params);
        
        timeSubmit(params).then(res => {
            console.log(res);
            
            if (res.resultStatus !== '200') {
                ElMessageBox.alert(res.resultIns, '提示', {
                    // if you want to disable its autofocus
                    // autofocus: false,
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
                btnType.value = 'danger'
                props.scope.row.tag = '取消预约'
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
            btnType.value = 'primary'
            props.scope.row.tag = '预约'
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
.el-button:focus {
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
}
</style>
