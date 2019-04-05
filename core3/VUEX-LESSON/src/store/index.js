import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state'
import getters from './getters'
import mutations from './mututions'
import {getUsername}  from  '../api' 
export default new Vuex.Store({
	 state,
     getters,
	 actions:{
		getUserApi({commit}){
          getUsername().then(data=>{
			 let {username} = data
			 commit('muser',username)
		  })
		},
		// commit 提交事件到mutatios
       actionAdd({commit}){//流程2 
		  commit('toMu') //流程3
	   }
	 },
	 mutations
})