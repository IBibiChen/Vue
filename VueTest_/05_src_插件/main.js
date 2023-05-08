/*
  该文件是整个项目的入口文件
*/

// 引入 Vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'
// 引入插件
import plugins from './plugins'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(plugins)

// 创建 Vue 实例对象 vm
new Vue({
    el: '#app',
    render: h => h(App)
})

