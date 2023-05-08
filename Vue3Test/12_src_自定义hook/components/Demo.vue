<template>
  <h3>当前求和为：{{ sum }}</h3>
  <button @click="sum++">点我 + 1</button>
  <hr>
  <h3>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h3>
</template>

<script>
import {ref} from 'vue'
import usePoint from "@/hooks/usePoint"

export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)

    let point = usePoint()

    // 返回一个对象（常用）
    return {sum, point}
  }

}
</script>

<style>

</style>
