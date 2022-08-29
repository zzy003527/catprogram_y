<template>
    <el-table-column prop="tag" label="预约" width="100" :filters="[
        { text: '可预约', value: '预约' },
    ]" :filter-method="filterTag" filter-placement="bottom-end" @cell-click="bookSubmit">
        <template #default="scope">
            <!-- <el-tag :type="scope.row.tag === 'true' ? '' : 'success'" disable-transitions>{{ scope.row.tag }}
                </el-tag> -->
            <el-button ref="btn" size="small" type="primary" id="0" @btnclick="bookSubmit">{{ scope.row.tag }}
            </el-button>
        </template>
    </el-table-column>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { timeSubmit, handleError } from '../../request/requestApi'
// import { toRaw } from '@vue/reactivity';

interface User {
    id: number
    number: number
    date: string
    time: string
    version: number
    availableNumber: number
    tag: string
}
//筛选函数
const filterTag = (value: string, row: User) => {
    return row.tag === value
}

//按钮样式
// const buttonType = ref('primary')

// 上传函数
const bookSubmit = (time, btn) => {
    console.log(time);
    console.log(btn);
    timeSubmit({ time: time }).then(res => {
        console.log(res);
    }).catch(handleError)
}

const btn = ref<any>(null)

defineExpose({
    bookSubmit,
    btn
})
</script>

<style scoped>
</style>
