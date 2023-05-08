<template>
  <!-- 组件的结构 -->
  <div class="todo-footer" v-show="total">
    <label>
      <!--<input type="checkbox" :checked="isAllCheck" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成 {{ doneTotal }}</span> / 全部 {{ total }}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: 'TodoFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  data() {
    return {}
  },
  computed: {
    total() {
      return this.todos.length
    },

    doneTotal() {
      // const list = this.todos.filter((todo) => {
      //   return todo.done === true
      // })
      // return list.length

      // let result = 0
      // const {todos} = this
      // for (let i in todos) {
      //   if (todos[i].done) {
      //     result++
      //   }
      // }
      // return result

      return this.todos.reduce((preTotal, todo) => preTotal + (todo.done ? 1 : 0), 0)
    },

    isAllCheck: {
      get() {
        return this.doneTotal === this.todos.length && this.todos.length > 0
      },

      set(value) { // value 是当前 checkbox 最新的值
        this.checkAllTodo(value)
      }
    }
  },
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked)
    },

    clearAll() {
      this.clearAllTodo()
    }
  }
}

</script>

<style scoped>
/* 组件的样式 */
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>