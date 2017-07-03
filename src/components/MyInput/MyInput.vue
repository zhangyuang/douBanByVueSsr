<template>
	<div class="input-container" @click="toSearch">
		<div class="frame-container">
			<div class="search-container" v-if="isIndex">
				<img src="./searchicon.jpeg" class="search-icon">
				搜索
			</div>
			<input type="text" v-model="searchKey">
		</div>	
	</div>
</template>

<script>

export default {
	data () {
		return {
			isIndex: true,
			searchKey: ''
		}
	},
	mounted () {
		this.$route.path == '/search' ? this.isIndex = false : ''
	},
	methods: {
		toSearch () {
			if (this.$route.path != '/search') {
				this.$router.push('/search') 
			}		
		}
	},
	
}
</script>
<style scoped>
.input-container {
	width: 100%;
	background-color: #1cb326;
	padding: 10px 0;
}
.frame-container {
	display: flex;
	align-items: center;
	position: relative;
	background-color: #fff;
	height: 2rem;
	margin: 0 10px;
	border-radius: 0.3rem;
	font-size: 0.7rem;
	color: #1cb326;
}
.search-container {
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.search-icon {
	width: 1rem;
	height: 1rem;
}
input {
	float: left;
	padding-left: 1rem;
	width: 100%;
	height: 2rem;
	outline: medium;
    border: none;
}
</style>