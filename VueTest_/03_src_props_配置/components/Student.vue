<template>
  <!-- 组件的结构 -->
  <div>
    <h1>{{ msg }}</h1>
    <h3>学生姓名：{{ name }}</h3>
    <h3>学生性别：{{ sex }}</h3>
    <h3>学生年龄：{{ age + 1 }}</h3>
    <h3>学生年龄：{{ myAge + 1 }}</h3>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'Student',
  data() {
    console.log(this)
    return {
      msg: '一个学生',
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      // this.age = 99
      this.myAge++
    }
  },

  // 简单声明接收
  // props: ['name', 'sex', 'age'],

  // 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // },

  // 接收的同时对数据：进行类型限制 + 默认值的指定 + 必要性的限制
  props: {
    name: {
      type: String, // name 的类型是字符串
      required: true, // name 是必要的
    },
    age: {
      type: Number,
      default: 99 // 默认值
    },
    sex: {
      type: String,
      required: true
    }
  }

}

</script>

<style scoped>
/* 组件的样式 */
</style>