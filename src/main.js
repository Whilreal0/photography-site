import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import '@/assets/tailwind.css'
import 'boxicons'
import 'animate.css'



import VueCarousel from 'vue-carousel';

export const EventBus = new Vue();



Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
