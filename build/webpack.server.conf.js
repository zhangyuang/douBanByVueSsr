const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = merge(baseConfig, {
	entry: resolve('src/server-entry.js'),
	target: 'node',
	devtool: 'source-map',
	output: {
		filename: 'vue-ssr-server-bundle.js',
		libraryTarget: 'commonjs2',
	},
	externals: nodeExternals({
		whilelist: /\.css$/
	}),
	plugins: [
		new VueSSRServerPlugin()
	]
})