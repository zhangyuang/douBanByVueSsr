// 首页数据
import types from '../mutation-types'
import api from '../../publicApi'
import axios from 'axios'
// initialstate
const state = {
	movieList: [], //电影数据
}
// getter
const getters = {
	movieList: state => state.movieList
}
// actions
const actions = {
	getAllMovie ({ commit }) {
		 return axios.get(api.queryAll)
				.then(res => {
					commit(types.INDEX_SET_MOVIELIST, res.data)
				})
	}
}
// mutations
const mutations = {
    	[types.INDEX_SET_MOVIELIST] (state, data) {
			state.movieList = data
  	},	
};
const index = {
	state,
	mutations,
	actions,
	getters
}
export default index
