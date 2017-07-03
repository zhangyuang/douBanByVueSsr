<template> 
	<div class="emoji-container">
		<ul>
			<li v-for="(item, index) in HotEmoji" :class="'li-' + index" @click='search(item.word)'>
				<img src="./fire.png" v-if='item.hot' class="hot-img">
				{{ item.word }}
			</li>
		</ul>
	</div>
</template>

<script type="text/babel">
import { mapState, mapActions } from 'vuex'

export default {
	computed: {
		...mapState({
			HotEmoji: state => state.search.HotEmoji
		}),
	},
    data () {
      return {
      
      }
    },
    mounted () { 
  	
    },
    methods: {
    	...mapActions([
		  	'searchMovie'
    	]),
    	search (name) {
			this.searchMovie(name)
    	}
  	}
  }
</script>
<style>
.emoji-container:after {
	content: '';
	height: 0;
	display: block;
	clear: both;
	margin-bottom: 1rem;
}
.emoji-container ul:after {
	content: '';
	height: 0;
	display: block;
	clear: both;
}
.emoji-container li {
	float: left;
	border-radius: 1.5rem;
	padding: 0.3rem 0.5rem;
	font-size: 1rem;
	margin: 0.5625rem 0 0 0.6875rem;
	background-color: #fff;
}
.hot-img {
	width: 0.8rem;
}
.li-0 {
	border: 1px solid #f1ddf9;
	color: #f1ddf9;
}
.li-1 {
	border: 1px solid #60b7be;
	color: #60b7be;
}
.li-2 {
	border: 1px solid #eca4b0;
	color: #eca4b0;
}
.li-3 {
	border: 1px solid #7adfb7;
	color: #7adfb7;
}
.li-4 {
	border: 1px solid #f6a127;
	color: #f6a127;
}
.li-5 {
	border: 1px solid #8ac5fe;
	color: #8ac5fe;
}
.li-6 {
	border: 1px solid #f1ddf9;
	color: #f1ddf9;
}
.li-7 {
	border: 1px solid #60b7be;
	color: #60b7be;
}
.li-8 {
	border: 1px solid #7adfb7;
	color: #7adfb7;
}
.li-9 {
	border: 1px solid #f6a127;
	color: #f6a127;
}
.li-10 {
	border: 1px solid #8ac5fe;
	color: #8ac5fe;
}
</style>