<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Count from "@/components/Count"

export default {
  name: "App",
  components: {Count},
  data() {
    return {}
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>

</style>