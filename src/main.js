import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {store} from './stores/store'
//import the custom styles
import './assets/styles/responsive.scss';
import './assets/styles/animate.scss';
import './assets/styles/mobile.scss';
import './assets/styles/main.scss';
//import for animation
import scrollAnimation from './directives/scrollAnimation'

Vue.directive('scrollAnimation' , scrollAnimation);

Vue.config.productionTip = false

new Vue({
  router,
  template: '',
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
