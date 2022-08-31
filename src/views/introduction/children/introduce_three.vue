<script setup lang="ts">
</script>


<template>
<div class='right'>
  <div class='app'>
    <div class='app_inner'>
      <input checked id='tab-1' name='buttons' type='radio'>
      <label for='tab-1'>
        <div class='app_inner__tab'>
          <h2>
            <i class='icon ion-android-alarm-clock'></i>
            ● 欢迎零基础的报名参加工作室吗？
          </h2>
          <div class='tab_left'>
            <i class='big icon ion-android-color-palette'></i>
            <div class='tab_left__image'>
              <i class='icon ion-android-color-palette'></i>
            </div>
          </div>
          <div class='tab_right'>
            <h3>答：当然是欢迎的啊！现在零基础也是没关系哦，我们更看重的是你的学习能力与学习热情，有潜力的人当然也是我们的目标，所以大胆报名吧！希望你能成为我们的中流砥柱。</h3>
          </div>
        </div>
      </label>
      <input false='' id='tab-2' name='buttons' type='radio'>
      <label for='tab-2'>
        <div class='app_inner__tab'>
          <h2>
            <i class='icon ion-android-alarm-clock'></i>
            ● 工作室的前景怎么样？
          </h2>
          <div class='tab_left'>
            <i class='big icon ion-music-note'></i>
            <div class='tab_left__image'>
              <i class='icon ion-music-note'></i>
            </div>
          </div>
          <div class='tab_right'>
            <h3>答：已有师兄进入到互联网大厂，工作室里能接到政府和企业的项目，也有师兄们打过比赛，无论是对个人成长还是对于日后的就业都有不少帮助。</h3>

          </div>
        </div>
      </label>
      <input false='' id='tab-3' name='buttons' type='radio'>
      <label for='tab-3'>
        <div class='app_inner__tab'>
          <h2>
            <i class='icon ion-android-alarm-clock'></i>
            ● 工作室的规章制度是怎么样的？
          </h2>
          <div class='tab_left'>
            <i class='big icon ion-android-microphone'></i>
            <div class='tab_left__image'>
              <i class='icon ion-android-microphone'></i>
            </div>
          </div>
          <div class='tab_right'>
            <h3>答：我们并没有严格的打卡签到制度，相对弹性自由，可以由个人来合理规划自己的时间，在技术提升的同时，也能保证学业的进步，但也希望进来的小伙伴能够自律自觉完成学习任务。</h3>
          </div>
        </div>
      </label>
      <input false='' id='tab-4' name='buttons' type='radio'>
      <label for='tab-4'>
        <div class='app_inner__tab'>
          <h2>
            <i class='icon ion-android-alarm-clock'></i>
            ● 招新流程是怎么样的？
          </h2>
          <div class='tab_left'>
            <i class='big icon ion-android-bar'></i>
            <div class='tab_left__image'>
              <i class='icon ion-android-bar'></i>
            </div>
          </div>
          <div class='tab_right'>
            <h3>答：今年的招新流程为：笔试、面试、一轮考核、二轮考核。笔试主要是想了解一下大家的基础编程能力，面试想了解一下大家的性格和专业知识，最后的考核阶段则是为了检验大家的学习能力。</h3>
          </div>
        </div>
      </label>
      <!-- --------------------------------------------------------- -->
      <input false='' id='tab-5' name='buttons' type='radio'>
      <label for='tab-5'>
        <div class='app_inner__tab'>
          <h2>
            <i class='icon ion-android-alarm-clock'></i>
            ● 工作室学习的环境氛围如何？
          </h2>
          <div class='tab_left'>
            <i class='big icon ion-music-note'></i>
            <div class='tab_left__image'>
              <i class='icon ion-music-note'></i>
            </div>
          </div>
          <div class='tab_right'>
            <h3>答：我们工作室的伙伴亲切友善，并且愿意带领新伙伴一起学习 成长，互帮互助，整体学习氛围比较轻松、欢乐，同时也会定期举办分享会，在自我提升的同时，也促进了其他小伙伴们的进步。</h3>

          </div>
        </div>
      </label>
      <!-- ----------------------------------------------------------- -->
    </div>
  </div>
</div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300);
* {
  box-sizing: border-box;
}

body {
  background: #45b98f;
  overflow: hidden;
  font-family: "Roboto Condensed", sans-serif;
}
body .left {
  float: left;
  width: 50%;
  height: 100vh;
  position: Relative;
}
body .left_inner {
  width: 340px;
  margin: 0 auto;
  transform: translateY(-50%);
  height: 414px;
  position: absolute;
  right: 20px;
  top: 50%;
}
body .left_inner h1 {
  color: white;
  font-size: 28px;
  margin: 120px 0px 0px 0px;
}
body .left_inner h2 {
  color: #abe8d2;
  font-size: 22px;
  font-weight: 200;
  margin: 0px 0px 0px 0px;
}
body .right {
  float: right;
  top: -90px;
  left: 60px;
  position: relative;
  width: 50%;
  height: 100vh;
}

.app {
  border-radius: 10px;
  width: 450px;
  margin: 0 auto;
  height: 495px;
  position: absolute;
  left: 0;
  top: 50%;
  box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.11);
  -webkit-animation: intro 0.34s 0.4s cubic-bezier(1, 1.4, 0.41, 1.01) forwards;
          animation: intro 0.34s 0.4s cubic-bezier(1, 1.4, 0.41, 1.01) forwards;
  transform: translateY(-50%) scale(0) rotateX(10deg) rotateY(10deg) rotateZ(10deg);
  margin: auto;
  overflow: hidden;
  font-family: "Roboto Condensed", sans-serif;
}
.app_inner {
  position: relative;
}
.app_inner input[type=radio] {
  display: none;
}
.app_inner input[type=radio]:checked + label .app_inner__tab {
  height: 175px;
}
.app_inner input[type=radio]:checked + label .app_inner__tab .tab_right {
  top: 50px;
  transition: all 0.3s 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.app_inner input[type=radio]:not(checked) + label .app_inner__tab {
  height: 80px;
  border-left: 12px solid rgba(0, 0, 0, 0.12);
}
.app_inner input[type=radio]:not(checked) + label .app_inner__tab .tab_right {
  top: 200px;
  transition: all 0.3s 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.app_inner input[type=radio]:checked + label .app_inner__tab .tab_left .tab_left__image {
  -webkit-animation: move_in 0.55s 0.05s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
          animation: move_in 0.55s 0.05s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  transition: all 0.3s 0.36s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.app_inner input[type=radio]:not(checked) + label .app_inner__tab .tab_left .tab_left__image {
  -webkit-animation: move_out 0.75s 0s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
          animation: move_out 0.75s 0s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  transition: all 0.3s 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.app_inner input[type=radio]:checked + label .app_inner__tab .tab_left .big {
  left: 260px;
}
.app_inner input[type=radio]:not(checked) + label .app_inner__tab .tab_left .big {
  left: 400px;
}
.app_inner input[type=radio]:checked + label .app_inner__tab h2 i {
  opacity: 0;
}
.app_inner input[type=radio]:not(checked) + label .app_inner__tab h2 i {
  opacity: 0.3;
}
.app_inner label {
  display: block;
  width: 100%;
}
.app_inner label:nth-of-type(1) .app_inner__tab {
  background: #99b998;
  height: 200px;
}
.app_inner label:nth-of-type(1) .app_inner__tab:hover {
  transition: all 0.2s;
  background: #8db18c;
}
.app_inner label:nth-of-type(1) .app_inner__tab .tab_left__image {
  background: #EA495F;
}
.app_inner label:nth-of-type(2) .app_inner__tab {
  background: #E4B794;
}
.app_inner label:nth-of-type(2) .app_inner__tab:hover {
  transition: all 0.2s;
  background: #e0ac84;
}
.app_inner label:nth-of-type(2) .app_inner__tab .tab_left__image {
  background: #99B998;
}
.app_inner label:nth-of-type(3) .app_inner__tab {
  background: #f4837d;
}
.app_inner label:nth-of-type(3) .app_inner__tab:hover {
  transition: all 0.2s;
  background: #f2716a;
}
.app_inner label:nth-of-type(3) .app_inner__tab .tab_left__image {
  background: #E4B794;
}
.app_inner label:nth-of-type(4) .app_inner__tab {
  background: #ea495f;
}
.app_inner label:nth-of-type(4) .app_inner__tab:hover {
  transition: all 0.2s;
  background: #e8374f;
}
.app_inner label:nth-of-type(4) .app_inner__tab .tab_left__image {
  background: #F4837D;
}
.app_inner label:nth-of-type(5) .app_inner__tab {
  background: #99b998;
  height: 200px;
}
.app_inner label:nth-of-type(5) .app_inner__tab:hover {
  transition: all 0.2s;
  background: #8db18c;
}
.app_inner label:nth-of-type(5) .app_inner__tab .tab_left__image {
  background: #EA495F;
}
.app_inner__tab {
  width: 100%;
  height: 80px;
  background: red;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.65s cubic-bezier(1, 0, 0.41, 1.01);
}
.app_inner__tab h2 {
  position: absolute;
  right: 15px;
  top: 5px;
  color: #1a1c1d;
  font-size: 18px;
}
.app_inner__tab h2 i {
  position: absolute;
  right: 271px;
  opacity: 0.3;
  transition: all 0.3s;
}
.app_inner__tab .tab_right {
  width: 60%;
  float: right;
  position: relative;
  top: 200px;
  text-align: left;
  padding: 0px;
}
.app_inner__tab .tab_right h3, .app_inner__tab .tab_right h4, .app_inner__tab .tab_right p {
  margin: 0;
}
.app_inner__tab .tab_right h3 {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}
.app_inner__tab .tab_right h4 {
  font-size: 12px;
  margin: 4px 0px;
  color: rgba(0, 0, 0, 0.33);
}
.app_inner__tab .tab_right p {
  font-size: 11px;
  color: white;
}
.app_inner__tab .tab_right button {
  margin-top: 10px;
  border: 2px solid white;
  background: none;
  border-radius: 5px;
  padding: 6px 20px;
  cursor: pointer;
  font-family: "Roboto Condensed", sans-serif;
  outline: none;
  font-size: 11px;
  color: white;
  transition: all 0.3s;
}
.app_inner__tab .tab_right button:hover {
  background: white;
  color: black;
}
.app_inner__tab .tab_left {
  width: 30%;
  float: left;
  position: relative;
}
.app_inner__tab .tab_left .big {
  position: absolute;
  top: -17px;
  transition: all 0.3s 0.3s;
  left: 390px;
  font-size: 180px;
  opacity: 0.08;
}
.app_inner__tab .tab_left__image {
  position: relative;
  top: -100px;
  text-align: center;
  background: white;
  left: 47px;
  border-radius: 20px;
  width: 80px;
  height: 80px;
}
.app_inner__tab .tab_left__image i {
  color: white;
  font-size: 40px;
  top: 18px;
  position: relative;
}

@-webkit-keyframes move_out {
  0% {
    top: 47px;
  }
  100% {
    top: 200px;
  }
}

@keyframes move_out {
  0% {
    top: 47px;
  }
  100% {
    top: 200px;
  }
}
@-webkit-keyframes move_in {
  0% {
    top: -200px;
  }
  100% {
    top: 47px;
  }
}
@keyframes move_in {
  0% {
    top: -200px;
  }
  100% {
    top: 47px;
  }
}
@-webkit-keyframes bump {
  0% {
    top: 16px;
  }
  25% {
    top: 13px;
  }
  50% {
    top: 16px;
  }
  75% {
    top: 13px;
  }
  100% {
    top: 16px;
  }
}
@keyframes bump {
  0% {
    top: 16px;
  }
  25% {
    top: 13px;
  }
  50% {
    top: 16px;
  }
  75% {
    top: 13px;
  }
  100% {
    top: 16px;
  }
}
@-webkit-keyframes intro {
  0% {
    transform: translateY(-50%) scale(0) rotateX(10deg) rotateY(10deg) rotateZ(40deg);
  }
  100% {
    transform: translateY(-50%) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
}
@keyframes intro {
  0% {
    transform: translateY(-50%) scale(0) rotateX(10deg) rotateY(10deg) rotateZ(40deg);
  }
  100% {
    transform: translateY(-50%) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
}
a.download, a.follow {
  text-align: center;
  margin-top: 13px;
  width: 300px;
  /* float: left; */
  display: inline-block;
  padding: 16px 30px;
  background: #EA495F;
  color: white;
  font-weight: 900;
  font-family: "Roboto Condensed", sans-serif;
  text-decoration: none;
  border-radius: 4px;
  margin-right: 12px;
}
a.download i, a.follow i {
  margin-right: 10px;
}

a.follow {
  float: left;
  padding: 14px 30px;
  background: none;
  color: white;
  border: 2px solid white;
}
a.follow:hover {
  color: #41EFB6;
  border-color: #41EFB6;
}
</style>
