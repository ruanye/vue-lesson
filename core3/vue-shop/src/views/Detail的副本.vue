<template>
  <div class="box"> 
	 <Header>
		 <i class="iconfont icon-web-icon-" @click="goBack"></i>
		 详情页
	 </Header>
	  <div class="container">
		<img :src="detailData.img">
		{{detailData.name}}
		{{detailData.info}}
	  </div>
	</div>
</template>
<script>
import Header from '../components/Header.vue'
import {getDetial} from '../api'
export default {
	name:'detail',
	components:{
		Header
	},
	data(){
		return{
			detailData:{}
		}
	},
	computed:{
      detailid(){
		return this.$route.params.id
	  }
	},
 	async created(){
	   this.detailData=await getDetial(this.detailid)
		// 判断数据是否为空 判断是不是空对象
		//  if(JSON.stringify(this.detailData)==='{}'){}
    // Object.values 
		if(!Object.keys(this.detailData).length){
		  this.$router.push('/list')
		}
  },
  methods:{
	  goBack(){
		// 返回上一页
		 this.$router.go(-1)
	  }
  }
}
</script>
<style lang="less">
.box{
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 20;
	background: #fff;
}
</style>
