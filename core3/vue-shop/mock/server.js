// 写接口用的  服务端
let http = require('http');
let url  = require('url')
let fs = require('fs')
let fsPromise = fs.promises;
let banner = require('./banner')
function readList(){
  //函数的返回值如果是promise可以直接.then() readlist().then() 
  return fsPromise.readFile('./list.json','utf8').then(data=>{
     return JSON.parse(data)
  })
}
// 写文件
function writeList(data){
  //函数的返回值如果是promise可以直接.then() 
  return fsPromise.writeFile('./list.json',JSON.stringify(data),'utf8')
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
  // 列表页接口 全部数据
  if(pathname ==='/all'){
    readList().then(data=>{
      res.end(JSON.stringify(data))
    })
    return 
  }
  // 分页接口  http://localhost:3001/page?page=1
  if(pathname==='/page'){
    // 取到前端传过来的页数
    let page = query.page;
    if(page=='undefined'){
        page=1
    }
    console.log(page)
    let hasmore = true;
    let maxpage = page*5
    // 第一页的数据 0-5 2页 5-10
    readList().then(data=>{
      let pagedata = data.slice(maxpage-5,maxpage)
       hasmore =maxpage>=data.length?false:true;
       res.end(JSON.stringify({hasmore,pagedata}))
    })
    return 
  }
  // 详情页面接口 http://localhost:3001/detail?id=1
  if(pathname==='/detail'){
    let id = query.id;
     readList().then(data=>{
      // let single = data.filter(item=>item.id==id)
       let single = data.find(item=>item.id==id)
       if(!single){
        // 如果single不在 返回空对象
         res.end(JSON.stringify({}))
       }
       res.end(JSON.stringify(single))
     })
    return
  }
  if(pathname==='/delegood'){
    console.log(pathname)
     let id = query.id
     readList().then(data=>{
       let newdata= data.filter(item=>item.id!=id)
        writeList(newdata).then(data=>{
          res.end(JSON.stringify({code:200,id}))
        })
     })
    return 
  }
   res.end('404')
   
}).listen(3001,function(){
	console.log('3000启动成功')
})