const { defineConfig } = require('@vue/cli-service')
const title = 'hello-world'
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    name: title
  },
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://10.242.31.38:10280/uniflowApi/',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false
})
