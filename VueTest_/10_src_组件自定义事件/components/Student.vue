<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生性别：{{ sex }}</h3>

    <h3>当前求和为：{{ number }}</h3>
    <button @click="add">点我 number++</button>

    <button @click="sendStudentName">把学生名给 App</button>
    <button @click="unbind">解绑 meta 事件</button>

    <button @click="death">销毁当前 Student 组件的实例(vc)</button>
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
    add() {
      console.log('add 回调被调用了')
      this.number++
    },
    sendStudentName() {
      // 触发 Student 组件实例身上的 meta 事件
      // this.$emit('meta', this.name)

      // 多个参数时
      this.$emit('meta', this.name, 666, 888)

      // 多个自定义事件
      // this.$emit('demo')
      // this.$emit('click')
    },
    unbind() {
      // 解绑一个自定义事件
      this.$off('meta')

      // 解绑多个自定义事件
      // this.$off(['meta', 'demo'])

      // 解绑所有自定义事件
      // this.$off()
    },
    death() {
      // 销毁了当前 Student 组件的实例，销毁后所有 Student 实例的自定义事件全都不奏效。
      this.$destroy()
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