<template>
	<div class="index-input-container" @click="toSearch">
		<div class="index-frame-container">
			<div class="index-search-container">
				<img src="./searchicon.jpeg" class="index-search-icon">
				搜索
			</div>	
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			
		}
	},
	mounted () {
		
	},
	methods: {
		toSearch () {
			// if (this.)
			console.log(this.$router.path)
			// this.$router.push('/search')
		}
	}
}
</script>
<style scoped>
.index-input-container {
	width: 100%;
	background-color: #1cb326;
	padding: 10px 0;
}
.index-frame-container {
	position: relative;
	background-color: #fff;
	height: 2rem;
	margin: 0 10px;
	border-radius: 0.3rem;
	font-size: 0.7rem;
	color: #1cb326;
}
.index-search-container {
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.index-search-icon {
	width: 1rem;
	height: 1rem;
}
</style>