<template>
  <!-- 组件的结构 -->
  <ul class="todo-main">
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeIn"
        leave-active-class="animate__fadeOutRightBig"
    >
      <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
      />
    </transition-group>
  </ul>
</template>

<script>
import 'animate.css'

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

/* 动画 */
.todo-enter-active {
  animation: stack 0.5s linear;
}

.todo-leave-active {
  animation: stack 0.5s linear reverse;
}

@keyframes stack {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }

}
</style>