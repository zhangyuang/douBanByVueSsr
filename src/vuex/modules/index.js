// 首页数据
import types from '../mutation-types'
import api from '../../publicApi'
import axios from 'axios'
// initialstate
const state = {
	top250: [], 
	isShow: [],
	willShow: [],
}
// getter
const getters = {
	
}
// actions
const actions = {
	getTop250 ({ commit }) {
		 return axios.get(api.queryByKind + '?kind=top250')
				.then(res => {
					commit(types.INDEX_SET_TOP250, res.data)
				})
	},
	getIsShow ({ commit }) {
		 return axios.get(api.queryByKind + '?kind=isShow')
				.then(res => {
					commit(types.INDEX_SET_ISSHOW, res.data)
				})
	},
	getWillShow ({ commit }) {
		 return axios.get(api.queryByKind + '?kind=willShow')
				.then(res => {
					commit(types.INDEX_SET_WILLSHOW, res.data)
				})
	},
}
// mutations
const mutations = {
    [types.INDEX_SET_TOP250] (state, data) {
			state.top250 = data.result
  	},
  	[types.INDEX_SET_ISSHOW] (state, data) {
			state.isShow = data.result
  	},	
  	[types.INDEX_SET_WILLSHOW] (state, data) {
			state.willShow = data.result
  	},	
};
const index = {
	state,
	mutations,
	actions,
	getters
}
export default index
