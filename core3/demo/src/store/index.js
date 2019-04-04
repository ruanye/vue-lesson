import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state'
export default new Vuex.Store({
	state,
	getters:{
	  b(state){
		let v =state.a+'getters';
		return v; 
	  },
	  fiary(state){
         let newarr = state.ary.filter(item=>item>2)
		 return newarr
	  }
	}
})