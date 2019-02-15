<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsArr: ['news 001', 'news 002', 'news 003']
      }
    }
  }
</script>

<style scoped>

</style>
