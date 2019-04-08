import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store' //2引入 = ./store/index.js
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  store, //3挂载
  router,
  render: h => h(App)
}).$mount('#app')
