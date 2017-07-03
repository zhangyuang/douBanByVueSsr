<template>
	<div class="star-container">
		<div v-for='(item, index) in this.getStar(rating)'>
			<img src="./star.png" v-if='item' class="star-img">
			<img src="./none-star.png" v-else class="star-img">
		</div>
		<div class="star-rating">{{ rating }}</div>
	</div>
</template>

<script>


export default {
	props: ['rating'],
	data () {
		return {
			
		}
	},
	mounted () {
		
	},
	methods: {
		getStar (rating) {
			let star = []
			let score = rating / 2
			for (let i = 0; i < 5; i++) {
				if (i < score) star.push(1)
				else star.push(0)
			}
			return star
		}
	}
}
</script>
<style scoped>
.star-container {
	display: flex;
	font-size: 0.5rem;
}
.star-img {
	width: 0.7rem;
}
.star-rating {
	margin-left: 7px;
}
</style>