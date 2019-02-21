/*
包含所有基于 state 的 getter 计算属性函数的对象
 */
export default {
  // 总数量
  totalCount (state) {
    return state.todos.length;
  },
  // 完成的数量
  completeCount (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0);
  },

  // 判断是否全部选中
  isAllCheck (state, getters) {
    return getters.totalCount === getters.completeCount && state.todos.length > 0;
  }
}
