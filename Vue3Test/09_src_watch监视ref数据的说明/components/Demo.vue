<template>
  <h3>当前求和为：{{ sum }}</h3>
  <button @click="sum++">点我 + 1</button>
  <hr>
  <h3>当前的信息为：{{ msg }}</h3>
  <button @click="msg+='！'">修改信息</button>
  <hr>
  <h3>姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>薪资：{{ person.job.j1.salary }} k</h3>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary+=10">涨薪</button>
</template>

<script>
import {ref, reactive, watch} from 'vue'

export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = ref({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    console.log(sum)
    console.log(msg)
    console.log(person)

    watch(sum, (newValue, oldValue) => {
      console.log('sum 的值变化了', newValue, oldValue)
    })

    watch(person, (newValue, oldValue) => {
      console.log('person 的值变化了', newValue, oldValue)
    }, {deep: true})


    // 返回一个对象（常用）
    return {
      sum,
      msg,
      person
    }

  }

}
</script>

<style>

</style>
