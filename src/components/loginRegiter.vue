<template>
  <el-button text @click="dialogTableVisible = true">open a Table nested Dialog</el-button>
  <router-link class="list-group-item" @click="store.state.dialogTableVisible = true" active-class="active" to="/login">
    login
  </router-link>
  <el-dialog custom-class="loginWindow" v-model="store.state.dialogTableVisible" draggable>
    <template #header="{}" custom-class="loginHeader">
      <div class="my-header loginHeader">
        <h5 class="loginHeaderTitle">cat</h5>
        <h6 class="loginHeaderTitle">sigh in</h6>
      </div>
    </template>
    <router-view></router-view>
  </el-dialog>


  <button>anniu</button>

</template>

<script lang='ts' setup>
import { ref } from 'vue'
import store from '../store';

const dialogTableVisible = ref(false)
console.log(store.state.dialogTableVisible);
store.state.dialogTableVisible = false
console.log(store.state.dialogTableVisible);
</script>
<style scoped>
.loginNumber {
  display: flex;
  justify-content: center;
}

.loginHeaderTitle {
  font-size: 50px;
  color: #aa87c58f;
  margin-left: 0;
  padding: 0;
  text-align: left;
  font-family: fantasy;
}

.forgetPassword {
  position: absolute;
  bottom: 187px;
  right: 104px;
  font-size: 12px;
}
</style>
<style>
.loginWindow {
  width: 480px !important;
  border-radius: 10px !important;
}

.NumberInput {
  width: 230px !important;
}

.el-dialog__header {
  padding-bottom: 0;
  width: 440px;
  height: 251px;
  background-image: url(/public/login.jpg);
  border-radius: 10px 10px 0 0;
  background: right top no-repeat url(/public/login.jpg);
  background-size: 484px 296px;
}

.loginSubmit {
  width: 266px;
  margin-top: 34px;
  border-radius: 149px !important;

}

.loginFooter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>