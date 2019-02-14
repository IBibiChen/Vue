<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 组件间通信 -->
      <!-- 方式一：用 props -->
      <!--<TodoHeader :addTodo="addTodo"/>-->

      <!-- 方式二：自定义事件 -->
      <!-- 给 TodoHeader 标签对象绑定 addTodo 事件监听，事件名为 @ 符号后面的字符串 -->
      <TodoHeader @addTodo="addTodo"/>

      <!-- 方式三：pubsub -->
      <!--<TodoList :todos="todos" :deleteTodo="deleteTodo"/>-->
      <TodoList :todos="todos"/>

      <!-- slot -->
      <!--<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>-->
      <TodoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<!--
  绑定事件监听 --- 订阅消息
  触发事件     --- 发布消息
-->
<script>
  import PubSub from 'pubsub-js'

  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import storageUtil from './util/storageUtil'

  export default {
    data() {
      return {
        // todos: [
        //   {title: '吃饭', complete: false},
        //   {title: '睡觉', complete: true},
        //   {title: 'coding', complete: false}
        // ]
        // 从 localStorage 读取 todos
        // todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
        todos: storageUtil.readTodos()
      }
    },

    computed: {
      completeSize() {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0);
      },

      isAllCheck: {
        get() {
          return this.completeSize === this.todos.length && this.todos.length > 0;
        },

        set(value) { // value 是当前 checkbox 最新的值
          this.selectAllTodos(value);
        }
      }
    },

    mounted() { // 执行异步代码
      // 组件间通信方式三 pubsub
      // 订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index);
      })
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
    // 监视
    watch: {
      todos: {
        deep: true, // 深度监视
        /*handler: function (value) {
          // 将 todos 最新的值的 json 数据，保存到 localStorage
          // window.localStorage.setItem('todos_key', JSON.stringify(value));
          storageUtil.saveTodos(value);
        }*/
        handler: storageUtil.saveTodos,
        /*handler: function (todos) {
          window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
        }*/
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
