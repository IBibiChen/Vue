<template>
  <!-- 组件的结构 -->
  <div>
    <h3>学生名称：{{ name }}</h3>
    <h3>学生年龄：{{ age }}</h3>
    <button @click="showName">点我提示</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      age: 18
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
</style>