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
            <el-timeline-item :color="finishStepOne" timestamp="笔试" placement="top">
              <el-card :body-style="{ height: '80px', padding: '5px' }">
                <ul class="comments">
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
            <el-timeline-item :color="finishStepTwo" timestamp="面试" placement="top">
              <el-card :body-style="{ height: '80px', padding: '5px' }">
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
            <el-timeline-item :color="finishStepThree" timestamp="一轮考核" placement="top">
              <el-card :body-style="{ height: '80px', padding: '5px' }">
                <ul class="comments">
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
            <el-timeline-item :color="finishStepFour" timestamp="二轮考核" placement="top">
              <el-card :body-style="{ height: '80px', padding: '5px' }">
                <ul class="comments">
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
          </el-timeline>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<script lang='ts' setup>
import { userProgress, handleError } from '../../request/requestApi'
import { ref, reactive } from 'vue'
let userMsg
let username = ref('')
let userdirection = ref('')
let studentIdId = ref('')
let UsreImg = ref('')
//根据状态码来判断是否要加颜色
let finishStepOne = ref('')
let finishStepTwo = ref('')
let finishStepThree = ref('')
let finishStepFour = ref('')
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
  userMsg = res
  //成功获取数据之后，渲染到页面上面
  username.value = userMsg.obj.username
  if (userMsg.obj.group == false) {
    userdirection.value = '前端'
  }
  else {
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
})
  .catch(handleError);

function checkProgress(userMsg) {
  if (userMsg.obj.testStatus == 1) {
    finishStepOne.value = '#0bbd87'
  } else if (userMsg.obj.testStatus == 2) {
    finishStepOne.value = '#0bbd87'
    finishStepTwo.value = '#0bbd87'
  } else if (userMsg.obj.testStatus == 3) {
    finishStepOne.value = '#0bbd87'
    finishStepTwo.value = '#0bbd87'
    finishStepThree.value = '#0bbd87'
  } else if (userMsg.obj.testStatus == 4) {
    finishStepOne.value = '#0bbd87'
    finishStepTwo.value = '#0bbd87'
    finishStepThree.value = '#0bbd87'
    finishStepFour.value = '#0bbd87'
  } else if (userMsg.obj.testStatus == 0) {
    if (userMsg.obj.test1 == null) {
      finishStepOne.value = 'red'
    } else if (userMsg.obj.test2 == null) {
      finishStepOne.value = '#0bbd87'
      finishStepTwo.value = 'red'
    } else if (userMsg.obj.test3 == null) {
      finishStepOne.value = '#0bbd87'
      finishStepTwo.value = '#0bbd87'
      finishStepThree.value = 'red'
    } else if (userMsg.obj.test4 == null) {
      finishStepOne.value = '#0bbd87'
      finishStepTwo.value = '#0bbd87'
      finishStepThree.value = '#0bbd87'
      finishStepFour.value = 'red'
    }
  }
}
function showComments(userMsg) {
  comments.commentlistOne = userMsg.obj.test1
  comments.commentlistTwo = userMsg.obj.test2
  comments.commentlistThree = userMsg.obj.test3
  comments.commentlistFour = userMsg.obj.test4
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



}

.userProgressLeft .userProgressLeftImg {
  width: 100%;
  height: 221px;
  background: url(/userprogress.png) center no-repeat;
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
</style>