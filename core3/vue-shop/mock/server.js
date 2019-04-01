// 写接口用的  服务端
let http = require('http');
let url  = require('url')
let fs  = require('fs')
let fsPromsie = fs.promises;
let banner = require('./banner')
function readList(){
  //函数的返回值如果是promise可以直接.then() readlist().then() 
  return fsPromsie.readFile('./list.json','utf8').then(data=>{
     return JSON.parse(data)
  })
}
http.createServer((req,res)=>{
  //cors 跨域资源共享 
  res.setHeader('Access-Control-Allow-Origin','*')
   //设置编码格式 plain 普通文本
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // 解构路径和查询参数
   let {pathname,query} = url.parse(req.url,true)
  //轮播图接口 
  if(pathname ==='/banner'){
	  res.end(JSON.stringify(banner))
	  return 
  }
  // 首页列表接口
  if(pathname==='/hot'){
      readList().then(data=>{
       // 截取6条
      let hotdata = data.slice(0,6)
       res.end(JSON.stringify(hotdata))
    })
    return
  }
   res.end('1234')
   
}).listen(3001,function(){
	console.log('3000启动成功')
})