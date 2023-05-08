<template>
  <div class="child">
    <h3>我是 Child 组件（子），{{ x.name }} -- {{ x.price }}</h3>
    <Son/>
  </div>
</template>

<script>
import {inject} from 'vue'
import Son from "@/components/Son"

export default {
  name: 'Child',
  components: {Son},
  setup() {
    // 数据
    let x = inject('car')

    console.log('@@@Child---', x)

    // 返回一个对象（常用）
    return {x}
  }

}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
