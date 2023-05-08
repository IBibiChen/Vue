<template>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} k</h3>
  <h3>{{ person }}</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary+=10">涨薪</button>
</template>

<script>
import {ref, reactive, toRef, toRefs} from 'vue'

export default {
  name: 'Demo',
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // const name1 = person.name
    // console.log('%%%', name1)

    // const name2 = toRef(person, 'name')
    // console.log('###', name2)

    const x = toRefs(person)
    console.log('******', x)

    // 返回一个对象（常用）
    return {
      person,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary')
      ...toRefs(person)
    }

    // return {
    //   person,
    //   name: ref(person.name),
    //   age: ref(person.age),
    //   salary: ref(person.job.j1.salary)
    // }

  }

}
</script>

<style>

</style>
