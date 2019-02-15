<template>
  <div>
    <ul>
      <li v-for="(msg, index) in messages" :key="msg.id">
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
        <button @click="pushShow(msg.id)">push 查看</button>
        <button @click="replaceShow(msg.id)">replace 查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: []
      }
    },

    mounted() {
      // 模拟 ajax 请求从后台获取数据
      setTimeout(() => {
        this.messages = [
          {id: 1, title: 'message 001'},
          {id: 2, title: 'message 002'},
          {id: 3, title: 'message 003'}
        ];
      }, 1000);
    },

    methods: {
      pushShow(id) {
        this.$router.push(`/home/message/detail/${id}`);
      },

      replaceShow(id) {
        this.$router.replace(`/home/message/detail/${id}`);
      }
    }
  }
</script>

<style scoped>

</style>
