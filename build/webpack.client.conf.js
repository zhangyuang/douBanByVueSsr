const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = merge(baseConfig, {
	entry: {
		app: resolve('src/client-entry.js'),
	},
	plugins: [
		  new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      minChunks: function (module) {
	        // a module is extracted into the vendor chunk if...
	        return (
	          // it's inside node_modules
	          /node_modules/.test(module.context) &&
	          // and not a CSS file (due to extract-text-webpack-plugin limitation)
	          !/\.css$/.test(module.request)
	        )
	      }
	    }),
	   	// 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
	    // 以便可以在之后正确注入异步 chunk。
	    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
	    new webpack.optimize.CommonsChunkPlugin({
	      name: 'manifest'
	    }),
		new VueSSRClientPlugin()
	]
})