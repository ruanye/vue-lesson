// 多层数据双向绑定
let obj = {
	age:[1,2,3,4],
	name:3,
	person:{
	   name:'lili',
	   age:'41'
	}
}
function isObject(obj){
	return obj!=null&&typeof obj ==='object' 
}
function Observer(obj){
   if(!isObject(obj))return;
   for(let key in obj){
	//用defineReactive监听所有的属性
     defineReactive(obj,key,obj[key])
  }
}
function defineReactive(obj,key,value){
	Observer(value)
    Object.defineProperty(obj,key,{
		get(){
		  return value	
		},
		set(val){
			Observer(val)
			console.log('数据更新了')
			value = val
		}
	})
}
Observer(obj)
//obj.person.name = 'lilei' 对应21行  值是对象我们要监听
// obj.person.name = {'age':1}  赋值的值是个对象我们也要监听  
// obj.pertson.name.age = {}

// let oldpush  = Array.prototype.push;
// Array.prototype.push= function(value){
// 	 console.log('数据更新了')
// 	 oldpush.call(this,value)
// }
// Vue 重写了 push、push、pop、shift、unshift、splice、sort、reverse、shift、unshift、splice、sort、reverse
let methods = ['push','pop','shift','unshift']
methods.forEach(method=>{
	let oldmetheod  = Array.prototype[method] 
	Array.prototype[method] = function(...args){
       console.log('数据更新了');
	   oldmetheod.call(this,...args)
	}
})
// 改变length 和索引  并不会触发更新方法
