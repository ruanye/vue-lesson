const getters = {
	checkAllVal(state){
    //   return state.carlist.every(item=>item.sele==true)
	 // 只要有一项成立就返回真值
	 return !state.carlist.some(item=>item.sele==false)
     //[sele: true,sele: true]
	// 把选中的放在一个新的数组里面 判断新数组和原来数组长度是否相等 
	//  [{'sele':true},{'sele':false}]
	//  [{'sele':true}]
	//  let  newary =state.carlist.filter(item=>item.sele==true) 
	//  return newary.length ==state.carlist.length
	 
	},
	//总价
	total(state){
    //    let newary = state.carlist.filter(item=>item.sele==true)
	//    let price = newary.reduce((prev,next)=>{
	// 	   return prev +next.count*next.price	
	// 	},0)
	// 	return price
	 	return state.carlist.filter(item=>item.sele==true).reduce((prev,next)=>prev +next.count*next.price	
		,0)
		
	}
}
export default getters