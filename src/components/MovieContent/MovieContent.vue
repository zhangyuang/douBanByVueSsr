<template>
	<div class="movie-content-container">
		<div v-for='(item, index) in movielist'>
			<movie-item :moviedetail='item'></movie-item>
		</div>
	</div>
</template>

<script>
import MovieItem from '../MovieItem/MovieItem'
export default {
	props: ['movielist'],
	components: {
		MovieItem
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
.movie-content-container {
	display: flex;
	overflow-x: scroll;
}
</style>