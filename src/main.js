import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from '@/store'
//import Axios from "axios";
//import the custom styles
import './assets/styles/responsive.scss'
import './assets/styles/animate.scss'
import './assets/styles/mobile.scss'
import './assets/styles/main.scss'
import Vuelidate from 'vuelidate'
import moment from 'moment'
Vue.use(Vuelidate)
    //import for animation
import scrollAnimation from './directives/scrollAnimation'

/** date formatting  */
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment.unix(value).format('MMMM Do ,YYYY')
    }
})
Vue.filter('str_limit', function(value, size) {
    if (!value) return '';
    value = value.toString();

    if (value.length <= size) {
        return value;
    }
    return value.substr(0, size) + '...';
});

Vue.directive('scrollAnimation', scrollAnimation)
Vue.config.productionTip = false

new Vue({
    router,
    template: 'dark',
    vuetify,
    store,
    render: (h) => h(App),
}).$mount('#app')