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

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('组件内路由守卫 @beforeRouteEnter', to, from)
    // 判断是否需要鉴权
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'Meta') {
        next()
      } else {
        alert('无权访问~')
      }
    } else {
      next()
    }
  },

  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('组件内路由守卫 @beforeRouteLeave', to, from)
    next()
  }

}
</script>

<style scoped>

</style>