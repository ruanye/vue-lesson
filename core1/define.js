//target 目标对象 key 目标对象的书序 option 参数 是个对象
// Object.defineProperty(target,key,option)
let obj = {}
Object.defineProperty(obj,'name',{
	value:1, //设置值 默认是undefined
	enumerable:false,
	writable:true,
	configurable:true 
})
//enumerable 是否可枚举 不可枚举的属性无法通过for in 遍历到  
for(let key in obj){
	console.log(obj[key])
}
//writable:true 是否可以写入 
// obj.name = 2 无法自己写入属性
//configurable:true  是否可配置
// delete obj.name   false 无法通过delete等 删除或者修改等操作 
// 默认都是true  
let arr = [[1,2,2],1,2]
let res = [].concat.apply([],arr);
