// 回调函数版 
function read(cb){
  fs.readFile('./list.json','utf8',function(err,data){ 
    if(err)cb([])
    cb(JSON.parse(data))
  })
}
read(function(data){
  res.end(JSON.stringify(data))
})