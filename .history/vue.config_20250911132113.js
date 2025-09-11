module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },

  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}