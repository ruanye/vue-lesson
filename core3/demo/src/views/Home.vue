<template>
  <div class="home">
   
     <!-- {{this.$store.state.a}} -->
      <!-- {{a}}  -->
     {{bcd}}
     {{$store.getters.b}}
     {{$store.getters.fiary}}
     {{fiary}}
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'home',
  data(){
    return{}
  },
  computed:{
    // ...mapState(['a'])
    ...mapState({
       bcd:state=>state.a
    }),
    // ...mapGetters(['fiary'])
    ...mapGetters({
       fiary:'fiary'
    })
    // fiary(){
    //   return this.$store.getters.fiary
    // }
  }
}
</script>
