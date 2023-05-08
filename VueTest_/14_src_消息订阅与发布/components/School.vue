<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

// 组件交互相关的代码（数据、方法等）
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷~~~',
      address: '成都'
    }
  },
  methods: {
    demo(msgName, data) {
      console.log('有人发布了 hello 消息，hello 消息的回调执行了', msgName, data)
    }
  },
  mounted() {
    // this.$bus.$on('hello', (data) => {
    //   console.log('我是 School 组件，收到了数据', data)
    // })

    // 订阅消息
    // this.pubId = pubsub.subscribe('hello', function (msgName, data) {
    //   console.log(this)
    //   // console.log('有人发布了 hello 消息，hello 消息的回调执行了', msgName, data)
    // })

    // 订阅消息 - 箭头函数时 this 指向组件实例对象
    // this.pubId = pubsub.subscribe('hello', (msgName, data) => {
    //   console.log(this)
    //   // console.log('有人发布了 hello 消息，hello 消息的回调执行了', msgName, data)
    // })

    // 订阅消息
    this.pubId = pubsub.subscribe('hello', this.demo)

  },
  beforeDestroy() {
    // this.$bus.$off('hello')

    // 取消订阅
    pubsub.unsubscribe(this.pubId)

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