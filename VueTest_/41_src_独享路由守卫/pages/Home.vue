<template>
  <div>
    <h2>我是 Home 的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>

      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['News', 'Message']"> -->

      <!-- 缓存一个路由组件 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  /*mounted() {
    console.log('Home 组件挂载完毕', this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },*/

  // beforeDestroy() {
  //   console.log('Home 组件即将被销毁了')
  // }
}
</script>

<style scoped>

</style>