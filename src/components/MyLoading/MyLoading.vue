<template>
	<div class='loading-container' v-if='showLoading'>
		<img src="./loading.gif" class="loading">
		加载中...
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState({
			showLoading: state => state.search.showLoading
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
.loading-container {
	width: 6rem;
	display: flex;
	align-items: center;
	font-size: 0.6rem;
}
.loading {
	margin-right: 3px;
	width: 1rem;
}
</style>