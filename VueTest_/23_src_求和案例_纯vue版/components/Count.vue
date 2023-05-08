<template>
  <div>
    <h1>当前求和为：{{ total }}</h1>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      total: 0,
      number: 1
    }
  },
  methods: {
    increment() {
      this.total = this.total + this.number
    },
    decrement() {
      this.total = this.total - this.number
    },
    incrementOdd() {
      if (this.total % 2 !== 0) {
        this.total = this.total + this.number
      }

    },
    incrementWait() {
      setTimeout(() => {
        this.total = this.total + this.number
      }, 300)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>