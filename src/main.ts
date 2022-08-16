import { createApp } from 'vue'
// 引入vuex
import { store, key } from './store'
// 引入路由
import router from "./router";
import './style.css'
// 引入elementplus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(store, key)
app.use(ElementPlus)
app.use(router)
app.mount('#app')