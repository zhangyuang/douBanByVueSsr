const testurl = 'http://127.0.0.1:3000'
const api = {
	queryAll: testurl + '/douban/queryAll', //获取所有数据
	queryByKind: testurl + '/douban/queryByKind', //根据种类获取
}
export default api