<template>
  <div>
    <button @click="isShow = true">点我弹个窗</button>
    <teleport to="body">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h5>一些内容</h5>
          <h5>一些内容</h5>
          <h5>一些内容</h5>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>

import {ref} from "vue"

export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false)


    return {isShow}
  }

}
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
}


.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: green;
}
</style>
