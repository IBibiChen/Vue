<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://v2.cn.vuejs.org/images/logo.svg" alt="">
      <a class="foot" slot="footer" href="https://www.youtube.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.youtube.com">单机游戏</a>
        <a href="https://www.youtube.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>

      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.youtube.com">经典</a>
          <a href="https://www.youtube.com">热门</a>
          <a href="https://www.youtube.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
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
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
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