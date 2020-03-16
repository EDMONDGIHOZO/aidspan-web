import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    icons: [
      { icon: "mdi-facebook", name: "facebook" },
      { icon: "mdi-gmail", name: "gmail" },
      { icon: "mdi-twitter", name: "twitter" },
      { icon: "mdi-linkedin", name: "linkedin" }
    ],

    menus: [
      {
        title: "Home",
        language: "en",
        parent: "",
        subMenu: [
          {
            title: "GFO Newsletter",
            language: "en",
            parent: "",
            subMenu: [],
            id: "adffdhad",
            route: "/",
            icon: "mdi-email-newsletter"
          }
        ],
        id: "adfhad",
        route: "/",
        icon: "mdi-home"
      },
      {
        title: "About Us",
        language: "en",
        parent: "",
        subMenu: [],
        id: "addff",
        route: "/about-us",
        icon: "mdi-information"
      },
      {
        title: "GFO Newsletter",
        language: "en",
        parent: "",
        subMenu: [],
        id: "adffdhad",
        route: "/newsletter",
        icon: "mdi-email-newsletter"
      },
      {
        title: "Data Analytics",
        language: "en",
        parent: "",
        subMenu: [],
        id: "adfsahad",
        route: "/data-analytics",
        icon: "mdi-google-analytics"
      },
      {
        title: "Publications",
        language: "en",
        parent: "",
        subMenu: [],
        id: "adfhfdad",
        route: "/publications",
        icon: "mdi-newspaper-variant"
      },
      {
        title: "Contact Us",
        language: "en",
        parent: "",
        subMenu: [],
        id: "adfhadsdsd",
        route: "/contact",
        icon: "mdi-phone-check"
      }
    ],
    slides: [
      {
        imageUrl:
          "https://www.theglobalfund.org/media/9405/2020-03-06_women-leading-the-fight-for-better-health.jpg",
        language: "en",
        caption: "Women Leading Fight",
        id: "adfhad"
      },
      {
        imageUrl: "https://aidspan.org/sites/default/files/aids.jpg",
        language: "en",
        caption: "Map for aidspan works",
        id: "adfhasdd"
      }
    ],
    logo: require("@/assets/images/en/logo_en.png"),

    appTitle: [
      {
        lang: "en",
        title: "Independent observer of the Global fund"
      }
    ],
    appIcon: require("@/assets/images/common/aid_icon.png"),
    homePublications: [
      {
        pub_title:
          "Global Fund programs grapple with challenging monetary environment in Zimbabwe",
        pub_date: "30 Jan 2020",
        pub_file_url: "/pub"
      },
      {
        pub_title:
          "Global Fund programs grapple with challenging monetary environment in Zimbabwe",
        pub_date: "30 Jan 2020",
        pub_file_url: "/pub"
      }
    ]
  }
});
