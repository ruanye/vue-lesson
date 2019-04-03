<template>
	<div class="hearder">
    	<i v-if="isshow" class="iconfont icon-web-icon- left-icon" @click="goBack"></i>
     <slot></slot> 
	</div>
</template>
<script>
export default {
  props:{
    isshow:{
      default:false
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
<style lang="less" scoped>
.hearder{
  position: fixed;
  width: 100%; 
  background-color: palegreen ;
  height: 56px;
  line-height: 56px;
  .left-icon{
    position: absolute;
    left: 20px;
    font-size: 30px;
  }
}

</style>

