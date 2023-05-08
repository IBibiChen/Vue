<template>
  <!-- 组件的结构 -->
  <div>
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生性别：{{ sex }}</h3>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'Student',
  data() {
    console.log(this)
    return {
      name: '张三',
      sex: '男'
    }
  }

}

</script>

<style scoped>
/* 组件的样式 */
</style>