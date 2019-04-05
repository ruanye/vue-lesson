<template>
  <div class="home">
     Action.vue
     <!-- <div>{{$store.state.count}}</div> -->
     <button @click="add">加1</button>
     <div>{{$store.state.username}}</div>
     <button @click="getuser">获取用户名</button>
     -------------我是分割线-------------------
     <br/> <br/> <br/>
     
     <!-- <div>{{$store.state.count}}</div> -->
     <button @click="addcount">点击加1</button>
     -------------input分割线---------------------
      <input v-model="count1"/>
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
    // this.count1 = this.$store.state.count 通过computed除了的作用
    count1:{//利用computed属性解决双向绑定问题,vuex 单向数据流 
      get(){
          return this.$store.state.count
      },
      set(val){
        //只要input数据改变就会触发此方法 val改变后的值 
        console.log(val)
        this.$store.commit('changecount',val)
      }
    },
    ...mapState(['count'])
  },
  methods:{
    // 点击加一的时间
    addcount(){
      // 提交到 mutations 
      this.$store.commit(Types.ADD_COUNT)
    },
    getuser(){
      this.$store.dispatch('getUserApi')
    },
    add(){
       this.$store.dispatch('actionAdd')//流程1
     }
  }
  
}
</script>
