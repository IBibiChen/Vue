<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoMain'
  import TodoFooter from './components/TodoFooter'

  import storageUtil from './utils/storageUtil'

  export default {

    mounted () {
      // 发送命令给 action: 异步获取保存 todos 数据并显示
      this.$store.dispatch('reqTodos');
    },

    /*// 监视
    watch: {
      todos:{
        deep:true, // 深度监视
        handler:function (value) {
            // 将 todos 最新的值的 json 数据，保存到 localStorage
          window.localStorage.setItem('todos_key', JSON.stringify(value));
        }
      }
    },*/

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
