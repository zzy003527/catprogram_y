<script setup lang="ts">
</script>


<template>
  <div id="introduceone">
   
    <!-- 文字区域 -->
    <div class="frame-border">
		<div class="frame-inset">
            <h1 class="big">工作室简介</h1>
            <h1 class="white">  C.A.T工作室，成立于2017年，指导老师为梁祖红老师，分为前端和后台两个小组。</h1>
            <br>
		    <h1 class="white">我们致力于政府及企业级的大型项目开发，团队与玉兰集团、南方电网等公司建立了长期合作关系。近年来研发过广东省专家匹配系统、智能塑料回收瓶箱、国家海洋局南海分局北斗航标系统、广州市供电局运营分析平台等。同时我们组队参与App、小程序大赛并获得奖项，目前已有毕业师兄就职于一线互联网大厂。 </h1>
		</div>
	</div>
  
    <div class="frame-border1">
		<div class="frame-inset">
            <h1 class="big">工作室成就</h1>
            <h1 class="white spans">
                <span>● 智能塑料瓶回收箱</span>
                <br>
                <span>● 上腾科技云平台系统</span>
                <br>
                <span>●  “百货校园行”小程序</span>
                <br>
                <span>● 美丽乡村智慧社区平台</span>
                <br>
                <span>● 广州市供电局运营分析平台</span>
                <br>
                <span>● 清远市输电运维决策支持系统</span>
                <br>
                <span>● 国家海洋局南海分局北斗航标系统</span>
                <br>
                <span>● 广东玉兰集团有限公司B2B订单系统</span>
                <br>
                <span>● 韶关市供电局-基于GIS的可视化规划平台 </span>
                <br>
                <span>● 湛江市供电局-配网规划智慧分析系统</span> 
            </h1>
            <br>
		    
		</div>
	</div>
    
  </div>
</template>

<style scoped lang="less">
body {
	position: relative;
	background-color: #fff;
	width: 100%;
	min-height: 100%;
}

h1 {
	color: #72696a;
	text-transform: uppercase;
	font-family: sans-serif;
	font-size: 20px;
	line-height: 23px;
	letter-spacing: 4px;
	margin: 0px;

}

.white {
	color: #fff;
}
.big {
    font-size: 30px;
    position: relative;
    top: -35px;
}
.spans {
    text-align: left;
}

.frame-border {
	top: -15px;
    left: 110px;
	position: absolute;
	-moz-box-shadow: 20px 20px 36px rgba(0,0,0,0.2);
	-webkit-box-shadow: 20px 20px 36px rgba(0,0,0,0.2);
	box-shadow: 20px 20px 36px rgba(0,0,0,0.2);
	border: 11px solid #ededed;
	width: 475px;
	height: 600px;
	margin: 0 auto;
}

.frame-border1 {
	top: -15px;
    right: 10px;
	position: absolute;
	-moz-box-shadow: 20px 20px 36px rgba(0,0,0,0.2);
	-webkit-box-shadow: 20px 20px 36px rgba(0,0,0,0.2);
	box-shadow: 20px 20px 36px rgba(0,0,0,0.2);
	border: 11px solid #ededed;
	width: 475px;
	height: 600px;
	margin: 0 auto;
}
.frame-border1 .frame-inset {
	-moz-box-shadow:    inset 0 0 10px rgba(0,0,0,0.2);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
    box-shadow:         inset 0 0 10px rgba(0,0,0,0.2);
	background-color: #bebebe;
	border: 32px solid #f5f5f5;
	max-width: 100%;
	max-height: 100%;
	padding: 60px 49px;
}
.frame-border .big {
    font-size: 30px;
    position: relative;
    top: -52px;
}

.frame-inset:before {
	content: " ";
	display: block;
	position: absolute;
	top: 0;	
	left: 0;
	z-index: 999;
	width: 100%;
	height: 100%;
	-moz-box-shadow:    inset 10px 0 12px rgba(0,0,0,0.35);
    -webkit-box-shadow: inset 10px 0 12px rgba(0,0,0,0.35);
    box-shadow:         inset 10px 0 12px rgba(0,0,0,0.35);	
}

.frame-inset {
	-moz-box-shadow:    inset 0 0 10px rgba(0,0,0,0.2);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
    box-shadow:         inset 0 0 10px rgba(0,0,0,0.2);
	background-color: #bebebe;
	border: 32px solid #f5f5f5;
	max-width: 100%;
	max-height: 100%;
	padding: 82px 49px;
}


// ------------------------------------------------------------

</style>
