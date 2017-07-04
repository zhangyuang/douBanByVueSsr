const testurl = 'http://127.0.0.1:3000'
const api = {
	queryAll: testurl + '/douban/queryAll', //获取所有数据
	queryByKind: testurl + '/douban/queryByKind?kind=', //根据种类获取
	queryHotEmoji: testurl + '/douban/queryHotEmoji', //获取热搜词
	searchMovie: testurl + '/douban/queryByName?name=', //根据名称模糊搜索电影
}
export default api