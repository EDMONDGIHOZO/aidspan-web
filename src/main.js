import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {store} from './stores/store'
//import the custom styles
import './assets/styles/responsive.scss';
import './assets/styles/animate.scss';
//import tweet feeds


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
