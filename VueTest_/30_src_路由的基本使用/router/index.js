// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "@/pages/Home"

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
    ]
})

