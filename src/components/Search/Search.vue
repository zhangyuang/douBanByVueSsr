<template>
	<div class='search-container'>
		<my-input></my-input>
		<hot-emoji></hot-emoji>
		<movie-content :movielist='searchResult'></movie-content>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import MyInput from '../MyInput/MyInput'
import HotEmoji from '../HotEmoji/HotEmoji'
import MovieContent from '../MovieContent/MovieContent'
export default {
	components: {
		MyInput,
		HotEmoji,
		MovieContent
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

</style>