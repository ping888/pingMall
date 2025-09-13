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
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/pingMall/'  // 必须与GitHub仓库名一致
    : '/',
  transpileDependencies: true,
  
  // 确保静态资源正确处理
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.fallback.options.publicPath = process.env.NODE_ENV === 'production' 
          ? '/pingMall/' 
          : '/'
        return options
      })
  },
  // publicPath:'/app',
//   publicPath: process.env.NODE_ENV === 'production' ? './' : '/', 
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
//   chainWebpack:(config)=>{
//     config.plugins.delete('prefetch');
//   }
}