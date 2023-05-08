<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">

        <TodoHeader @addTodo="addTodo"/>

        <TodoList
            :todos="todos"
        />

        <TodoFooter
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearAllTodo="clearAllTodo"
        />

      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

// 引入组件
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import TodoFooter from "./components/TodoFooter"

export default {
  name: "App",
  components: {
    TodoHeader, TodoList, TodoFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },

  methods: {
    // 添加一个
    addTodo(todoObj) {
      console.log('我是 App 组件，我收到了数据：', todoObj)
      this.todos.unshift(todoObj)
    },
    // 勾选 or 取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    // 删除 “_”用于多个参数不使用时占位
    deleteTodo(_, id) {
      // this.todos = this.todos.filter((todo) => {
      //   return todo.id !== id
      // })

      // 简写
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    // 全选 or 取消全选
    checkAllTodo(done) {
      this.todos.forEach(todo => todo.done = done)
    },
    // 清除所有已完成
    clearAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
    // 修改
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title
        }
      })
    }
  },
  watch: {
    todos: {
      // 开启深度监视
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },

  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    // this.$bus.$on('deleteTodo', this.deleteTodo)

    this.$bus.$on('updateTodo', this.updateTodo)

    // 订阅消息
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)

  },

  beforeDestroy() {
    this.$bus.$off('checkTodo')
    // this.$bus.$off('deleteTodo')

    this.$bus.$off('updateTodo')

    pubsub.unsubscribe(this.pubId)
  }

}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: #4573d5;
  border: 1px solid #214ebf;
  margin-right: 5px;
}

.btn:focus {
  outline: none;
}

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