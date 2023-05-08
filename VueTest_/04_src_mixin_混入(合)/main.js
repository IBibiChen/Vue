/*
  该文件是整个项目的入口文件
*/

// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'
// 引入混合
import {mixin, hunhe} from './mixin'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

Vue.mixin(mixin)
Vue.mixin(hunhe)

// 创建 Vue 实例对象 vm
new Vue({
    el: '#app',
    render: h => h(App)
})

