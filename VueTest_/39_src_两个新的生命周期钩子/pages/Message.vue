<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带 params 参数，to 的字符串写法 -->
        <!--<router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp;-->

        <!-- 跳转路由并携带 params 参数，to 的对象写法 -->
        <router-link :to="{
          name: 'stack',
          params: {
            id: m.id,
            title: m.title
          }
        }">
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push 查看</button>
        <button @click="replaceShow(m)">replace 查看</button>

      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息 001'},
        {id: '002', title: '消息 002'},
        {id: '003', title: '消息 003'}
      ]
    }
  },
  methods: {
    pushShow(m) {
      // console.log(this.$router)
      this.$router.push({
        name: 'stack',
        query: {
          id: m.id,
          title: m.title
        }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'stack',
        query: {
          id: m.id,
          title: m.title
        }
      })
    }
  },
  beforeDestroy() {
    console.log('Message 组件即将被销毁了')
  }
}
</script>

<style scoped>

</style>