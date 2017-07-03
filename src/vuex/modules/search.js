// 首页数据
import types from '../mutation-types'
import api from '../../publicApi'
import axios from 'axios'
// initialstate
const state = {
	HotEmoji: [],
	searchResult: [],
	showLoading: false,
}
// getter
const getters = {
	
}
// actions
const actions = {
	getHotEmoji ({ commit }) {
		return axios.get(api.queryHotEmoji)
			   .then(res => {
			   		commit(types.SEARCH_SET_HOTEMOJI, res.data)
			   })
	},
	searchMovie ({ commit }, name) {
		return axios.get(api.searchMovie + name)
			   .then(res => {
			   		commit(types.SEARCH_SET_SEARCHRESULT, res.data)
			   })
	},
	changeLoading ({ commit }) {
		commit(types.SEARCH_CHANGE_LOADING)
	}
}
// mutations
const mutations = {
    [types.SEARCH_SET_HOTEMOJI] (state, data) {
		state.HotEmoji = data
  	},
  	[types.SEARCH_SET_SEARCHRESULT] (state, data) {
		state.searchResult = data	
  	},
  	[types.SEARCH_CHANGE_LOADING] (state) {
  		state.showLoading = !state.showLoading
  	}
};
const search = {
	state,
	mutations,
	actions,
	getters
}
export default search
