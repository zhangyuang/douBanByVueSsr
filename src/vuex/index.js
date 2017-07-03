import Vue from 'vue'
import Vuex from 'vuex'
//modules
import index from './modules/index'
import search from './modules/search'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export function createStore () {
	return new Vuex.Store({
		modules: {
			index: index, //首页数据
			search: search, //搜索页数据
		},
		strict: debug
	})
}
