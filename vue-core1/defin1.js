let obj ={
	name:''
}
inp.oninput =function(e){
	//输入框的值 赋值给对象的nam属性，会触发更新
    obj.name = e.target.value
}
Object.defineProperty(obj,'name',{
	get(){ //获取值
		return value
	},
	set(val){ //设置值 改变值的时候会触发set方法
	   console.log('更新',val)
       value = val;
	  // 给对象改变值的时候，把值也要更新到input上面  obj.name = 3 
	   inp.value = val;
	}
})

