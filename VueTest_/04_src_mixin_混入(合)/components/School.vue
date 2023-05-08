<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h3 @click="showName">学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
// 引入一个混合
// import {mixin, hunhe} from '@/mixin'

// 组件交互相关的代码（数据、方法等）
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '成都',
      x: 666
    }
  },
  // mixins: [mixin, hunhe],
  mounted() {
    console.log('你好啊！！！')
  }
}

</script>

<style scoped>
/* 组件的样式 */
.school {
  /*background-color: gray;*/
}
</style>