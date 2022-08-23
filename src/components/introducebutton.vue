<script setup lang="ts">


</script>


<template>
  <div id="introducebutton">
    <router-link id="introducebuttonone" class="buttonrouter" to="/login">登录</router-link>
    <!-- <button id="introducebuttonone">登录</button> -->
    <router-link id="introducebuttontwo" class="buttonrouter" to="/register">注册</router-link>
    <!-- <button id="introducebuttontwo">注册</button> -->
  </div>
</template>

<style scoped>
      @import url(https://fonts.googleapis.com/css?family=Indie+Flower);
      #introducebuttonone {
        position: fixed;
        top: 15px;
        right: 125px;
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


</style>
