<template>
	<div>
		<h1>zhang {{ age }}</h1>
		<button @click='up'>up</button>
	</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
	computed: {
		...mapGetters([
			'emojiKind'
		])
	},
	data () {
		return {
			age: 1
		}
	},
	mounted () {
		console.log(this.emojiKind)
	},
	//服务端获取首页数据
	asyncData ({ store, router }) {
		 console.log("服务端获取数据")
		 return store.dispatch('getEmojiKind')
	},
	beforeMount () {
		console.log("客户端获取数据")
	},
	methods: {
		...mapActions([
			'getEmojiKind'
		]),
		initial () {
			this.getEmojiKind()
		},
		up () {
			++this.age
		}
	}
}
</script>
<style>

</style>