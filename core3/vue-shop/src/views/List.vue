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
            <button class="btn btns" @click.stop="delegood(item)">删除</button>
        </router-link>
      </ul>
       <button class="btn" @click="loadmore">{{hasmore?'股东加载更多':'没有更多'}}</button>
     </div>
  </div>
</template>
<script>
import Hearder from '@/components/Header.vue'
import * as Types from '../store/mutations-types'
import {getpage,deletgood} from '../api'
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
    //删除事件
   async delegood(good){
       //delegood id 
       //请求方式：delete 
      // 请求地址： url:/delegood 
      // 参数 商品id String 
      // 后端删除成功前端在去做删除 
         await deletgood(good.id)
         this.list = this.list.filter(item=>item.id!=good.id)
    },
    // 添加到购物车事件
    addcar(gooditem){
     // 在缓存里面取购物车列表 如果没有就是空数组
      let carlist;
      if(localStorage&&localStorage['carlist']){
         carlist = JSON.parse(localStorage['carlist'])   
      }else{
        carlist=[]
      }
       //判断这个商品有没有 没有的话数量为1 有的话数量加1 
      let good = carlist.find(item=>item.id==gooditem.id)
       if(!good){
          gooditem.count=1;
          // 自定义是否选中的双向绑定的值
          this.$set(gooditem,'xuanzhong',true)
          carlist= [...carlist,gooditem]
       }else{
         this.$set(good,'xuanzhong',true)
         good.count++
       }
      // 最后的结果存到缓存里面  
      localStorage['carlist']= JSON.stringify(carlist)
     
      //提交到mutations vuex用的
      // this.$store.commit(Types.ADD_CAR,item)
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

