// 首页数据
import types from '../mutation-types';
import api from '../../../public/api';
import axios from 'axios'
// initialstate
const state = {
	emojiKind: [], //首页表情上方分类数据
}
// getter
const getters = {
	emojiKind: state => state.emojiKind
}
// actions
const actions = {
	getEmojiKind ({ commit }) {
		console.log("action")
		return axios.get(api.getPageData4Albums)
				.then(res => {
					commit(types.INDEX_SET_EMOJIKIND, res.data);
				})
	}
}
// mutations
const mutations = {
    	[types.INDEX_SET_EMOJIKIND] (state, data) {
			state.emojiKind = data.albums;
  	},	
};
const index = {
	state,
	mutations,
	actions,
	getters
}
export default index
