<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School/>
    <Student/>
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
  }

}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>