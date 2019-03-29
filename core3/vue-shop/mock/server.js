// 写接口用的  服务端
let http = require('http');
let url  = require('url')
let fs  = require('fs')
let fsPromsie = fs.promises;
let banner = require('./banner')
http.createServer((req,res)=>{
  //cors 跨域资源共享 
  res.setHeader('Access-Control-Allow-Origin','*')
	// 解构路径和查询参数
   let {pathname,query} = url.parse(req.url,true)
  //轮播图接口 
  if(pathname ==='/banner'){
	  res.end(JSON.stringify(banner))
	 return 
  }
   res.end('1234')
   
}).listen(3000,function(){
	console.log('3000启动成功')
})