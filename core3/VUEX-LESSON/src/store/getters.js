const getters = {
	  b(state){
		let v =state.a+'getters';
		return v; 
	 },
	  fiary(state){
         let newarr = state.ary.filter(item=>item>2)
		 return newarr
	  },
	  countname(state){
        let text = state.count%2?'奇数':'偶数' 
		return text;
	  }
}
export default getters