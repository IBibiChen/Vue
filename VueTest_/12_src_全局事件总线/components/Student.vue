<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生性别：{{ sex }}</h3>
    <button @click="sendStudentName">把学生名给 School 组件</button>
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
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello', this.name)
    }
  }

}

</script>

<style scoped lang="less">
/* 组件的样式 */
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>