const path = require('path');
module.exports = {
	devServer: {
		host: 'localhost',
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://mall-pre.springboot.cn',
				changeOrigin: true,
				pathRewrite: {
					'/api': '',
				},
			},
		},
	},
	publicPath:
		process.env.NODE_ENV === 'production'
			? '/pingMall/' // 必须与GitHub仓库名一致
			: '/',
	transpileDependencies: [],
	// 确保静态资源正确处理
	chainWebpack: (config) => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap((options) => {
				options.fallback.options.publicPath =
					process.env.NODE_ENV === 'production' ? '/pingMall/' : '/'
				return options
			})
	
	},
	productionSourceMap: true,
    css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), // 确保这里使用的是 sass (dart-sass)
         // 这里有两种写法，选择一种即可
        // 写法一：注入全局变量，适合配置变量（推荐）
        additionalData: `
          @use "sass:math";
          @use "sass:color";
        `,
        // 写法二：为 Sass/Scss 添加共享目录
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src')]
        }
      }
    }
  }
}
