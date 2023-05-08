// 求和相关的配置
const countOptions = {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            console.log('actions 中的 jiaOdd 被调用了~')

            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            console.log('actions 中的 jiaWait 被调用了~')

            setTimeout(() => {
                context.commit('JIA', value)
            }, 300)
        },
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations 中的 JIA 被调用了~')
            console.log(state, value)
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations 中的 JIAN 被调用了~')
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

export default countOptions