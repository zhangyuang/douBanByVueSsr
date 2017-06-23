const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
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
	    // extract webpack runtime & manifest to avoid vendor chunk hash changing
	    // on every build.
	    new webpack.optimize.CommonsChunkPlugin({
	      name: 'manifest'
	    }),
		new VueSSRClientPlugin()
	]
})