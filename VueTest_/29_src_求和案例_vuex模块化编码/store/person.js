// 人员管理相关的配置

import axios from "axios"
import {nanoid} from "nanoid"

export default {
    namespaced: true,
    actions: {
        addPersonMeta(context, value) {
            console.log('actions 中的 addPersonMeta 被调用了~')
            if (value.name.indexOf('Meta') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的必须是 Meta')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations 中的 ADD_PERSON 被调用了~')
            state.personList.unshift(value)
        },
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
