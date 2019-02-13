<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"
                  :selectAllTodos="selectAllTodos"/>

    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    data() {
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: true},
          {title: 'coding', complete: false}
        ]
      }
    },

    methods: {
      // 添加 todo
      addTodo(todo) {
        this.todos.unshift(todo);
      },
      // 删除
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
      // 删除完成的 todos
      deleteCompleteTodos() {
        this.todos = this.todos.filter(todo => !todo.complete);
      },
      // 全选/全不选
      selectAllTodos(check) {
        this.todos.forEach(todo => todo.complete = check);
      }
    },

    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
