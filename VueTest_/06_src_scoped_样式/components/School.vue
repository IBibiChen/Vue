<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3 class="title">学校名称：{{ name }}</h3>
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
  }
}

</script>

<style scoped>
/* 组件的样式 */
.demo {
  background-color: skyblue;
}
</style>