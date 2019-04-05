 import {getUsername}  from  '../api' 
 let  actions={
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
 }
  export default actions