<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import {ref, customRef} from "vue"

export default {
  name: 'App',

  setup() {

    // 使用 Vue 提供的 ref
    // let keyWord = ref('hello')

    // 自定义 ref —— myRef
    function myRef(value, delay) {
      console.log('--- myRef ---', value)
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从 myRef 这个容器中读取数据了，我把 ${value} 给他了`)
            track() // 通知 Vue 追踪 value 的变化(提前和 get 商量一下，让它认为这个 value 是有用的)
            return value
          },
          set(newValue) {
            console.log(`有人把 myRef 这个容器中数据改为了 ${newValue}`)
            value = newValue
            clearTimeout(timer)
            timer = setTimeout(() => {
              trigger() // 通知 Vue 去重新解析模板
            }, delay)
          }
        }
      })
    }

    // 使用程序员自定义的 ref
    let keyWord = myRef('hello', 500)

    return {keyWord}
  }

}
</script>

<style>

</style>
