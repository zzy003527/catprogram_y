<script setup lang="ts">


</script>


<template>
  <div id="introducebutton">
    <button id="introducebuttonone">登录</button>
    <button id="introducebuttontwo">注册</button>
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
      button {
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

      button:hover {
        color: #fe4e01;
        border: 3px solid #fe4e01;
      }
      span {
        transition: all 0.7s;
        z-index: -1;
      }


</style>
