<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊~</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestAnimation",
  data() {
    return {
      isShow: true
    }
  }

}
</script>

<style scoped>
h1 {
  background-color: pink;
}

.hello-enter-active {
  animation: stack 0.5s linear;
}

.hello-leave-active {
  animation: stack 0.5s linear reverse;
}

@keyframes stack {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }

}
</style>