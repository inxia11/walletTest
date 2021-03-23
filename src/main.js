import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import miniCore from './plugins/miniCore'


Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = 'https://api.binance.com/api/v3';

Vue.use(miniCore);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
