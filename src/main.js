import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from '@/store'
import InstantSearch from 'vue-instantsearch'
import VueGtag from 'vue-gtag'
//import the custom styles
import './assets/styles/responsive.scss'
import './assets/styles/animate.scss'
import './assets/styles/mobile.scss'
import './assets/styles/main.scss'
import Vuelidate from 'vuelidate'
import moment from 'moment'
import Vue2Filters from 'vue2-filters'
Vue.use(Vuelidate)
    //import for animation
import scrollAnimation from './directives/scrollAnimation'
import SocialSharing from 'vue-social-sharing'

///add the google analytics here
Vue.use(VueGtag, {
    config: { id: 'UA-167593216-1' },
})

/** sharing stuffs */
Vue.use(SocialSharing)
    /** for content ordering  */
Vue.use(Vue2Filters)
    /** date formatting  */
Vue.filter('formatDate', function(value) {
        if (value) {
            return moment.unix(value).format('MMM Do YYYY')
        }
    })
    /** dates with words */
Vue.filter('formatDateWords', function(value) {
    if (value) {
        return moment(value).startOf('day').fromNow()
    }
})


Vue.use(InstantSearch)
Vue.filter('str_limit', function(value, size) {
    if (!value) return ''
    value = value.toString()

    if (value.length <= size) {
        return value
    }
    return value.substr(0, size) + '...'
})

Vue.directive('scrollAnimation', scrollAnimation)
Vue.config.productionTip = false

new Vue({
    router,
    template: 'dark',
    vuetify,
    store,
    render: (h) => h(App),
}).$mount('#app')