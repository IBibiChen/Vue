<template>
  <div class="child">
    <h3>我是 Child 组件</h3>
    <Son/>
  </div>
</template>

<script>
import Son from "@/components/Son"

export default {
  name: 'Child',
  components: {Son}

}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
