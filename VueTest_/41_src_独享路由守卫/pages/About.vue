<template>
  <h2>我是 About 的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log('About 组件挂载完毕', this.$route)

    // console.log('About 组件挂载完毕', this)
    // window.aboutRoute = this.$route
    // window.aboutRouter = this.$router
  },

  // beforeDestroy() {
  //   console.log('About 组件即将被销毁了')
  // }
}
</script>

<style scoped>

</style>