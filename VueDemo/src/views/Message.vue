<template>
  <ul>
    <li v-for="(msg, index) in messages" :key="msg.id">
      <a href="">{{msg.title}}</a>
    </li>
  </ul>
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
        const messages = [
          {id: 1, title: 'message 001'},
          {id: 2, title: 'message 002'},
          {id: 3, title: 'message 003'}
        ];
        this.messages = messages;
      }, 1000);
    }
  }
</script>

<style scoped>

</style>
