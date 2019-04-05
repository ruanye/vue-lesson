import * as Types from './mutations-type'
// 引入定义的常量事件 
console.log(Types.ADD_COUNT)  //{ADD_COUNT:'ADD_COUNT'}
const mutations= {
	   // input 的双向绑定事件 
	   changecount(state,val){
         state.count=val;
	   },
	     [Types.ADD_COUNT](state){
			 state.count++	
		 },
		 //this.$store.commit('addcount')
		addcount(state,payload){
         state.count++
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