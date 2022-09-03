<template>
    <div h="auto" w="auto" m="20" class="table" :style="{
        boxShadow: `var(${getCssVarName('light')})`
    }">
        <el-table ref="tableRef" row-key="date" :data="toRaw(tableData)" size="large">
            <el-table-column prop="date" label="日期" width="180" column-key="date" :filters="
                // [ { text: '2016-05-01', value: '2016-05-01' }]
                filteArray
            " :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="time" label="时间" width="200" />
            <el-table-column prop="availableNumber" label="可预约" width="330" style="text-align: center;" />
            <el-table-column prop="tag" label="预约" width="100" :filters="[
                { text: '可预约', value: '预约' },
                { text: '已预约', value: '取消预约' },
            ]" :filter-method="filterTag" filter-placement="bottom-end">
                <template #default="scope">
                    <!-- <el-tag :type="scope.row.tag === 'true' ? '' : 'success'" disable-transitions>{{ scope.row.tag }}
                </el-tag> -->
                    <booking-button :scope="scope" />
                </template>
            </el-table-column>
        </el-table>
        <!-- <el-button @click="resetDateFilter" style="float:left ;margin-top: 10px;;">清除筛选</el-button> -->
    </div>


</template>

<script lang="ts" setup>
import { ElTable } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import { toRaw } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { handleError, BookData, userProgress } from '/@/request/requestApi';
import BookingButton from './BookingButton.vue'
import store from "../../store/index"

// 样式
const getCssVarName = (type: string) => {
    return `--el-box-shadow${type ? '-' : ''}${type}`
}
// 失败弹窗
const failLogin = (msg: string) => {
    ElMessage.error(`${msg}`)
}

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
// interface Data {
//     obj: Array<object>
//     resultIns: string
//     resultStatus: string
// }
//筛选函数
const filterTag = (value: string, row: User) => {
    return row.tag === value
}
//请求代码
//获取用户面试阶段
// let version
// // let btnType = ref('')
// userProgress().then(res => {
//     version = res.obj.testStatus
// }).catch(handleError)
// 输入表格数据格式
let tableData = ref([] as User[])
let filteArray = ref([] as Array<object>)
// 已预约时间段
let bookedTime: string
// 获取预约数据
function Book() {
    BookData({
        version: store.state.nowTest
    }).then(res => {
        if (res.resultStatus !== '200') {
            failLogin(res.resultIns)
        } else {
            let dataArray: Array<User> = []
            let data = res.obj
            // let data = datause.obj
            // 填充表格
            filteArray.value = []
            let filteArrayData: Array<string> = []
            for (let i in data) {
                // 表格数据
                let obj = data[i].timetable
                if (obj.availableNumber > 0) obj.tag = '预约'
                else if (obj.availableNumber == 0) {
                    obj.tag = '已满'
                }
                if (bookedTime == data[i].timetable.timeQuantum) obj.tag = '取消预约'
                obj.date = data[i].timetable.timeQuantum.split(' ')[0].substring(0, 11)
                obj.time = data[i].timetable.timeQuantum.split(' ')[1].substring(0, 5) + '-' + data[i].timetable.timeQuantum.split(' ')[2].substring(0, 5)
                dataArray.push(data[i].timetable)
                // 筛选数据
                let filterObj = { text: '', value: '' }
                filterObj.text = obj.date
                filterObj.value = obj.date
                //判断该时间是否已存在于筛选数组
                if (!filteArrayData.includes(obj.date)) {
                    filteArray.value.push(filterObj)
                    filteArrayData.push(obj.date)
                }
            }
            tableData.value = dataArray
        }
    }).catch(handleError)
}

onMounted(() => {
    // 获取用户当前面试阶段
    userProgress().then(res => {
        store.commit("confignowTest", res.obj.testStatus)
        bookedTime = res.obj.time
        // 获取预约数据
        Book()
    }).catch(handleError)
})
//备用：一键解除筛选功能
// const tableRef = ref<InstanceType<typeof ElTable>>()
// const resetDateFilter = () => {
//     tableRef.value!.clearFilter(['date'])
// }
// TODO: improvement typing when refactor table
//筛选函数
const filterHandler = (
    value: string,
    row: User,
    column: TableColumnCtx<User>
) => {
    const property = column['property']
    return row[property] === value
}
</script>

<style scoped>
.table {
    padding: 50px;
    border-radius: 15px;
    box-shadow: 33px;
    background-color: white;
}
</style>