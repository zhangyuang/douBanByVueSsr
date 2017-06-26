<template>
	<div>
		<h1>zhng {{ age }}</h1>
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
	computed: {
		...mapState({
			movieList: state => state.index.movieList
		})
	},
	data () {
		return {
			age: 1
		}
	},
	mounted () {
		console.log(this.movieList)
	},
	//服务端获取首页数据
	preFetch ({ store, router }) {
		 return store.dispatch('getAllMovie')
	},
	methods: {
		...mapActions([
			'getAllMovie'
		]),
	}
}
</script>
<style>

</style>