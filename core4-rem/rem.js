let w = document.documentElement.clientWidth //获取屏幕宽度
// 把html的字体设置成为动态的  在640的时候 html的fontsize 为 40px
document.documentElement.style.fontSize=  w/640*64     +'px' 

console.log(w)
// flexable hotcss  transform-scale  vw vh 

