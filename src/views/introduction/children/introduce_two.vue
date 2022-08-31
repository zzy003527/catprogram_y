<script setup lang="ts">
</script>


<template>
  <div id="introducetwo">
    <!-- partial:index.partial.html -->
    <ul class="tabs" role="tablist">
    <li>
        <input type="radio" name="tabs" id="tab1" checked />
        <label for="tab1" 
               role="tab" 
               aria-selected="true" 
               aria-controls="panel1" 
               tabindex="0">前端</label>
        <div id="tab-content1" 
             class="tab-content" 
             role="tabpanel" 
             aria-labelledby="description" 
             aria-hidden="false">
          <p>● 前端即网站前台部分，负责页面设计开发以及业务逻辑的实现，我们平时在浏览器中看到各式各样的页面基本都是出自前端之手，随着大前端的到来，前端现在不仅能开发网页，通过node.js还能完成后台开发。</p>
          <hr>
          <p>● C.A.T工作室前端组主要基于HTML、CSS、JavaScript等基础前端编程语言进行开发，同时引入处于前沿的前端技术（框架、工具库等）对项目进行进一步的构建、优化。我们致力于打造页面视觉效果更优、用户体验更佳、功能更强大的网站、App、小程序等产品。我们不局限于页面展示,同时也聚焦业务逻辑，做我们“想做、会做、能做”的事。目前已有师兄入职腾讯等一线互联网公司。如果你对前端有足够的热爱，对技术有足够的热情，那就请你加入我们吧！</p>
        </div>
    </li>
  
    <li>
        <input type="radio" name="tabs" id="tab2" />
        <label for="tab2"
               role="tab" 
               aria-selected="false" 
               aria-controls="panel2" 
               tabindex="0">后台</label>
        <div id="tab-content2" 
             class="tab-content"
             role="tabpanel" 
             aria-labelledby="specification" 
             aria-hidden="true">
          <p>● 后台开发，通常也称服务器端开发。主要负责业务逻辑处理，工作中处理前端的请求，进行逻辑处理和数据交互，现阶段的Web端、移动端等都需要后台技术的支持。</p>
          <hr>
          <p>● C.A.T工作室后台组基于Java语言开发，自成立以来，和政府、企业等多有合作，致力于开发智能电网辅助决策系统等大型项目。目前许多师兄师姐已斩获字节、腾讯等大厂的offer。如果你具备基本的C语言基础，对Java编程感兴趣，有出色的学习能力以及良好的团队协作能力，那么后台组绝对是你的不二选择</p>
        </div>
    </li>
    </ul>
    <!-- partial -->
  </div>
</template>

<style scoped>
/* --------------------------------- */
.tabs {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  padding: 20px;
  text-align: left;
  font-family: Arial;
  color: #fff;
  background: #F6CA73;
}

h1 {
  font-weight: normal;
  font-size: 40px;
  font-weight: normal;
  text-transform: uppercase;
  float: left;
  margin: 20px 0 100px 10px;
}
h1 span {
  font-size: 13px;
  display: block;
  padding-left: 4px;
}

.tabs {
  width: 650px;
  float: none;
  list-style: none;
  position: relative;
  text-align: left;
}
.tabs li {
  float: left;
  display: block;
}
.tabs input[type="radio"] {
  position: absolute;
  top: 0;
  left: -9999px;
}
.tabs label {
  display: block;
  padding: 14px 21px;
  border-radius: 2px 2px 0 0;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  background: #E2A951;
  cursor: pointer;
  position: relative;
  top: 4px;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.tabs label:hover {
  background: #db9325;
}
.tabs .tab-content {
  z-index: 2;
  display: none;
  overflow: hidden;
  width: 100%;
  font-size: 17px;
  line-height: 25px;
  padding: 25px;
  position: absolute;
  top: 53px;
  left: 0;
  background: #c68521;
}
.tabs [id^="tab"]:checked + label {
  top: 0;
  padding-top: 17px;
  background: #c68521;
}
.tabs [id^="tab"]:checked ~ [id^="tab-content"] {
  display: block;
}

p.link {
  clear: both;
  margin: 380px 0 0 15px;
}
p.link a {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #c68521;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
p.link a:hover {
  background-color: #b0761d;
}
</style>
