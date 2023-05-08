<template>
  <h3>我是 App 组件</h3>
</template>

<script>
import {ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy} from "vue"

export default {
  name: 'App',
  setup() {
    let sum = ref(0)
    let car = reactive({name: '奔驰', price: '30 W'})
    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(sum))

    return {...toRefs(car)}
  }

}
</script>

<style>

</style>
