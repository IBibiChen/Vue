<template>
  <h3>当前求和为：{{ sum }}</h3>
  <button @click="sum++">点我 ++</button>
  <hr>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>薪资：{{ job.j1.salary }} k</h3>
  <h3 v-show="person.car">座驾：{{ person.car }}</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary+=10">涨薪</button>
  <button @click="showRawPerson">输出最原始的 person</button>
  <button @click="addCar">给人添加一台车</button>
  <button v-show="person.car" @click="person.car.name += '~'">换车名</button>
  <button v-show="person.car" @click="changePrice">换价格</button>
</template>

<script>
import {ref, reactive, toRefs, toRaw, markRaw} from 'vue'

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

    // 方法
    function showRawPerson() {
      console.log(person)
      const p = toRaw(person)
      console.log(p)
    }

    function addCar() {
      let car = {name: '奔驰', price: 30}
      car = markRaw(car)
      person.car = car
    }

    function changePrice() {
      person.car.price++
      console.log(person.car)
    }


    // 返回一个对象（常用）
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice
    }
  }

}
</script>

<style>

</style>
