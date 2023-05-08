<template>
  <!-- 组件的结构 -->
  <ul class="todo-main">
    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
    />
  </ul>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
import TodoItem from "./TodoItem"

export default {
  name: 'TodoList',
  // 声明接收对象
  props: ['todos'],
  components: {TodoItem}
}

</script>

<style scoped>
/* 组件的样式 */
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>