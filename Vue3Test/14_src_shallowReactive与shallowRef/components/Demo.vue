<template>
  <h3>当前的 x.y 值是：{{ x.y }}</h3>
  <button @click="x.y++">点我 x + 1</button>
  <button @click="x={y: 888}">点我替换 x</button>
  <hr>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} k</h3>
  <h3>{{ person }}</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary+=10">涨薪</button>
</template>

<script>
import {ref, reactive, toRef, toRefs, shallowReactive, shallowRef} from 'vue'

export default {
  name: 'Demo',
  setup() {
    // 数据
    // let person = shallowReactive({// 只考虑第一层数据的响应式
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    let x = shallowRef({
      y: 0
    })
    console.log('******', x)

    // 返回一个对象（常用）
    return {
      x,
      person,
      ...toRefs(person)
    }
  }

}
</script>

<style>

</style>
