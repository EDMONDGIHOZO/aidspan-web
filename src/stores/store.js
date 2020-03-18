import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    icons: [
      { icon: "mdi-facebook", name: "facebook", link: 'https://www.facebook.com/Aidspan1/' },
      { icon: "mdi-gmail", name: "gmail", link: 'mailto:info@gmail.com' },
      { icon: "mdi-twitter", name: "twitter", link: 'https://twitter.com/aidspan' },
      { icon: "mdi-linkedin", name: "linkedin", link: 'https://www.linkedin.com/company/aidspan' }
    ],

    basicInfo: [
      { icon: "mdi-phone", title: "+254 (0)774-135984" },
      { icon: "mdi-pin", title: "P.O. Box 66869 - 00800,Nairobi, Kenya" },
      { icon: "mdi-email", title: "info@aidspan.org" }
    ],
    menus: [{
      action: "mdi-home",
      title: "Home",
      route: '/',
      submenus: []
    },
    {
      action: "mdi-eye",
      title: "Editorial",
      route: '/editorial',
      submenus: [{
        title: "List Item"
      }]
    },
    {
      action: "mdi-lightbulb-on",
      title: "About Aidspan",
      route: '/about-us',
      active: true,
      submenus: [{
        title: "Key Achievements", route: '/keys'
      },
      {
        title: "Our History", route: '/history'
      },
      {
        title: "Our Donors", route: '/donors'
      }
      ]
    },
    {
      action: "mdi-google-analytics",
      title: "Data Analytics",
      submenus: [{
        title: "Grant Portfolio", route: '/grants-portfolio'
      },
      {
        title: "Global Fund Donors", route: '/gf-donors'
      }, 
      {
        title: "Grant-performance-analysis", route: '/gp-analysis'
      }
      ]
    },
    {
      action: "mdi-newspaper-variant",
      title: "Publications",
      submenus: [{
        title: "List Item"
      }]
    },
    {
      action: "mdi-hand-left",
      title: "Contact Us",
      submenus: [{
        title: "List Item"
      }]
    },
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
    ],
    articles: [
      {
        art_title:
          "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
        art_issue: 321,
        art_date: "12 feb 2020",
        art_id: "dswe12",
        art_abstract:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
        art_author: {
          name: "Ida Hakiza",
          author_url: "/Michel",
          author_img: require("@/assets/images/common/author_default.svg")
        },
        comments: 23,
        views: 2340,
        shares: 120
      },
      {
        art_title:
          "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
        art_issue: 431,
        art_date: "02 feb 2020",
        art_id: "dswe1322",
        art_abstract:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
        art_author: {
          name: "Adele Sulcas",
          author_url: "/Michel",
          author_img: require("@/assets/images/common/author_default.svg")
        },
        comments: 3,
        views: 230,
        shares: 20
      },
      {
        art_title:
          "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
        art_issue: 431,
        art_date: "02 feb 2020",
        art_id: "dswe1322",
        art_abstract:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
        art_author: {
          name: "Adele Sulcas",
          author_url: "/Michel",
          author_img: require("@/assets/images/common/author_default.svg")
        },
        comments: 25,
        views: 210,
        shares: 320
      },
      {
        art_title:
          "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
        art_issue: 431,
        art_date: "02 feb 2020",
        art_id: "dswe1322",
        art_abstract:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
        art_author: {
          name: "Adele Sulcas",
          author_url: "/Michel",
          author_img: require("@/assets/images/common/author_default.svg")
        },
        comments: 23,
        views: 2340,
        shares: 120
      },
      {
        art_title:
          "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
        art_issue: 431,
        art_date: "02 feb 2020",
        art_id: "dswe1322",
        art_abstract:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
        art_author: {
          name: "Adele Sulcas",
          author_url: "/Michel",
          author_img: require("@/assets/images/common/author_default.svg")
        },
        comments: 23,
        views: 2340,
        shares: 120
      },
      {
        art_title:
          "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
        art_issue: 531,
        art_date: "12 feb 2020",
        art_id: "dswe1fg2",
        art_abstract:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
        art_author: {
          name: "Staff Ange",
          author_url: "/Michel",
          author_img: require("@/assets/images/common/author_default.svg")
        },
        comments: 23,
        views: 2340,
        shares: 120
      },
      {
        art_title:
          "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
        art_issue: 321,
        art_date: "12 feb 2020",
        art_id: "dswtr12",
        art_abstract:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
        art_author: {
          name: "Michel Ange",
          author_url: "/Michel",
          author_img: require("@/assets/images/common/author_default.svg")
        },
        comments: 23,
        views: 2340,
        shares: 120
      }
    ],
    quicklinks: [
      { title: "Board of directors", route: "aidspan/board-of-directors" },
      { title: "Key Documents", route: "aidspan/key-documents" },
      { title: "Galleries", route: "aidspan/galleries" },
      { title: "Careers", route: "aidspan/careers" },
      { title: "Sitemap", route: "aidspan/sitemap" }
    ],

    epidemics: [
      {
        ep_name: "Tuberclosis",
        ep_icon: require("@/assets/images/common/tuberclosis.png"),
        ep_id: "safda3",
        class: "T"
      },
      {
        ep_name: "AIDS",
        ep_icon: require("@/assets/images/common/aids.png"),
        ep_id: "adfawe",
        class: "A"
      },
      {
        ep_name: "Malaria",
        ep_icon: require("@/assets/images/common/maralia.png"),
        ep_id: "213fjdsl",
        class: "M"
      }
    ],

  }
});
