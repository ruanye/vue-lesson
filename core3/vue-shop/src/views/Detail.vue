<template>
	<div>
		详情页
		{{detailid}}
	</div>
</template>
<script>
export default {
	name:'detail',
	computed:{
      detailid(){
		return this.$route.params.id
	  }
	},
	created(){
		
	},
}
</script>
