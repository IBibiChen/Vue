<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷~~~',
      address: '成都'
    }
  },
  mounted() {
    this.$bus.$on('hello', (data) => {
      console.log('我是 School 组件，收到了数据', data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}

</script>

<style scoped>
/* 组件的样式 */
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>