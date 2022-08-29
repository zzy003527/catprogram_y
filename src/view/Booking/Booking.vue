<template>
    <el-table ref="tableRef" row-key="date" :data="toRaw(tableData)" style="width: 100%;" @cell-click="btnClick">
        <el-table-column prop="date" label="日期" sortable width="180" column-key="date" :filters="
            // [ { text: '2016-05-01', value: '2016-05-01' }]
            filteArray
        " :filter-method="filterHandler">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="150" />
        <el-table-column prop="availableNumber" label="可预约" width="150" style="text-align: center;" />
        <booking-button ref="sunBtn" />
    </el-table>
    <!-- <el-button @click="resetDateFilter" style="float:left ;margin-top: 10px;;">清除筛选</el-button> -->
</template>

<script lang="ts" setup>
import { ElTable } from 'element-plus'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
// import { BookData } from '../../request/requestApi';
import axios from 'axios'
import { toRaw } from '@vue/reactivity';
import { ref } from 'vue';
import BookingButton from './BookingButton.vue'
//表格点击事件
const sunBtn = ref<any>(null)
const btnClick = (row, column, event, cell) => {
    if (column.label == '预约') {
        //调用button的函数，传递该行的时间字符串为参数

        sunBtn.value.bookSubmit(row.timeQuantum);
        console.log(toRaw(event.querySelector("el-button")))
    }
    console.log(toRaw(row.timeQuantum))
    console.log(toRaw(row))
    console.log(toRaw(column))
    console.log(toRaw(event))
    console.log(toRaw(cell))
}
// 使用封装的axios
// let BookedData = BookData({ 'version': '0' }).then((res) => {
//     console.log(res)
//     return res
// }, err => console.log('err', err)
// )

// element内置代码
interface User {
    id: number
    number: number
    date: string
    time: string
    version: number
    availableNumber: number
    tag: string
}

//请求代码
// 输入表格数据格式
let tableData = ref([] as User[])
let filteArray = ref([] as Array<object>)
axios({
    url: 'http://127.0.0.1:4523/m1/1473415-0-default/cat/reservation/number',
    method: 'post',
    params: {
        version: '0'
    }
}).then(res => {
    let dataArray: Array<User> = []
    let data = res.data.obj
    // 填充表格
    for (let i: number in data) {
        // 表格数据
        let obj = data[i].timetable
        obj.tag = '预约'
        obj.date = data[i].timetable.timeQuantum.split(' ')[0]
        obj.time = data[i].timetable.timeQuantum.split(' ')[1].substring(0, 5)
        dataArray.push(data[i].timetable)
        // 筛选数据
        let filterObj = { text: '', value: '' }
        filterObj.text = obj.date
        filterObj.value = obj.date
        filteArray.value.push(filterObj)
    }
    tableData.value = dataArray
})

//备用：一键解除筛选功能
// const tableRef = ref<InstanceType<typeof ElTable>>()
// const resetDateFilter = () => {
//     tableRef.value!.clearFilter(['date'])
// }
// TODO: improvement typing when refactor table

const filterHandler = (
    value: string,
    row: User,
    column: TableColumnCtx<User>
) => {
    const property = column['property']
    return row[property] === value
}




</script>
