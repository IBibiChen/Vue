<template>
  <div class="container">

    <Category title="游戏">
      <template scope="obj">
        <ul>
          <li v-for="(item, index) in obj.games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">
          {{ item }}
        </h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from "@/components/Category"

export default {
  name: "App",
  components: {Category},
  data() {
    return {}
  }
}
</script>

<style>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>