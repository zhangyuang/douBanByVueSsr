<template>
	<div class='search-container'>
		<my-input></my-input>
		<hot-emoji></hot-emoji>
		<my-loading class='component-search-loading'></my-loading>
		<movie-content :movielist='searchResult'></movie-content>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import MyInput from '../MyInput/MyInput'
import MyLoading from '../MyLoading/MyLoading'
import HotEmoji from '../HotEmoji/HotEmoji'
import MovieContent from '../MovieContent/MovieContent'
export default {
	components: {
		MyInput,
		HotEmoji,
		MovieContent,
		MyLoading
	},
	computed: {
		...mapState({
			searchResult: state => state.search.searchResult
		})
	},
	data () {
		return {
			
		}
	},
	mounted () {
		
	},
	methods: {
		
	}
}
</script>
<style scoped>
.component-search-loading {
	position: fixed;
	left: 50%;
	top: 50%;
}
</style>