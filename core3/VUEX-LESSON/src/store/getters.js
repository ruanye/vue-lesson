const getters = {
	  b(state){
		let v =state.a+'getters';
		return v; 
	 },
	  fiary(state){
         let newarr = state.ary.filter(item=>item>2)
		 return newarr
	  }
}
export default getters