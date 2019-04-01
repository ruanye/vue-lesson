import axios from 'axios'
// 设置默认访问路径
axios.defaults.baseURL ="http://localhost:3001";
// 请求拦截 响应拦截 Interceptors 拦截器 
// 响应拦截器 把拿回来数据过滤了一遍
axios.interceptors.response.use((res)=>{
  return res.data
},(err)=>{
  Promise.reject(err)
})
// axios是基于promsie封装的 返回值是一个promise 
// 轮播图接口 
export let getBannaer =()=>{
  return axios.get('/banner')
}
// 首页列表接口 export 导出 
export let getHomelist = ()=>{
  return axios.get('/hot')
}
// 通过import引入的时候 export导出的会放在一个对象里面 {getbaner:getbananer(),getHomelsit:getHomelist()}


