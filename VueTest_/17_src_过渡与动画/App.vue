<template>
  <div id="root">
    <TestAnimation/>
    <TestTransition/>
    <TestAnimateCSS/>
  </div>
</template>

<script>
// 引入组件
import TestAnimation from "./components/TestAnimation"
import TestTransition from "./components/TestTransition"
import TestAnimateCSS from "./components/TestAnimateCSS"

export default {
  name: "App",
  components: {
    TestAnimation, TestTransition, TestAnimateCSS
  },
  data() {
    return {}
  }

}
</script>

<style>

</style>