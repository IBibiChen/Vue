<template>
  <h3>当前求和为：{{ sum }}</h3>
  <button @click="sum++">点我 ++</button>
  <hr>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} k</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary+=10">涨薪</button>
</template>

<script>
import {ref, reactive, toRefs, readonly, shallowReadonly} from 'vue'

export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    sum = readonly(sum)

    // person = readonly(person)
    person = shallowReadonly(person)

    // 返回一个对象（常用）
    return {
      sum,
      ...toRefs(person)
    }
  }

}
</script>

<style>

</style>
