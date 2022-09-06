<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="370px" class="elAside">
        <div class="userProgressLeft">
          <div class="userProgressLeftrMsg">
            <div class="userProgressLeftrMsgLeft">
              <img :src="UsreImg" />
            </div>
            <div class="userProgressLeftrMsgRight">
              <div class="username">{{ username }}</div>
              <span class="direction">{{ userdirection }} {{ studentIdId }}
              </span>
            </div>
          </div>
          <div class="userProgressLeftImg">
          </div>
        </div>
      </el-aside>
      <el-main>
        <div class="userProgressRight">
          <el-timeline>

            <el-timeline-item :color="finishStepOne" placement="top" center>
              <div class="statusStart"> {{ statusOne }}</div>
            </el-timeline-item>
            <el-timeline-item :color="finishStepTwo" placement="top" center>
              <div class="statusStart"> {{ statusTwo }}</div>
              <el-card :body-style="{ padding: '5px' }">
                <ul class="comments">
                  <div class="commentNull" v-show="commentNullOne">还没有管理员对你进行评论噢</div>
                  <li class="comment" v-for="(comment) in comments.commentlistOne" :key="comment.id" :comment="comment">
                    <div class="commentRight">
                      <span class="commentName">{{ comment.adminName }}：</span>
                      <span class="commentMsg">{{ comment.review }}</span>
                    </div>
                    <div class="commentLeft">
                      <span class="commentGrade">得分：{{ comment.grade }}</span>
                    </div>

                  </li>

                </ul>

              </el-card>
            </el-timeline-item>
            <el-timeline-item :color="finishStepThree" placement="top" center>
              <div class="statusStart"> {{ statusThree }}</div>
              <el-card :body-style="{ padding: '5px' }">
                <div class="commentNull" v-show="commentNullTwo">还没有管理员对你进行评论噢</div>
                <ul class="comments">
                  <li class="comment" v-for="(comment) in comments.commentlistTwo" :key="comment.id" :comment="comment">
                    <div class="commentRight">
                      <span class="commentName">{{ comment.adminName }}：</span>
                      <span class="commentMsg">{{ comment.review }}</span>
                    </div>
                    <div class="commentLeft">
                      <span class="commentGrade">得分：{{ comment.grade }}</span>
                    </div>

                  </li>

                </ul>

              </el-card>
            </el-timeline-item>
            <el-timeline-item :color="finishStepFour" placement="top" center>
              <div class="statusStart"> {{ statusFour }}</div>
              <el-card :body-style="{ padding: '5px' }">
                <ul class="comments">
                  <div class="commentNull" v-show="commentNullThree">还没有管理员对你进行评论噢</div>
                  <li class="comment" v-for="(comment) in comments.commentlistThree" :key="comment.id"
                    :comment="comment">
                    <div class="commentRight">
                      <span class="commentName">{{ comment.adminName }}：</span>
                      <span class="commentMsg">{{ comment.review }}</span>
                    </div>
                    <div class="commentLeft">
                      <span class="commentGrade">得分：{{ comment.grade }}</span>
                    </div>

                  </li>

                </ul>

              </el-card>
            </el-timeline-item>
            <el-timeline-item :color="finishStepFive" placement="top" center>
              <div class="statusStart"> {{ statusFive }}</div>
              <el-card :body-style="{ padding: '5px' }">
                <ul class="comments">
                  <div class="commentNull" v-show="commentNullFour">还没有管理员对你进行评论噢</div>
                  <li class="comment" v-for="(comment) in comments.commentlistFour" :key="comment.id"
                    :comment="comment">
                    <div class="commentRight">
                      <span class="commentName">{{ comment.adminName }}：</span>
                      <span class="commentMsg">{{ comment.review }}</span>
                    </div>
                    <div class="commentLeft">
                      <span class="commentGrade">得分：{{ comment.grade }}</span>
                    </div>

                  </li>

                </ul>

              </el-card>
            </el-timeline-item>
            <el-timeline-item :color="finishStepSix" placement="top" center>
              <div class="statusStart"> {{ statusSix }}</div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<script lang='ts' setup>
import { userProgress, handleError } from '../../request/requestApi'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
let userMsg
let username = ref('')
let userdirection = ref('')
let studentIdId = ref('')
let UsreImg = ref('')



//获取用户的token
let token: string | null
if (localStorage.getItem('token') == null) {
  token = sessionStorage.getItem('token')
} else {
  token = localStorage.getItem('token')
}
console.log(token);
//传入用户的token获取用户信息

userProgress().then((res) => {
  userMsg = res;
  if (res.resultStatus == 200) {
    //成功获取数据之后，渲染到页面上面
    username.value = userMsg.obj.username
    if (userMsg.obj.group == false) {
      userdirection.value = '前端'
    }
    else if (userMsg.obj.group == true) {
      userdirection.value = '后台'
    }
    studentIdId.value = userMsg.obj.id
    if (userMsg.obj.imageSite == null) {
      UsreImg.value = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
    else {
      UsreImg.value = userMsg.obj.imageSite
    }
    checkProgress(userMsg)
    showComments(userMsg)
    return res
  } else {
    ElMessage({
      message: `${res.resultIns}`,
      type: 'error'
    })

  }

})
  .catch(handleError);
//显示进度信息
//根据状态码来判断是否要加颜色
let finishStepOne = ref('')
let finishStepTwo = ref('')
let finishStepThree = ref('')
let finishStepFour = ref('')
let finishStepFive = ref('')
let finishStepSix = ref('')
const statusOne = ref('')
const statusTwo = ref('')
const statusThree = ref('')
const statusFour = ref('')
const statusFive = ref('')
const statusSix = ref('')


function checkProgress(userMsg) {
  //先对六个时间节点进行默认配置
  // 不给点颜色
  statusOne.value = ' 报名阶段'
  statusTwo.value = '笔试阶段'
  statusThree.value = '面试阶段'
  statusFour.value = '一轮考核'
  statusFive.value = '二轮考核'
  statusSix.value = '录用'
  if (userMsg.obj.testStatus == 100) {
    statusOne.value = '同学！你还没有报名噢，先去报名吧！'
    finishStepOne.value = 'rgb(241 160 5)'
  } else if (userMsg.obj.testStatus == 101) {
    statusOne.value = '同学！你已经报名啦，请耐心等待预约笔试时间噢！'
    finishStepOne.value = 'rgb(117 225 61)'
  } else if (userMsg.obj.testStatus == 102) {
    statusOne.value = '很抱歉，同学！现在已经过了报名时间了'
    finishStepOne.value = 'rgb(233 13 13 / 70%)'
  }
  if (userMsg.obj.testStatus == 200) {
    statusTwo.value = '同学！你已经报名成功进入笔试啦！现在可以预约笔试时间了！预约时间后按时到达笔试噢！'
    finishStepTwo.value = 'rgb(241 160 5)'
  } else if (userMsg.obj.testStatus == 201) {
    statusTwo.value = '同学！你已经通过笔试啦，请耐心等待预约面试时间噢！'
    finishStepTwo.value = 'rgb(117 225 61)'
  } else if (userMsg.obj.testStatus == 202) {
    statusTwo.value = '很抱歉，同学！你未通过笔试，感谢你来参与我们工作室的招新！'
    finishStepTwo.value = 'rgb(233 13 13 / 70%)'
  }
  if (userMsg.obj.testStatus == 300) {
    statusThree.value = '同学！你已经通过笔试进入面试啦！现在可以预约面试时间了！预约时间后按时到达面试噢！'
    finishStepThree.value = 'rgb(241 160 5)'
  } else if (userMsg.obj.testStatus == 301) {
    statusThree.value = '同学！你已经通过面试啦，请耐心等待预约一轮考核答辩时间噢！'
    finishStepThree.value = 'rgb(117 225 61)'
  } else if (userMsg.obj.testStatus == 302) {
    statusThree.value = '很抱歉，同学！你未通过面试，感谢你来参与我们工作室的招新！'
    finishStepThree.value = 'rgb(233 13 13 / 70%)'
  }
  if (userMsg.obj.testStatus == 400) {
    statusFour.value = '同学！你已经通过面试进入一轮考核啦！现在可以预约一轮考核时间了！预约时间后按时到达进行一轮答辩噢！'
    finishStepFour.value = 'rgb(241 160 5)'
  } else if (userMsg.obj.testStatus == 401) {
    statusFour.value = '同学！你已经通过一轮考核啦，请耐心等待预约二轮考核答辩的时间噢！'
    finishStepFour.value = 'rgb(117 225 61)'
  } else if (userMsg.obj.testStatus == 402) {
    statusFour.value = '很抱歉，同学！你未通过一轮考核，感谢你来参与我们工作室的招新！'
    finishStepFour.value = 'rgb(233 13 13 / 70%)'
  }
  if (userMsg.obj.testStatus == 500) {
    statusFive.value = '同学！你已经通过一轮考核进入二轮考核啦！现在可以预约二轮考核答辩时间了！预约时间后按时到达进行二轮答辩噢！'
    finishStepFive.value = 'rgb(241 160 5)'
  } else if (userMsg.obj.testStatus == 501) {
    statusFive.value = '同学！你已经通过二轮考核啦，请耐心等待工作室录取结果噢！'
    finishStepFive.value = 'rgb(117 225 61)'
  } else if (userMsg.obj.testStatus == 502) {
    statusFive.value = '很抱歉，同学！你未通过二轮考核，感谢你来参与我们工作室的招新！'
    finishStepFive.value = 'rgb(233 13 13 / 70%)'
  }
  if (userMsg.obj.testStatus == 600) {
    statusSix.value = '同学！你已经通过重重关卡，得到我们工作室的offer了！'
    finishStepSix.value = 'rgb(117 225 61)'

  }

}
//显示有无评论的窗口
const commentNullOne = ref()
const commentNullTwo = ref()
const commentNullThree = ref()
const commentNullFour = ref()
//获取用户评论的信息
//评论的数组
type commentType = {
  grade: number,
  id: number,
  review: string,
  studentId: string,
  testId: number,
  adminId: number,
  adminName: string

}
interface commentTypeList {
  commentlistOne: Array<commentType> | null,
  commentlistTwo: Array<commentType> | null,
  commentlistThree: Array<commentType> | null,
  commentlistFour: Array<commentType> | null
}
let comments = reactive<commentTypeList>({
  commentlistOne: null,
  commentlistTwo: null,
  commentlistThree: null,
  commentlistFour: null
})

function showComments(userMsg) {
  if (userMsg.obj.test1 == null) {
    commentNullOne.value = true
  } else {
    comments.commentlistOne = userMsg.obj.test1
  }
  if (userMsg.obj.test2 == null) {
    commentNullTwo.value = true
  } else {
    comments.commentlistTwo = userMsg.obj.test2
  }
  if (userMsg.obj.test3 == null) {
    commentNullThree.value = true
  } else {
    comments.commentlistThree = userMsg.obj.test3
  }
  if (userMsg.obj.test4 == null) {
    commentNullFour.value = true
  } else {
    comments.commentlistFour = userMsg.obj.test4
  }

}




</script>
<style scoped>
.elAside {
  padding: 10px;
}

.userProgressRight {
  text-align: left;
  padding: 20px;
  width: 766px;
  border-radius: 20px;
  box-shadow: 0px 4px 21px -5px rgb(50 88 130 / 32%);
  background-color: #fff;

}

.userProgressLeft {
  display: flex;
  width: 100%;
  height: 350px;
  border-radius: 20px;
  box-shadow: 1px 4px 39px -12px rgb(32 118 210 / 32%);
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: center;
  background-color: #fff
}

.userProgressLeft .userProgressLeftImg {
  width: 100%;
  height: 221px;
  background: url(/userprogress.png) center no-repeat;
  border-radius: 20px;
}

.userProgressLeft .userProgressLeftrMsg {
  height: 125px;
  display: flex;
  align-items: center;
}


.userProgressLeft .userProgressLeftrMsg .userProgressLeftrMsgLeft img {
  width: 60px;
  padding: 30px;
}

.userProgressLeft .userProgressLeftrMsg .userProgressLeftrMsgRight {
  width: 200px;
  height: 60px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.userProgressLeft .userProgressLeftrMsg .userProgressLeftrMsgRight .username {
  font-size: 19px;
  font-weight: bold;

  width: 100%;
}

.userProgressLeft .userProgressLeftrMsg .userProgressLeftrMsgRight .direction {
  font-size: 14px;
}


.userProgressRight .comments {
  width: 100%;
  list-style: none;
  height: 100%;
  padding: 0;
  overflow: auto;
}

.userProgressRight .comments .comment {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
}



.userProgressRight .comments .comment .commentRight {
  display: flex;
  align-items: center;
}

.userProgressRight .comments .comment .commentLeft {
  padding-right: 15px;
}

.userProgressRight .comments .comment .commentRight .commentName {
  color: #52a9ff;
}

.statusStart {
  font-size: 16px;
  margin-bottom: 5px;
}

.commentNull {
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #7e7c7c;
}
</style>