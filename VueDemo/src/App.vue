<template>
  <mt-button type="primary" @click.native="handleClick" style="width: 100%;">Test</mt-button>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    methods: {
      handleClick() {
        Toast({
          message: '操作成功',
          iconClass: 'icon icon-success'
        });
      }
    }
  }
</script>

<style scoped>

</style>
