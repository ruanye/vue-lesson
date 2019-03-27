// es5 
let obj = {
}
Object.defineProperty(obj,'name',{
   enumerable:true,
   writable:true,
   configurable:true,
   value:1
})
//writable 是否可以写入 
// obj.name= 4
//configurable:true 是否可配置
// delete obj.name

// enmuberable 是否可枚举

for(var key in obj){
	console.log(obj[key])
}

var person = {}
Object.defineProperty(person,'name',{
    configurable:false,//能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
    enumerable:true,//对象属性是否可通过for-in循环，flase为不可循环，默认值为true
    writable:false,//对象属性是否可修改,flase为不可修改，默认值为true
    value:'xiaoming' //对象属性的默认值，默认值为undefined
});
//enumerable
for(var i in person){
    console.log(person[i]) //无结果，不可循环
}
