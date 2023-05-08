<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3 class="title">学生姓名：{{ name }}</h3>
    <h3 class="qwe">学生性别：{{ sex }}</h3>
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

<style scoped lang="less">
/* 组件的样式 */
.demo {
  background-color: orange;

  .qwe {
    font-size: 30px;
  }
}
</style>