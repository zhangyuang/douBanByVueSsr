<template>
	<div class="footer-container">
		<div class="footer-tab-container">
			<img src="./dianying_hl.png" v-if="isMoving" class="footer-img" @click="toMovie">
			<img src="./dianying.png" v-else class="footer-img" @click="toMovie">
			电影
		</div>
		<div class="footer-tab-container">
			<img src="./yuedu_hl.png" v-if="isReading" class="footer-img" @click='toReading'>
			<img src="./yuedu.png" v-else class="footer-img" @click='toReading'>
			文章
		</div>
	</div>
</template>

<script>


export default {
	data () {
		return {
			isMoving: true,
			isReading: false
		}
	},
	mounted () {
		
	},
	methods: {
		toMovie () {
			this.isMoving = true
			this.isReading = false
		},
		toReading () {
			this.isReading = true
			this.isMoving = false
		}
	}
}
</script>
<style scoped>
.footer-container {
	position: fixed;
	bottom: 0;
	display: flex;
	width: 100%;
	background-color: #f7f7fa;
	height: 4rem
}
.footer-tab-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	border-right: 1px solid #eee;
}
.footer-img {
	width: 2rem;
	height: 2rem;
}
</style>