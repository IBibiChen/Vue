<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addMeta">添加一个 Meta</button>
    <button @click="addPersonServer">随机添加一个</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"]
    },
  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    },
    addMeta() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch('personAbout/addPersonMeta', personObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServer')
      this.name = ''
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>