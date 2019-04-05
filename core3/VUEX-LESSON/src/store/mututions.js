const mutations= {
		 //this.$store.commit('addcount')
		addcount(state,payload){
      state.count =payload.a+payload.b
		},
		minus(state,payload){
		
      state.count+=payload
		},
		toMu(state){//流程4 
        alert(1) //流程5 
		},
		muser(state,user){
        state.username = user;
		}
	}
export default mutations