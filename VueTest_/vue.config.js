const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 关闭语法检查
    lintOnSave: false,
    // 开启代理服务器（方式一）
    /*devServer: {
        proxy: 'http://localhost:5000'
    },*/

    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/api': ''},
                // ws: true, // 用于支持 WebSocket
                // changeOrigin: true // 用于控制请求头中的 host 值
            },
            '/car': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/car': ''},
                // ws: true, // 用于支持 WebSocket
                // changeOrigin: true // 用于控制请求头中的 host 值
            }
        }
    },

    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
})
