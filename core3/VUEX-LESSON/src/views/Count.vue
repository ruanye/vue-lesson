<template>
  <div class="home">
      <span @click="minus(3)">-</span>
      {{count}}
      <!-- <div>{{countname}}</div> -->
      <div>{{count%2?'奇数':'偶数'}}</div>
      <span @click="add">+</span>
  </div>
</template>
<script>
import {mapState, mapGetters,mapMutations} from 'vuex'
export default {
  name: 'home',
  data(){
    return{}
  },
  computed:{
    ...mapState(['count']),
      ...mapGetters(['countname'])
   },
   methods:{
    //  ...mapMutations(['minus']),//
     ...mapMutations({
          minus:'minus'
      }),
    
    //this.$store.commit('minus) 映射成this.minus
     add(){
        // 把时间提交给mutations去处理
        // this.$store.commit('addcount',2,4) //addcount 自己定义表示提交过去的事件名
        this.$store.commit('addcount',{a:2,b:4})
        // this.$store.commit({
        //   type:'addcount',
        //   params:{a:2,b:4}
        // })
     }
  }
}
</script>
