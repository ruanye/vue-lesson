import * as Types from './mutations-types'
import Vue from 'vue'
const mutations ={
	// 商品数量增加事件
	addC(state,params){
     // 增加传递过来的商品数量
	  let good = state.carlist.find(item=>item.id==params.id)
	   good.count++
	   //手动更新vuex 里面carlist
	   state.carlist = [...state.carlist]
	},
	//atcions流程4 全选事件
	changCheck(state,val){
      //actions 流程5 改变state的数据
	  //[name:'',id:'',sele: true,name:'',id:'',sele: false]
	   state.carlist.forEach(checkbox => {
		  checkbox.sele = val
	  });
	},
	// 全选事件 
	changeAll(state,val){
     // 修改state.carlist 下面每一项的是否选中（就是我们自定义的sele)  
	  state.carlist.forEach(checkbox => {
		  checkbox.sele = val
	  });
	},
	// 添加到购物车的事件
   [Types.ADD_CAR](state,payload){
	   
	  // 如果购物车存在此商品  数量加1 如果没有数量等于1 
	   let good  = state.carlist.find(item=>payload.id == item.id)
	  //是否选中 应该是一个双向绑定的值 vue自定义属性
	  if(!good){
		 Vue.set(payload,'sele',true)
		 payload.count =1;
         //必须手动更新
	     state.carlist = [...state.carlist,payload]
	   }else{
		  Vue.set(good,'sele',true)
          good.count++
		  state.carlist =[...state.carlist]
	  }
	 // 利用本地缓存来存储添加到购物车的数据
	 if(localStorage){
           localStorage['carlist'] = JSON.stringify(state.carlist )
	  }
	}
}
export default mutations

