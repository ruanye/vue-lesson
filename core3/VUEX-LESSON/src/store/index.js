import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state'
import getters from './getters'
import mutations from './mututions'
import actions from './actions'

export default new Vuex.Store({
	 strict:true,//严格模式 callee with  
	 state,
     getters,
	 actions,
	 mutations
})