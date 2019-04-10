<template> 
  <div>
   <Header>购物车</Header>
    <div class="container">
      <input type="checkbox" class="inp" :checked='checkAll' @click="changAll"/> 
       <ul>
         <li v-for="good in carlist" :key="good.id" class="car-item">
            <input class="inp" type="checkbox" v-model="good.xuanzhong">
            <div>
             <img :src="good.img" alt="">
             <p>{{good.count}}</p>
             <p>{{good.number}}</p>
             <p>{{good.price}}</p>
            </div>
         </li>
       </ul>
       <div>总价：{{total}}</div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
export default {
   name: 'car',
   data(){
      return {
        carlist:[],
        checkAll:true
      }
   },
   created(){
     this.carlist =localStorage['carlist']?JSON.parse(localStorage['carlist']):[]
    },
    methods:{
      changAll(){
        this.checkAll=!this.checkAll;
        this.carlist.forEach(checkbox => {
           checkbox.xuanzhong= this.checkAll
        });
      }
    },
    computed:{
      
      total(){
        return 
        let newar  = this.carlist.filter(item=>item.xuanzhong==true)
        let price = newar.reduce((prev,next)=>prev+next.count*next.price,0)
        return price
      }
    },
   components:{
     Header
   }
}
</script>
<style scoped>
.inp{
  appearance: none; 
  width: 40px;
  height: 40px;
  border: 1px solid yellowgreen;
  outline: none;
  border-radius: 8px;
  align-self: center
}
.inp:before{
   content: '';
   position: relative;
   left: 6px;
   top: 3px;
    width: 20px;
   height: 20px;
}
.inp:checked.inp:before{
  content: '✔';
  font-size: 28px;
  position: relative;
  color: yellowgreen;
  left: 6px;
  top: 3px;
  display: inline-block;
 
}
 .car-item{
   width: 100%;
   display: flex;
   flex-direction: row;
   flex: 1
 }
 .left-item{
   align-self: center
 }
</style>
