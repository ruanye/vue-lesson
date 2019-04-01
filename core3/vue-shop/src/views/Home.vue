<template>
  <div>
    <Header>首页</Header>
     <div class="container">
       <Banner :swiperSlides="sliders"></Banner>
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
     }
  }
}
</script>
