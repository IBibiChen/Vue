<template>
  <div class="app">
    <h1>{{ msg }}，{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用 @ 或 v-on） -->
    <!--<Student v-on:meta="getStudentName"/>-->
    <!--<Student @meta="getStudentName" @demo="m1"/>-->
    <!--<Student @meta.once="getStudentName"/>-->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用 ref） -->
    <Student ref="student" @click.native="show"/>

  </div>
</template>

<script>
// 引入组件
import School from "./components/School"
import Student from "./components/Student"

export default {
  name: "App",
  components: {
    School,
    Student
  },
  data() {
    return {
      msg: '欢迎学习 Vue',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App 收到了学校名：', name)
    },
    // getStudentName(name) {
    //   console.log('App 收到了学生名：', name)
    // }
    // 多个参数时
    getStudentName(name, ...params) {
      console.log('App 收到了学生名：', name, params)
      this.studentName = name
    },

    m1() {
      console.log('m1 被触发了~')
    },
    show() {
      alert(123)
    }
  },
  mounted() {
    // console.log(this.$refs.student.name)

    // 绑定自定义事件 - 推荐写法
    this.$refs.student.$on('meta', this.getStudentName)

    // 箭头函数
    // this.$refs.student.$on('meta', (name, ...params) => {
    //   console.log('App 收到了学生名：', name, params)
    //   this.studentName = name
    // })

    // 绑定自定义事件（一次性）
    // this.$refs.student.$once('meta', this.getStudentName)

    // setTimeout(() => {
    //   this.$refs.student.$on('meta', this.getStudentName)
    // }, 3000)

  }

}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>