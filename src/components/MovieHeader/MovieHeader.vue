<template>
	<div class="movie-header-container">
		<div class="header-title">{{ title }}</div>
		<div class="header-more" @click='toMore'>更多 ></div>
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
	props: ['title'],
	data () {
		return {
			
		}
	},
	mounted () {
		
	},
	methods: {
		toMore (kind) {
			this.$router.push({ path: '/more', query: { kind: this.title}})
		}	
	}
}
</script>
<style scoped>
.movie-header-container {
	padding: 10px 0;
}
.movie-header-container:after {
	content: '';
	height: 0;
	display: block;
	clear: both;
}
.header-title {
	border-left: 0.1875rem solid #1cb326;
	padding-left: 0.625rem;
	float: left;
	vertical-align: middle;
}
.header-more {
	font-size: 0.8rem;
	color: #1cb326;
	float: right;
	margin-right: 20px;
	vertical-align: middle;
}
</style>