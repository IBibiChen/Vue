<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '成都'
    }
  },
  methods: {
    showName() {
      console.log('showName', this)
      alert(this.name)
    }
  }
}

</script>

<style scoped>
/* 组件的样式 */
.school {
  background-color: gray;
}
</style>