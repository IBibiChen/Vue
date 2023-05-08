<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios"

export default {
  name: "Search",
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    search() {
      // 请求前更新 List 的数据
      this.$bus.$emit('updateListData', {firstView: false, loading: true, errMsg: '', users: []})

      const url = `https://api.github.com/search/users?q=${this.keyWord}`;
      // 发送 ajax 请求
      axios.get(url).then(
          response => {
            console.log('请求成功了')
            // 请求成功后更新 List 的数据
            this.$bus.$emit('updateListData', {firstView: false, loading: false, errMsg: '', users: response.data.items})

          },
          error => {
            console.log('请求失败了', error.message)
            // 请求失败后更新 List 的数据
            this.$bus.$emit('updateListData', {firstView: false, loading: false, errMsg: error.message, users: []})
          }
      ).catch(error => {
        console.log('请求失败了', error.message)
        // 失败，更新状态(失败)
        this.$bus.$emit('updateListData', {firstView: false, loading: false, errMsg: error.message, users: []})
      })

    }
  }
}
</script>

<style scoped>

</style>