<template>
  <h1>一个人的信息</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>性别：{{ sex }}</h3>
  <h3>a 的值是：{{ a }}</h3>
  <button @click="sayHello">说话(Vue3 所配置的 —— sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(Vue2 所配置的 —— sayWelcome)</button>
  <br>
  <br>
  <button @click="test1">测试一下在 Vue2 的配置中去读取 Vue3 中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在 Vue3 的 setup 配置中去读取 Vue2 中的数据、方法</button>
</template>

<script>
// import {h} from 'vue'

export default {
  name: 'App',
  data() {
    return {
      sex: '男 - Vue2',
      a: 100
    }
  },
  methods: {
    sayWelcome() {
      alert('Vue2 的写法，欢迎~')
    },
    test1() {
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },

  // 此处只是测试一下 setup，暂时不考虑响应式的问题
  setup() {
    // 数据
    let name = '张三'
    let age = 18
    let a = 200


    // 方法
    function sayHello() {
      alert(`我叫 ${name}，我 ${age} 岁了，你好啊！`)
    }

    function test2() {
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)
      console.log(this.sayWelcome)
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }


    // 返回一个函数（渲染函数）
    /*return () => {
      return h('h1', 'Meta')
    }*/

    // return () => h('h1', 'Meta')

  }

}
</script>

<style>

</style>
