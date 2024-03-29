/*
  该文件是整个项目的入口文件
*/

// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'

// 完整引入
// 引入 ElementUI 组件库
// import ElementUI from 'element-ui'
// 引入 ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入
import {Button, Row, DatePicker} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component('m-date', DatePicker)


// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 应用 ElementUI
// Vue.use(ElementUI)

// 创建 Vue 实例对象 vm
new Vue({
    el: '#app',
    render: h => h(App),
})
