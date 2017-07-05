const testurl = 'http://127.0.0.1:3000'
const formalUrl = 'http://119.29.76.240:3000'
const api = {
	queryAll: formalUrl + '/douban/queryAll', //获取所有数据
	queryByKind: formalUrl + '/douban/queryByKind?kind=', //根据种类获取
	queryHotEmoji: formalUrl + '/douban/queryHotEmoji', //获取热搜词
	searchMovie: formalUrl + '/douban/queryByName?name=', //根据名称模糊搜索电影
}
export default api