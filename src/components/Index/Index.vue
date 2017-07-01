<template>
	<div class="index-container">
		<index-input></index-input>
		<movie :item='isShow'></movie>
		<movie :item='willShow'></movie>
		<movie :item='top250'></movie>
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import Movie from '../Movie/Movie'
import IndexInput from '../IndexInput/IndexInput'
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
		IndexInput
	},
	data () {
		return {
			
		}
	},
	//服务端获取首页数据
	preFetch ({ store, router }) {
		 return store.dispatch('getTop250'), store.dispatch('getWillShow'), store.dispatch('getIsShow')
	},
	mounted () {
		
	},
	methods: {
		...mapActions([
			
		]),
		
	}
}
</script>
<style scoped>
.index-container {
	display: flex;
	flex-direction: column;
}
</style>