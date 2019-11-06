import Vue from 'vue'
// import App from './App.vue'
import Home from "./views/Home"
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
