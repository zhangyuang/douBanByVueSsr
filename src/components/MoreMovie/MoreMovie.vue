<template>
	<div class="more-movie-container">
		<div class="more-movie-head-container">
			<div class="more-movie-head-content">
				<img :src='currentImg' class="more-movie-head-img">
				<span>
					{{ kind }}
				</span>
				<span class="description">
					{{ currentDes }}
				</span>
			</div>
		</div>
		<movie-content :movielist='currentList' class='component-movie-content'></movie-content>
		<my-loading class='component-more-loading'></my-loading>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MovieContent from '../MovieContent/MovieContent'
import MyLoading from '../MyLoading/MyLoading'
import axios from 'axios'
import api from '../../publicApi'
export default {
	computed: {
		...mapState({
			top250: state => state.index.top250,
			willShow: state => state.index.willShow,
			isShow: state => state.index.isShow,
		})
	},
	components: {
		MovieContent,
		MyLoading
	},
	data () {
		return {
			kind: this.$route.query.kind,
			currentList: [],
			currentImg: '',
			currentName: '',
			currentDes: '',
			start: 10,
			count: 10
		}
	},
	mounted () {
		this.kind == '正在热映' ? this.currentList = this.isShow : ''
		this.kind == '即将上映' ? this.currentList = this.willShow : ''
		this.kind == 'top250' ? this.currentList = this.top250 : ''
		this.currentImg  = this.currentList[0].imgUrl
		this.currentName = this.currentList[0].name
		this.currentDes = this.currentList[0].description
		window.onscroll = () => {
			this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight() ? this.loadMore() : ''
		}
	},
	methods: {
		...mapActions([
			'changeLoading'
		]),
		loadMore () {
			let that = this
			let change = () => {
				return new Promise((resolve, reject) => {
					axios.get(api.queryByKind + this.kind + '&start=' + this.start + '&count=' + this.count)
						.then(res => {
							if (res.data.result == []) {
								this.loadMore = () => {}
							}
							else {
								that.currentList = that.currentList.concat(res.data.result)
								that.start = that.start + that.count
								resolve()
							}	
					})
				})
			}
			let start = async () => {
				that.changeLoading()
				await change()
				that.changeLoading()
			}
			start()
		},
		//滚动条在Y轴上的滚动距离  
      	getScrollTop () {
         let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      　　return scrollTop;
      	}, 
      	//文档的总高度 
      	getScrollHeight () {
         let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
      　　if(document.body){
      　　　　bodyScrollHeight = document.body.scrollHeight;
      　　}
      　　if(document.documentElement){
      　　　　documentScrollHeight = document.documentElement.scrollHeight;
      　　}
      　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
      　　return scrollHeight;
      	}, 
       	//浏览器视口的高度 
      	getWindowHeight () {
         let windowHeight = 0;
      　　if(document.compatMode == "CSS1Compat"){
      　　　　windowHeight = document.documentElement.clientHeight;
      　　}else{
      　　　　windowHeight = document.body.clientHeight;
      　　}
      　　return windowHeight;
      	}     
	}
}
</script>
<style scoped>
.more-movie-head-container {
	height: 11rem;
	background: url('./albumbg.png');
	background-size: auto 11rem;
	background-repeat:no-repeat;
	background-position: center;
}
.more-movie-head-content {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.more-movie-head-img {
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	box-shadow: 2px 8px 20px 6px #fae9d5;
}
.description {
	font-size: 0.5rem;
	color: #6b6966;
}
.component-movie-content {
	flex-wrap: wrap;
	overflow: visible;
	margin-top: 1rem;
}
.component-more-loading {
	margin: 0 auto;
}
</style>