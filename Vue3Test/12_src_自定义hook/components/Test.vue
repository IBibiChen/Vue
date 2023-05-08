<template>
  <h3>我是 Test 组件</h3>
  <h3>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h3>
</template>

<script>
// import {ref} from 'vue'
import usePoint from "@/hooks/usePoint"

export default {
  name: 'Test',
  setup() {
    let point = usePoint()

    return {point}
  }

}
</script>

<style>

</style>
