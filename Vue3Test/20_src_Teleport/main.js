// 引入的不再是 Vue 构造函数了，引入的是一个名为 createApp 的工厂函数
import {createApp} from 'vue'
import App from './App.vue'

// 创建应用实例对象 —— app(类似于之前 Vue2 中的 vm，但 app 比 vm 更“轻”)
// createApp(App).mount('#app')

const app = createApp(App)

// 挂载
app.mount('#app')




// 创建 Vue 实例对象 vm
/*
const vm = new Vue({
    // el: '#app',
    render: h => h(App)
})
vm.$mount('#app')*/
