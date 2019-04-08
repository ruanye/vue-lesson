##vue项目 
1. vue-cli3.0的安装  
-g global 全局  
````
npm install -g @vue/cli 
或者 
yarn global add @vue/cli
```
2.创建项目
```
  vue ui  可视化界面
  vue create '项目名'  (命名行) 空格是选中 
  baebl router css/less/sass 
  允许 命令行 npm run serve
```
3.路由懒加载
```
 ()=>import('./views/Home.vue')
```
4.创建目录结构 
   -mock 数据(不是必须有)
   -src
     -components 公共组件 
	 -api   放ajax请求 
	 -views 放页面级组件 
	 -util  工具类 
5.查找图标 http://iconfont.cn 
```
首页 列表 个人中心 购物车 返回 
图标地址：//at.alicdn.com/t/font_1112654_5qiba7kka4k.css
```
6.下载axios 
``` 
npm install axios 
```
7.导航 路由 组件 一一对应
路由激活样式的class 
```
router-link-exact-active router-link-active
```
8. 组件引入三部曲 
import 引入 ->components 注册 ->作为标签使用  

9.使用插槽  slot  
10. 使用less、sass、stylus 
npm install less less-loader 
npm install node-sass sass-loader
npm install stylus  stylus-loader 
10.轮播图组件
 npm install vue-awesome-swiper --save
 main.js  粘贴 
 import VueAwesomeSwiper from 'vue-awesome-swiper'
 import 'swiper/dist/css/swiper.css'
 Vue.use(VueAwesomeSwiper)
写banner 组件 
11. 请求的流程 
- api/index.js  写请求的方法
- 组件 home.vue  解构赋值拿到需要的请求方法
- data 定义数据
- creat 调用发送请求的方法
- methods 定义发送请求的方法 并发送请求
12.v-for 的时候尽量有唯一值 用唯一值 不用index
13.路由重定向
redirect  
14.数据过多的时候 需要分页 一页5条数据 最开始请求的是第一页 page 页面参数 
axios.get('/axios?page=1')
15.滚动加载更多 判断到底部
scorllTop+clientHeigt>scrollHeight
methods computed  data 
15.路由传参 
1.params 传参

params路由必须是name  params的时候路径一定要带 动态参数 /:变量 
/:id 表示必须有但是不固定  params
2.query传参
query 路由可以是name或者path  query的时候会有查询参数显示在地址栏
http://localhost:8080/#/detail?id=1
如果提供了 path，params 会被忽略，你需要提供路由的 name 或手写完整的带有参数的 path
router-link标签实现路由跳转 tag可以转换a标签到其他标签
16.第三方插件使用的流程(vuex,vue-router)
1.vue.use使用  2.导出  3.引入  4.挂载 

<!-- 作业 --> 周二交 
添加会员界面  姓名 电话号码 地址
登录页面  用户 密码 
会员列表界面 搜索功能  显示会员信息(可以做个详情页显示会员具体信息) 
积分兑换奖品界面  点兑换奖品之前 要求先选择会员  
会员信息上面 有个按钮 输入积分  


 





   

