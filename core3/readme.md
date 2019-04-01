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


 





   

