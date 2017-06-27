<template>
	<div>
		<movie-header :title='kind'></movie-header>
	</div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import MovieHeader from './MovieHeader'
export default {
	props: ['item'],
	components: {
		MovieHeader
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
<style>

</style>