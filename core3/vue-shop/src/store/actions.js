const  actions = {
    checkAll({commit},params){//actions流程2
      commit('changCheck',params) //acions 流程3
	},
  addC({commit},params){//商品数量加1
    commit('addC',params) 
  }
}
export default actions 