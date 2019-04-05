import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state'
import getters from './getters'
import mutations from './mututions'
export default new Vuex.Store({
	 state,
     getters,
	 actions:{
		// commit 提交事件到mutatios
       actionAdd({commit}){//流程2 
		  commit('toMu') //流程3
	   }
	 },
	 mutations
})