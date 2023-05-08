<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊~</h1>
    </transition>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊~</h1>
      <h1 v-show="!isShow" key="2">transition-group 里面才能使用多个元素~</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TestTransition",
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
  /*transition: 0.5s linear;*/
}

/* 进入的起点、离开的终点 */
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}

/* 进入的过程中、离开的过程中 */
.hello-enter-active, .hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点、离开的起点 */
.hello-enter-to, .hello-leave {
  transform: translateX(0);
}

/*!* 进入的起点 *!
.hello-enter {
  transform: translateX(-100%);
}

!* 进入的终点 *!
.hello-enter-to {
  transform: translateX(0);
}

!* 离开的起点 *!
.hello-leave {
  transform: translateX(0);
}

!* 离开的终点 *!
.hello-leave-to {
  transform: translateX(-100%);
}*/

</style>