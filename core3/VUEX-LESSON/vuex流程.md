##vuex 流程
- 下载使用 
1. 下载 npm install vuex
2. 建立状态管理文件夹 src 目录下面创建store store里面建index.js
3. index.js 引入并导出默认的store
注意：第三方库 要使用Vue.use()
4. main.js 引入并挂载到new Vue()实例
- vuex里面的各种参数
1. state 相当于vue组件的data state可以每个组件都使用
取值：
1）this.$store.state 
2）使用辅助函数取值 mapState 映射数据(state)到组件 
computed 里面state的写法 可以写数据可以写对象 写对象的时候可以改名 值要对应箭头函数
2. getters 相当于vue组件的  computed 属性 用来计算state里面的数据 
mapGetters  映射经过getters处理的数据(state里面的数据)到组件
可以写数据和对象 写对象的时候 值可以直接取 
3. mutations acitons 相当于vue组件的methods  只能通过mutations去修改state mutations 只能是同步的  actions 处理异步(ajax) 
vuex({
	data:state,
	computed:getters
	methods:actions,mutations
})
vuex 同步的流程 组件通过 $store.commit('事件名') --> mutations mutations里面定义和提交过来的事件名同名的函数 -->通过函数改变state的值  
commit 传参的问题 只能传一个参数 多个参数用对传递  mapMutions 辅助函数   

异步的时候我们需要使用 actions  
vuex 异步的流程   组件通过$store.dispatch('事件名') --->actions actions 里面定义 dispatch 提交过来的同名事件 参数是对象 我们通过解构赋值来拿到commit  ---> 事件里面 通过 commit('事件名1')
到mutations --->mutations里面定义和提交过来的事件名1同名的函数 --->通过mutations函数改变state的值  
mapActions 辅助函数  放在methods里面

####总结 actions 和mutations 
actions mutations 同步异步都可以使用actions 流程  异步必须通过actions提交到mutations去改变state  actions 里面方法的参数是{commit}  mutations 的参数是state mutations里面的方法名和commit提交的相同  actions的方法名和didpatch提交过来的方法名相同 
##辅助函数使用
跟data(数据相关的) 都放在vue组件的computed属性里面 (mapState,mapGetters)
跟方法相关的  都放在vue组件的methods属性里面  (mapMutations,mapActions)