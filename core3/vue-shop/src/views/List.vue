<template>
 <div>
    <Hearder>列表页</Hearder>
    <div class="container">
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
</template>
<script>
import Hearder from '@/components/Header.vue'
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
   async getA(){
      let {hasmore,pagedata:list}= await getpage(this.page)
      this.list= list
      this.hasmore=hasmore;
    }
  }
}
</script>