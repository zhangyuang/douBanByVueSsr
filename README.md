# 基于最新的vue2.3的ssr(服务端渲染)搭建的仿豆瓣项目
前后端通过JSON进行通信，后台restful api采用node + express框架。[项目地址](https://github.com/zhangyuang/MyDouBanApi)
<br>
关于为什么要使用首页服务端渲染。主要的优点有以下两点
<br>
1、在渲染首页数据时不需要客户端发起ajax请求数据然后将数据插入到页面，而是直接在服务端完成请求数据的逻辑，直接返回插入好数据的html给客户端渲染
<br>
加快首屏渲染速度
<br>
2、便于SEO，如果是单页面应用不使用服务端渲染的话在页面结构看到的只是空荡荡的div #app
<br>
关于ssr的官方文档请查看[这里](https://ssr.vuejs.org/zh/)
<br>
想查看尤老师的官方demo请查看[这里](https://github.com/vuejs/vue-hackernews-2.0/)
<br>
由于文档和demo的写法不是完全一样，我这里在吸收了两者后，根据自己的理解开发了这个项目的架构，
<br>
可能有些代码和demo的介绍不一样但没有本质区别。简化了部分代码
<br>
代码缩进风格和项目架构均使用当前最标准的架构体现模块化开发的思想
###  觉得好的话麻烦给个star欢迎fork🤔
```
git clone git@github.com:zhangyuang/doubanbyvuessr.git

npm install

npm run build 请先build不然无法启动回报xxx.json找不到的错误

npm run dev 在开发模式下启动

npm run build

npm run start-prod 在生产模式下启动
```
开发模式具有热重载以及source map功能
<br>
生产模式具有将css文件提取为一个单独的css功能以及砍掉一些设置实现性能最大化
### 注：由于flex-wrap无法在ios7.X版本以及某些国产android使用故本项目在需要使用flex-wrap时都使用float代替
### 本项目较多处有使用promise以及async await不熟悉的朋友请先查看这两种新特性的教程
# 目标功能
- [x] 服务端使用node流式渲染提升性能 -- 完成
- [x] 使用code spliting 尽可能优化性能 -- 完成
- [x] 使用flex + rem实现多移动端自适应 -- 完成
- [x] 首页查看3种分类的电影功能 -- 完成
- [x] 查看更多电影功能 -- 开发中
- [x] 模糊搜索电影功能 -- 完成
- [x] 热搜词功能 -- 完成
- [ ] 查看电影详情功能 -- 开发中
- [ ] 收藏电影功能 -- 开发中
- [ ] 查看文章列表功能 -- 开发中
- [ ] 文章详情功能 -- 开发中

# 功能展示
### 搜索电影功能(支持模糊搜索)
<img src='https://github.com/zhangyuang/doubanbyvuessr/blob/master/src/assets/search.gif'>

### 查看更多电影功能
<img src='https://github.com/zhangyuang/doubanbyvuessr/blob/master/src/assets/more.gif'>

### 自适应功能
<img src='https://github.com/zhangyuang/doubanbyvuessr/blob/master/src/assets/jianrong.gif'>