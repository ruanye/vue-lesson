<template>
 <div>
    <Hearder>列表页</Hearder>
    <div class="container" ref="scrllele" @scroll="sload">
      <ul>
        <router-link :to="{name:'detail',params:{id:item.id}}" v-for="item in list" :key="item.id" tag="li">
          <img :src="item.img">
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
            <p>{{item.price}}$</p>
            <button class="btn btns" @click.stop="addcar(item)">添加到购物车</button>
        </router-link>
      </ul>
       <button class="btn" @click="loadmore">{{hasmore?'股东加载更多':'没有更多'}}</button>
     </div>
  </div>
</template>
<script>
import Hearder from '@/components/Header.vue'
import * as Types from '../store/mutations-types'
import {getpage} from '../api'
export default {
  name: 'list',
  data(){
    return {
      list:[],
      page:1,
      hasmore:true
    }
  },
  components:{
    Hearder
  },
  created(){
    this.getA()
  },
  methods:{
    // 添加到购物车事件
    addcar(item){
      //提交到mutations
      this.$store.commit(Types.ADD_CAR,item)
    },
    // 滚动加载事件
    sload(){
      // 节流  防抖
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
       let {scrollTop,scrollHeight,clientHeight}=this.$refs.scrllele;
        if(scrollTop+clientHeight+20>scrollHeight){
        this.loadmore()
        }
       },13)
   },
   async getA(){
      let {hasmore,pagedata:list}= await getpage(this.page)
      // this.list=this.list.concat(list)
      this.list =[...this.list,...list]
      this.hasmore=hasmore;
    },
     // 加载更多
    loadmore(){
      if(!this.hasmore)return
      // 没有更多了就不在请求
      this.page+=1;
      this.getA()
    }
  }
}
</script>
<style lang="less">
  .btn{
    width: 200px;
    height: 60px;
    line-height: 60px;
    appearance:none;
    border:none;
    background-color:aquamarine;;
    color: #555;
    outline: none;
    cursor: pointer;
  }
  .btns{
     background-color:rebeccapurple;
     border-radius: 10px;
       color: #fff;
       font-size: 26px;
  }
</style>