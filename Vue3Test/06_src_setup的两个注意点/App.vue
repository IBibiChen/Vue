<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="Meta">
    <template v-slot:qwe>
      <span>WEB 3</span>
    </template>
    <template v-slot:asd>
      <span>WEB 3</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  components: {Demo},
  setup() {

    function showHelloMsg(value) {
      alert(`你好啊，你触发了 hello 事件，我收到的参数是：${value}`)
    }

    return {showHelloMsg}
  }
}
</script>

<style>

</style>
