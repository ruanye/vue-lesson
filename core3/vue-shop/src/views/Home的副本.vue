<template>
  <div>
    <Header>首页</Header>
     <div class="container">
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
      </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Banner from '../components/Banner.vue'
// 解构赋值
import {getBannaer,getHomelist} from  '../api' 
export default {
  data(){
    return{
      sliders:[],
      list:[]
    }
  },
  name: 'home',
  components:{
    Header,
    Banner
  },
   created(){
     this.getSwiper();
     this.getList()
  },
  methods:{
    //获取轮播图
    async getSwiper(){
        this.sliders= await getBannaer()
     },
     // 获取列表
     async getList(){
       this.list = await getHomelist()
       console.log(this.list)
       // v-for 渲染
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
