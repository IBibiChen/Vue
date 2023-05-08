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
  // 监视属性，Vue2 的写法
  /*watch: {
    // 简写
    /!*sum(newVal, oldVal) {
      console.log('sum 的值变化了', newVal, oldVal)
    }*!/

    // 完整写法
    sum: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        console.log('sum 的值变化了', newVal, oldVal)
      }
    }
  },*/

  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // 监视
    // 情况一：监视 ref 所定义的一个响应式数据
    /*watch(sum, (newValue, oldValue) => {
      console.log('sum 的值变化了', newValue, oldValue)
    }, {immediate: true})*/

    // 情况二：监视 ref 所定义的多个响应式数据
    /*watch([sum, msg], (newValue, oldValue) => {
      console.log('msg 的值变化了', newValue, oldValue)
    }, {immediate: true})// 此次的 deep 配置无效*/

    /*
      情况三：监视 reactive 所定义的一个响应式数据的全部属性
          注意：1、此处无法正确的获取 oldValue
          注意：2、强制开启了深度监视（deep 配置无效）
    */
    /*watch(person, (newValue, oldValue) => {
      console.log('person 变化了', newValue, oldValue)
    }, {immediate: true, deep: false})*/

    // 情况四：监视 reactive 所定义的一个响应式数据中的某个属性
    /*watch(() => person.age, (newValue, oldValue) => {
      console.log('person 的 age 变化了', newValue, oldValue)
    })*/

    // 情况五：监视 reactive 所定义的一个响应式数据中的某些属性
    /*watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log('person 的 name 或 age 变化了', newValue, oldValue)
    })*/

    // 特殊情况：监视 reactive 所定义的一个响应式数据中的对象属性
    /*watch(() => person.job, (newValue, oldValue) => {
      console.log('person 的 job 变化了', newValue, oldValue)
    }, {deep: true})// 此处由于监视的是 reactive 所定义的对象中的某个属性，所以 deep 配置有效*/

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
