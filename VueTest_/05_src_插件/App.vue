<template>
  <div>
    <School/>
    <hr>
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
      msg: '欢迎学习 Vue'
    }
  }

}
</script>

<style scoped>

</style>