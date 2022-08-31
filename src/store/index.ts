import { createStore } from 'vuex'

export default createStore({
  state: {
    // 控制登录卡片的变量
    dialogTableVisible: true,
    // 存放验证码的值
    verifyCode: '',
    // 存放获取验证码的邮箱
    thisEmail: ''
  },
  getters: {
  },
  mutations: {
    // 修改vuex验证码的值
    configverifyCode(state,value) {
      state.verifyCode = value
    },
    // 修改vuex获取验证码的邮箱的值
    configthisEmail(state,value) {
      state.thisEmail = value
    }
  },
  actions: {
  },
  modules: {
  }
})
