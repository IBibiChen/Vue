<template>
  <!-- 组件的结构 -->
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

// 组件交互相关的代码（数据、方法等）
export default {
  name: 'TodoHeader',
  data() {
    return {
      title: ''
    }
  },

  methods: {
    add() {// e.target.value
      // 校验数据
      if (this.title.trim()) {
        // 将用户的输入包装成一个对象
        const todoObj = {id: nanoid(), title: this.title.trim(), done: false}
        // 通知 App 组件去添加一个对象
        this.$emit('addTodo', todoObj)
        // 清空输入
        this.title = ''
      }
    }
  }
}

</script>

<style scoped>
/* 组件的样式 */
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>