import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'//vuex 
Vue.config.productionTip = false
new Vue({
  store,//vuex
  router,
  render: h => h(App)
}).$mount('#app')
