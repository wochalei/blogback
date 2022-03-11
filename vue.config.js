module.exports = {
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        },
        open: true,
        port: 3301,
      proxy:{
        /* 匹配到url请求/api就找这个 就可以跨域了 */
        '/api':{
          target:' http://localhost:8000/',
          changeOrigin: true, //是否跨域
          pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
            '^/api': "/api" 
        }
        }
      }
    }
}