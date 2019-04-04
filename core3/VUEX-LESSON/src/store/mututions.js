const mutations= {
		 //this.$store.commit('addcount')
		addcount(state,payload){
      state.count =payload.a+payload.b
		},
		minus(state,payload){
		
      state.count+=payload
		}
	}
export default mutations