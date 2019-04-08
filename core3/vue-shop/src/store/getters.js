const getters = {
	checkAllVal(state){
      return state.carlist.every(item=>item.sele==true)
	}
}
export default getters