<template>
	<div id="app">
		<transition name="fade" mode="out-in">
	      <router-view></router-view>
	    </transition>
	    <!-- 用来解决fixed挡住内容 -->
	    <div class="clearfixed"></div>
	    <my-footer></my-footer>
	</div>  
</template>

<script type="text/babel">
import MyFooter from './components/MyFooter/MyFooter'
import './assets/style/common.css'
export default {
	components: {
		MyFooter
	},
	methods: {
		
	}
}
</script>
<style>
#app {
	overflow: hidden;
}
.clearfixed {
	height: 4rem;
}
</style>