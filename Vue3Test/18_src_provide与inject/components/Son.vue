<template>
  <div class="son">
    <h3>我是 Son 组件（孙），{{ car.name }} -- {{ car.price }}</h3>
  </div>
</template>

<script>
import {inject} from 'vue'

export default {
  name: 'Son',
  setup() {
    // 数据

    let car = inject('car')

    console.log('@@@Son---', car)

    // 返回一个对象（常用）
    return {car}
  }

}
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
