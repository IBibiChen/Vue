/*
包含多个对应事件回调函数的对象
包含多个接收组件通知触发 mutation 调用间接更新状态的方法的对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil'

export default {

  // 异步获取 todos 并更新状态
  reqTodos ({commit}) {
    setTimeout(() => {
      // 读取数据
      const todos = storageUtil.readTodos();
      // 提交 mutation
      commit(RECEIVE_TODOS, {todos});
    }, 1000);
  },

  addTodo ({commit}, todo) {
    // 提交对 mutation 的请求
    commit(ADD_TODO, {todo});
  },
  deleteTodo ({commit}, index) {
    // 提交对 mutation 的请求
    commit(DELETE_TODO, {index});
  },

  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check});
  },

  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED);
  }
}
