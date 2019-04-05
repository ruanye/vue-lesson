<template>
  <div class="home">
       <input  :value="count" @input='changecount'/>
  </div>
</template>
<script>
import * as Types from '../store/mutations-type'
import {mapState} from 'vuex'
// console.log(Types)
export default {
  name: 'home',
  data(){
    return{}
  },
  computed:{
     ...mapState(['count'])
  },
  methods:{
    changecount(e){
	 let val = e.target.value
     this.$store.commit('changecount',val)
    }
  }
}
</script>
