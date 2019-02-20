/*
vuex 的核心管理对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 状态对象
const state = {
  count: 0 // 初始化状态
}

// 包含多个更新 state 函数的对象
const mutations = {
  // 增加的 mutation
  INCREMENT(state) {
    state.count++;
  },
  // 减少的 mutation
  DECREMENT(state) {
    state.count--;
  }
}

// 包含多个对应事件回调函数的对象
const actions = {
  // 增加的 action
  increment({commit}) {
    // 提交增加的 mutation
    commit('INCREMENT');
  },

  // 减少的 action
  decrement({commit}) {
    // 提交减少的 mutation
    commit('DECREMENT');
  },

  // 带条件的 action
  incrementIfOdd({commit, state}) {
    // 提交如果是奇数才增加的 mutation
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },

  // 异步的 action
  incrementAsync({commit, state}) {
    // 在 action 中直接就可以执行异步代码
    setTimeout(() => {
      commit('INCREMENT');
    }, 1000);
  }
}

// 包含多个 getter 计算属性函数的对象
const getters = {
  evenOrOdd(state) { // 不需要调用, 只需要读取属性值
    return state.count % 2 === 0 ? '偶数' : '奇数';
  }
}

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新 state 函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个 getter 计算属性函数的对象
})
