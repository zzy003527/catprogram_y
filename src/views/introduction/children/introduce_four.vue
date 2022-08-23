<script setup lang="ts">
import { ref,onMounted  } from 'vue'
 
//  声明变量获取refsDOM元素
const one = ref()
const two = ref()
const three = ref()
const four = ref()

 
// 注意，这里如果不在挂载后输出到控制台，控制台是看不到dom元素的
onMounted(() => {
    let num = ['one','two','three','four'];
        setInterval(() => {
        //把数组的最后一个添加到第一个
        num.unshift(num[3]);
        //删除最后一个
        num.pop();
        if(one.value && two.value && three.value && four.value) {
        one.value.className = num[0]
        two.value.className = num[1]
        three.value.className = num[2]
        four.value.className = num[3]
        }
    }, 2000);
})


    


</script>


<template>
  <div id="introducefour">
    <!-- 外部的大盒子 -->
    <div class="main">
        <!-- 轮播的图片 -->
        <ul class="imgs" ref="imgs">
            <li class="one" ref="one">
                <a href="javascript:;"><img src="/cat1.jpg" alt=""></a>
            </li>
            <li class="two" ref="two">
                <a href="javascript:;"><img src="/cat2.jpg" alt=""></a>
            </li>
            <li class="three" ref="three">
                <a href="javascript:;"><img src="/cat3.jpg" alt=""></a>
            </li>
            <li class="four" ref="four">
                <a href="javascript:;"><img src="/cat4.jpg" alt=""></a>
            </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

/* 修改图片的大小 */
img {
    width: 100%;
    border-radius: 15px;
}

/* 修改外部大盒子的大小 */
.main {
    position: relative;
    width: 900px;
    height: 300px;
    /* 使盒子居中 */
    top: 20%;
    left: 50%;
    transform: translate(-50%,10%);
}

/* 让包裹所有图片的盒子处于外部盒子的中间 */
.imgs {
    position: absolute;
    width: 650px;
    height: 300px;
    top: 0;
    left: 50%;
    transform: translate(-50%,0%);
}

/* 让所有图片都叠在一起 */
.imgs li {
    position: absolute;
    width: 650px;
    /* 此处过渡效果 */
    transition: 0.5s;
}

/* 给左右两侧的按钮设置样式和定位到两端 */
.main .leftBtn {
    position: absolute;
    font-size: 20px;
    /* 使其变圆 */
    width: 40px;
    height: 40px;
    border-radius: 20px;
    /* 设置文字样式且使文字居中 */
    color: white;
    line-height: 36px;
    text-align: center;
    /* 设置背景且使背景半透明 */
    background-color: black;
    opacity: 0.2;
    /* 使按钮位于左侧中央并设置显示层级 */
    top: 50%;
    left: 0;
    z-index: 500;
}

.main .rightBtn {
    position: absolute;
    font-size: 20px;
    /* 使其变圆 */
    width: 40px;
    height: 40px;
    border-radius: 20px;
    /* 设置文字样式且使文字居中 */
    color: white;
    line-height: 36px;
    text-align: center;
    /* 设置背景且使背景半透明 */
    background-color: black;
    opacity: 0.2;
    /* 使按钮位于左侧中央并设置显示层级 */
    top: 50%;
    right: 0;
    z-index: 500;
}

/* 给左右两侧按钮添加鼠标移入时的样式（文字变亮） */
.leftBtn:hover {
    opacity: 0.5;
}

.rightBtn:hover {
    opacity: 0.5;
}

/* 把图片分散到两侧且两侧图片缩小 */
.imgs .one {
    transform: translateX(-195px) scale(0.8);
    z-index: 1;
}

.imgs .three {
    transform: translateX(195px) scale(0.8);
    z-index: 1;
}

/* 中间图片显示层级最高 */
.imgs .two {
    z-index: 2;
}

/* 开始时不显示的图片隐藏在中间图片的后面 */
.imgs .four,.five,.six {
    transform: scale(0.8);
}


/* 添加小圆圈样式 */
.circle {
    position: absolute;
    bottom: -25px;
    left: 50%;
    margin-left: -72px;
    z-index: 250;
}

.circle li {
    float: left;
    background-color: rgb(230, 230, 230);
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin: 0 6px;
    cursor: pointer;
}

/* 小圆圈被选中时改变的样式 */
.circle .current {
    background-color: rgb(236,65,65);
}

/* 左右两部用来实现点击切换的盒子 */
.rightBox {
    position: absolute;
    right: 25px;
    bottom: 30px;
    width: 100px;
    height: 240px;
}

.leftBox {
    position: absolute;
    left: 25px;
    bottom: 30px;
    width: 100px;
    height: 240px;
}
</style>
