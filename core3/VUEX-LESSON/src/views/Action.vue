<template>
  <div class="home">
     Action.vue
     <div>{{$store.state.count}}</div>
     <button @click="add">加1</button>
     <div>{{$store.state.username}}</div>
     <button @click="getuser">获取用户名</button>
     
  </div>
</template>
<script>
export default {
  name: 'home',
  data(){
    return{}
  },
  computed:{
  
  },
  methods:{
    getuser(){
      this.$store.dispatch('getUserApi')
    },
    add(){
       this.$store.dispatch('actionAdd')//流程1
     }
  }
  
}
</script>
