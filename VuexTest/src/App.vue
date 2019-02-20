<template>
  <div>
    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {

    methods: {
      // 增加
      increment() {
        // 通知 vuex 去增加
        this.$store.dispatch('increment'); // 触发 store 中对应的 action 调用
      },
      // 减少
      decrement() {
        this.$store.dispatch('decrement');
      },
      // 如果是奇数才增加
      incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd');
      },
      // 过 1s 才增加
      incrementAsync() {
        this.$store.dispatch('incrementAsync');
      }
    },

    computed: {
      evenOrOdd() {
        return this.$store.getters.evenOrOdd;
      }
    }
  }
</script>

<style>

</style>
