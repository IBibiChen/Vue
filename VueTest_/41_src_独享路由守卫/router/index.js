// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "@/pages/Home"
import News from "@/pages/News"
import Message from "@/pages/Message"
import Detail from "@/pages/Detail"

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'Meta',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'Stack',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'Java',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    beforeEnter(to, from, next) {
                        console.log('独享路由守卫')
                        // 判断是否需要鉴权
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'Meta') {
                                next()
                            } else {
                                alert('无权访问~')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'MySQL',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'Redis',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},

                            // props 的第一种写法，值为对象，该对象中的所有 key-value 都会以 props 的形式传给 Detail 组件。
                            // props: {a: 1, b: 'hello'}

                            // props 的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 的形式传给 Detail 组件。
                            // props: true

                            // props 的第三种写法，值为函数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    a: 1,
                                    b: 'hello'
                                }
                            }
                        }
                    ]
                },
            ]
        },
    ]
})

// 全局前置路由守卫 —— 初始化的时候被调用、每次路由切换之前被调用
/*router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)

    // if (to.path === '/home/news' || to.name === 'MySQL') {
    //     if (localStorage.getItem('school') === 'Meta') {
    //         next()
    //     } else {
    //         alert('无权访问~')
    //     }
    // } else {
    //     next()
    // }

    // 判断是否需要鉴权
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'Meta') {
            next()
        } else {
            alert('无权访问~')
        }
    } else {
        next()
    }
})*/

// 全局后置路由守卫 —— 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'Meta'
})

export default router