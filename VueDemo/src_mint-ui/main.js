import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

// 使用 mint-ui
// 1. 注册成标签(全局)
// Vue.component('mt-button', Button)
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
