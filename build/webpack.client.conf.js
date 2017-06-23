const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = merge(baseConfig, {
	entry: resolve('src/client-entry.js'),
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),
		new VueSSRClientPlugin()
	]
})