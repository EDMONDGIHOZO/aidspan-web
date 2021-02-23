import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "@/store";
import InstantSearch from "vue-instantsearch";
// import VueGtag from 'vue-gtag'
//import the custom styles
import "./assets/styles/mobileDevices.scss";
import "./assets/styles/responsive.scss";
import "./assets/styles/animate.scss";
import "./assets/styles/mobile.scss";
import "./assets/styles/main.scss";
import Vuelidate from "vuelidate";
import moment from "moment";
import Vue2Filters from "vue2-filters";
Vue.use(Vuelidate);

//import for animation
import scrollAnimation from "./directives/scrollAnimation";
import SocialSharing from "vue-social-sharing";
import i18n from "./i18n";
import _ from "lodash";
Object.defineProperty(Vue.prototype, "$_", { value: _ });

///add the google analytics here
// Vue.use(VueGtag, {
//         config: {
//             id: 'UA-167593216-1',
//             params: {
//                 send_page_view: true,
//                 appName: 'aidspan-web',
//                 pageTrackerScreenviewEnabled: true,
//             },
//             router,
//         },
//     })
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
/** dates with words */
Vue.filter("formatDateWords", function(value) {
  if (value) {
    return moment(value)
      .startOf("day")
      .fromNow();
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
  return value.substr(0, size) + "...";
});

Vue.directive("scrollAnimation", scrollAnimation);
Vue.config.productionTip = false;

new Vue({
  router,
  template: "dark",
  vuetify,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
