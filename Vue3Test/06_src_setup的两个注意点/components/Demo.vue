<template>
  <h1>一个人的信息</h1>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <button @click="test">测试触发一下 Demo 组件的 Hello 事件</button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits: ['hello'],
  // beforeCreate() {
  //   console.log('--- beforeCreate ---', this)
  // },

  setup(props, context) {
    // console.log('--- setup ---', props)
    console.log('--- setup ---', context)
    // console.log('--- setup ---', context.attrs)// 相当于 Vue2 中的 $attrs
    // console.log('--- setup ---', context.emit)// 触发自定义事件，相当于 Vue2 中的 $emit
    console.log('--- setup ---', context.slots)// 插槽，相当于 Vue2 中的 $slots

    // 数据
    let person = reactive({
      name: '张三',
      age: 18,

    })

    // 方法
    function test() {
      context.emit('hello', 666)
    }

    // 返回一个对象（常用）
    return {
      person,
      test
    }

  }

}
</script>

<style>

</style>
