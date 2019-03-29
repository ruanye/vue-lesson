<template>
  <Header>首页</Header>
</template>
<script>
import Header from '../components/Header'
import {getBannaer} from  '../api'
export default {
  name: 'home',
  components:{
    Header
  },
  async created(){
     let data= await getBannaer()
     console.log(data)
  }
}
</script>
