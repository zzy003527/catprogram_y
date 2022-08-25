<script setup lang="ts">
// 引入所需组件
import introducebutton from './introducebutton.vue'

// 引入所需方法
import { Router, useRouter } from 'vue-router' 





// 声明router，用于编程式导航，相当于之前学的this.$router
const router: Router = useRouter()

// 返回时路由跳回introduce
const BackIntroduce = (): void => {
  router.push('/introduce')
}


</script>



<template>
<introducebutton></introducebutton>
   <!-- partial:index.partial.html -->
<div id='wrap'>
  <h1 data-splitting='words'>C.A.T Studio</h1>
  <p class='subhead'></p>
  <div class='panel'>
    <h2 class='dark' data-splitting='words'>了 解 我 们</h2>
    <div class='thumb'>
      <div class='inner'>
        <router-link to="/introduce/introduceone" class="routerlink"></router-link>
        <img class='invert' loading='lazy' src='/cat.jpg'>
      </div>
    </div>
  </div>
  <div class='panel'>
    <h2 data-splitting='words'>招 新 方 向</h2>
    <div class='thumb'>
      <div class='inner'>
        <router-link to="/introduce/introducetwo" class="routerlink"></router-link>
        <img class='light' loading='lazy' src='/cat.jpg'>
      </div>
    </div>
  </div>
  <div class='panel'>
    <h2 data-splitting='words'>Question & answer</h2>
    <div class='thumb'>
      <div class='inner'>
        <router-link to="/introduce/introducethree" class="routerlink"></router-link>
        <img loading='lazy' src='/cat.jpg'>
      </div>
    </div>
  </div>
  <div class='panel'>
    <h2 data-splitting='words'>工 作 室 日 常</h2>
    <div class='thumb'>
      <div class='inner'>
        <router-link to="/introduce/introducefour" class="routerlink" ></router-link>
        <img loading='lazy' src='/cat.jpg'>
      </div>
    </div>
  </div>
  <p class='subhead final'>Fin</p>
</div>


<div id='frame'>
  <div id='close' @click="BackIntroduce">
    <div></div>
    <strong class='circle' data-splitting='chars'>GO•BACK•</strong>
  </div>
  <div class='frame-wrap'>
    <div class='frame-container' id="frame-container">
        <!-- 子级路由占位符 -->
          <router-view></router-view>
    </div>
  </div>
</div>




<div id='cursor'>
  <strong class='circle' data-splitting='chars'>SEE•MORE•</strong>
</div>
<div id='loader'>
  <div class='wrap'>
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
    <span>•</span>
    <span>•</span>
    <span>•</span>
  </div>
</div>
<div id='social'>
</div>
<!-- partial -->
 
</template>





<style scoped>

</style>
