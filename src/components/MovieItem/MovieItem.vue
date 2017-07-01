<template>
	<div class="movie-item-container">
		<img :src="moviedetail.imgUrl" class="movie-item-img">
		<span class="movie-item-name">{{ moviedetail.name }}</span>
		<star :rating="moviedetail.rating"></star>
	</div>
</template>

<script>
import Star from '../Star/Star'

export default {
	props: ['moviedetail'],
	components: {
		Star
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
.movie-item-container {
	margin-left: 1rem;
	display: flex;
	flex-direction: column;
	color: #b2b2b2;
}
.movie-item-img {
	width: 5rem;
	height: 7rem;
}
.movie-item-name {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 0.5rem;
	width: 5rem;
	text-align: center;
}
</style>