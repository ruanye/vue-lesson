<template>
  <div>
    <Header>首页</Header>
     <div class="container">
       
       <div v-if="loading">
          <Loading/>
       </div>
       <template v-else>
       <Banner :swiperSlides="sliders"></Banner>
       <div class="list">
        <ul>
          <li v-for="item in list" :key="item.id">
            <img :src="item.img">
            <p>{{item.name}}</p>
            <p>{{item.info}}</p>
            <p>{{item.price}}$</p>
           </li>
        </ul>
       </div>
       </template>
      </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Banner from '../components/Banner.vue'
import Loading from '../components/loading'
// 解构赋值
import {getHomeAll} from  '../api' 
import Axios from 'axios';
export default {
  data(){
    return{
      loading:true,
      sliders:[],
      list:[]
    }
  },
  name: 'home',
  components:{
    Header,
    Banner,
    Loading
  },
  created(){
     this.getAll()
  },
  methods:{
    //获取首页所有数据轮播图和列表
    async getAll(){
     [this.sliders,this.list]= await getHomeAll()
     this.loading= false;
    }
  }
}
</script>
<style lang="less" scoped>
.list{
     box-sizing: border-box;
     padding: 20px;
     ul{
       display: flex;
       width: 100%;
       flex-wrap: wrap
     }
     img{
       max-width: 80%;
     }
     li{
      width: 50%;
      padding-bottom: 10px;
      border-bottom: 1px solid #8fa8ce;
    }
}

</style>
