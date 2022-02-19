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
        target: '',
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
