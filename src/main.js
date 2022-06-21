import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "@/store";
import InstantSearch from "vue-instantsearch";
import SocialSharing from "vue-social-sharing";
import i18n from "./i18n";
import _ from "lodash";
import 'instantsearch.css/themes/satellite.css';
//import the custom styles
import "./assets/styles/mobileDevices.scss";
import "./assets/styles/responsive.scss";
import "./assets/styles/animate.scss";
import "./assets/styles/mobile.scss";
import "./assets/styles/main.scss";
import "./assets/styles/article.scss";
import Vuelidate from "vuelidate";
import moment from "moment";
import Vue2Filters from "vue2-filters";
import VueAnalytics from "vue-analytics";
import VueMeta from "vue-meta";
import {apiurl} from './services/helpers'
Vue.use(Vuelidate);


Vue.use(VueMeta, {
    // optional pluginOptions
    keyName: "aidspan",
    tagId: "UA-34360518-1",
    refreshOnceOnNavigation: true,
});

//import for animation
import scrollAnimation from "./directives/scrollAnimation";
Object.defineProperty(Vue.prototype, "$_", { value: _ });

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: "UA-34360518-1",
    router,
});

/** sharing stuffs */
Vue.use(SocialSharing);
/** for content ordering  */
Vue.use(Vue2Filters);

/** date formatting  */
Vue.filter("formatDate", function(value) {
    if (value) {
        return moment.unix(value).format("MMM Do YYYY");
    }
});

Vue.filter("formatDateNormal", function(value) {
    if (value) {
        return moment(value).format("MMM Do YYYY");
    }
});
Vue.filter("normalizeFrench", function(value) {
    if (value) {
        return _.deburr(value);
    }
});
/** dates with words */
Vue.filter("formatDateWords", function(value) {
    if (value) {
        return moment(value).format('LL');
    }
});

Vue.filter("formatDataSize", function(value) {
    if (value == 0) {
        return "0.00 B";
    }
    var e = Math.floor(Math.log(value) / Math.log(1024));
    return (
        (value / Math.pow(1024, e)).toFixed(2) + " " + " KMGTP".charAt(e) + "B"
    );
});

Vue.use(InstantSearch);

Vue.filter("str_limit", function(value, size) {
    if (!value) return "";
    value = value.toString();

    if (value.length <= size) {
        return value;
    }
    return value.substr(0, size) + " ...";
});

Vue.filter("onlyNumber", function(value) {
    return value.replace(/\D/g, "");
});

Vue.directive("scrollAnimation", scrollAnimation);
Vue.config.productionTip = false;
Vue.prototype.$api_url =apiurl;

new Vue({
    router,
    template: "dark",
    vuetify,
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
