// 该文件用于创建 Vuex 中最核心的 store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 应用 Vuex 插件
Vue.use(Vuex)

// 准备 actions —— 用于响应组件中的动作
const actions = {
    jia(context, value) {
        console.log('actions 中的 jia 被调用了~')
        console.log(context, value)
        context.commit('JIA', value)
    },
    jian(context, value) {
        console.log('actions 中的 jian 被调用了~')
        console.log(context, value)
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        console.log('actions 中的 jiaOdd 被调用了~')
        console.log('处理了一些事情 —— jiaOdd')

        context.dispatch('demo1', value)

        // if (context.state.sum % 2) {
        //     context.commit('JIA', value)
        // }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 300)
    },

    demo1(context, value) {
        console.log('actions 中的 demo1 被调用了~')
        console.log('处理了一些事情 —— demo1')

        context.dispatch('demo2', value)
    },
    demo2(context, value) {
        console.log('actions 中的 demo2 被调用了~')
        console.log('处理了一些事情 —— demo2')

        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
}

// 准备 mutations —— 用于操作数据（state）
const mutations = {
    JIA(state, value) {
        console.log('mutations 中的 JIA 被调用了~')
        console.log(state, value)
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations 中的 JIAN 被调用了~')
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('mutations 中的 ADD_PERSON 被调用了~')
        state.personList.unshift(value)
    },
}

// 准备 state —— 用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    personList: [
        {id: '001', name: '张三'}
    ]
}

// 准备 getters —— 用于将 state 中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})