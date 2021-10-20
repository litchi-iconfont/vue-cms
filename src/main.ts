import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import './service'
import 'normalize.css'
import './assets/css/base.css'
//导入global
//全局引入
//导入element-plus包
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { setupState } from '@/store/index'
//引入自定义全局属性
import {globalRegister} from '@/global/index'

const app = createApp(App)
app.use(globalRegister)
app.use(ElementPlus)
app.use(store)
setupState()
app.use(router)


app.mount('#app')
