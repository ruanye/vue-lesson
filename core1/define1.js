// 最简单双向绑定
let obj= {
	name:2
}

//inp.value = 2
inp.oninput = function(e){
    obj.name= inp.value  //把input的值赋值给对象  inp的只要改变 obj.name就会改变
}
Object.defineProperty(obj,'name',{
	get(){  //获取值
      return value
	},
	set(val){ //只要对象的值改变就会触发set方法 设置值
      value = val;  //把设置的val给到get方法
	//obj.name 一改变就会改变inp的值 
	 inp.value = val;
	}
})