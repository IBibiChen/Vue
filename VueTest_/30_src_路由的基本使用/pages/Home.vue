<template>
  <h2>我是 Home 的内容</h2>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log('Home 组件挂载完毕', this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },
  // beforeDestroy() {
  //   console.log('Home 组件即将被销毁了')
  // }
}
</script>

<style scoped>

</style>