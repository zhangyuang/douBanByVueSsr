<template>
	<div class="movie-container">
		<movie-header :title='kind'></movie-header>
		<movie-content :movielist='item'></movie-content>
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import MovieHeader from '../MovieHeader/MovieHeader'
import MovieContent from '../MovieContent/MovieContent'
export default {
	props: ['item'],
	components: {
		MovieHeader,
		MovieContent
	},
	data () {
		return {
			kind: ''
		}
	},
	mounted () {
		this.kind = this.item[0].kind
	},
	methods: {
		
	}
}
</script>
<style scoped>
.movie-container {
	background-color: #fff;
	margin-bottom: 0.5rem;
}
</style>