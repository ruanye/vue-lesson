import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
Vue.use(Vuex);
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
let state  ={
	carlist:[] //初始化一个购物车数组
}
// 取出本体存储的购物车数据并且赋值
if(localStorage&&localStorage['carlist']){
  state.carlist = JSON.parse(localStorage['carlist'])
}
export default new Vuex.Store({
   state,
   actions,
   mutations,      
   getters,
   plugins:[logger()]
})