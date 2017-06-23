const rooturl = 'http://emoji.uc.cn/'; 
const public_params = '?uc_param_str=dsdnfrpfbivesscpgimibtbmnisieijblauputogpintnwpr';
const api = {
	getPageData4HotEmoji: rooturl + 'getPageData4HotEmoji' + public_params, //首页获取热门emoji
	loadEmojiForNotUcNewsApp: rooturl + 'loadEmojiForNotUcNewsApp' + public_params, //点击emoji后下拉加载更多emoji
	searchEmoji: rooturl + 'search/emoticon' + public_params, //搜索emoji
	getPageData4Albums: rooturl + 'getPageData4Albums' + public_params, // 获取emoji分类
}
export default api 