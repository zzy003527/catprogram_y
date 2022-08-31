<script setup lang="ts">
// 引入所需方法
// import { Router, useRouter } from 'vue-router' 
import { useStore } from 'vuex'

// 用useStore方法获取到vuex的store对象
let store = useStore()
store.state.dialogTableVisible = false



</script>


<template>
  <div id="introducebutton">
    <router-link class="list-group-item buttonrouter" id="introducebuttonone" @click="store.state.dialogTableVisible = true" active-class="active" to="/introduce/login">
    登录
  </router-link>
  <el-dialog custom-class="loginWindow" v-model="store.state.dialogTableVisible" draggable>
    <template #header="{}" custom-class="loginHeader">
      <div class="my-header loginHeader">
        <h5 class="loginHeaderTitle">cat</h5>
        <h6 class="loginHeaderTitle" id="sighinword">sigh in</h6>
      </div>
    </template>
          <router-view></router-view>
  </el-dialog>
  </div>
</template>

<style scoped>
      @import url(https://fonts.googleapis.com/css?family=Indie+Flower);
      #introducebuttonone {
        position: absolute;
        top: 15px;
        right: 35px;
        z-index: 100;
      }
      #introducebuttontwo {
        position: fixed;
        top: 15px;
        right: 40px;
        z-index: 100;
      }
      /* #loginrouter,
      #registerrouter {
        height: 40px;
        width: 76px;
      } */

 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        /* background: #000; */
      }
      .buttonrouter {
        border: none;
        outline: none;
        padding: 5px 15px;
        font-size: 20px;
        font-weight: 700;
        position: relative;
        background: transparent;
        color: #ffa500;
        text-transform: uppercase;
        border: 3px solid #ffa500;
        cursor: pointer;
        transition: all 0.7s;
        overflow: hidden;
        border-radius: 100px;
      }

      .buttonrouter:hover {
        color: #fe4e01;
        border: 3px solid #fe4e01;
      }
      span {
        transition: all 0.7s;
        z-index: -1;
      }

/* --------------------------------------------------------- */
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
#sighinword {
  margin-top: 181px;
}

.forgetPassword {
  position: absolute;
  bottom: 187px;
  right: 104px;
  font-size: 12px;
}


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
  background-image: url(/login.jpg);
  border-radius: 10px 10px 0 0;
  background: right top no-repeat url(/login.jpg);
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
