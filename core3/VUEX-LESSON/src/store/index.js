import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state'
import getters from './getters'
export default new Vuex.Store({
	state,
  getters,
	mutations:{
		 //this.$store.commit('addcount')
		addcount(state,payload){
      state.count =payload.a+payload.b
		},
		minus(state,payload){
		
      state.count+=payload
		}
	},
	actions:{

	}
})