<template>
	<div class="index-container">
		<my-input></my-input>
		<movie :item='isShow'></movie>
		<movie :item='willShow' ></movie>
		<movie :item='top250'></movie>
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import Movie from '../Movie/Movie'
import MyInput from '../MyInput/MyInput'
export default {
	computed: {
		...mapState({
			top250: state => state.index.top250,
			willShow: state => state.index.willShow,
			isShow: state => state.index.isShow,
		})
	},
	components: {
		Movie,
		MyInput
	},
	data () {
		return {
			
		}
	},
	//服务端获取首页数据
	preFetch ({ store, router }) {
		 return Promise.all([
		 	store.dispatch('getTop250'), 
		 	store.dispatch('getWillShow'), 
		 	store.dispatch('getIsShow'), 
		 	store.dispatch('getHotEmoji'),
		 ])
	},
	mounted () {
		
	},
	methods: {
		...mapActions([
			
		]),
	},
}
</script>
<style scoped>
.index-container {
	display: flex;
	flex-direction: column;
}
</style>