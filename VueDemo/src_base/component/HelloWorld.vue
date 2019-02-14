<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default { // 配置对象(与 Vue 一致)
    data () { // 组件中必须写函数
      return {
        msg: 'Hello Vue Component!'
      }
    }
  }
</script>

<style scoped>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>
