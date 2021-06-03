//import axios from 'axios'

export default {
  /** get dynamic data from server  */
  issues: [],
  subdb: true,
  issue_article: {},
  currentIssueArticles: {},
  article: {},
  article_data: null,
  publications: {},
  publications_types: {},
  subs: {},
  menus: [],
  users: {},
  subscriber: {},
  currentUser: {},
  allTags: {},
  singleTag: [],
  activelang: "",
  ofmissues: [],
  gfoissues: [],
  edition: {},
  user_info: {},
  adminMenus: [
    {
      id: 1,
      title: "Dashboard",
      icon: "mdi-home",
      lang: "en",
      route: "/admin",
    },
    {
      id: 2,
      title: "GFO Newsletter",
      icon: "mdi-email-newsletter",
      lang: "en",
      route: "/admin/gfos",
    },
    {
      id: 3,
      title: "Publications",
      icon: "mdi-receipt",
      lang: "en",
      route: "/admin/publications",
    },
    {
      id: 4,
      title: "Documents",
      icon: "mdi-file-document",
      lang: "en",
      route: "/admin/documents",
    },
    {
      id: 5,
      title: "Careers",
      icon: "mdi-briefcase",
      lang: "en",
      route: "/admin/careers ",
    },
    {
      id: 6,
      title: "Donors",
      icon: "mdi-seed",
      lang: "en",
      route: "/admin/donors ",
    },
  ],

  actionMenus: [
    {
      id: 1,
      title: "new issue",
      lang: "en",
      route: "new-issue",
    },
    {
      id: 2,
      title: "new article",
      lang: "en",
      route: "new-article",
    },
    {
      id: 3,
      title: "new publication",
      lang: "en",
      route: "new-publication",
    },
    {
      id: 4,
      title: "Image Upload",
      lang: "en",
      route: "new-image",
    },
    {
      id: 4,
      title: "New Key Document",
      lang: "en",
      route: "new-key-doc",
    },
  ],
  settingsMenu: [
    {
      id: 1,
      title: "Users",
      icon: "mdi-account-group",
      lang: "en",
      route: "new-issues",
    },
    {
      id: 2,
      title: "Basic Site Info",
      icon: "mdi-alert-circle-check",
      lang: "en",
      route: "new-article",
    },
  ],
  /** end of dyanamic data from server */

  icons: [
    {
      icon: "mdi-facebook",
      name: "facebook",
      link: "https://www.facebook.com/Aidspan1/",
    },
    {
      icon: "mdi-gmail",
      name: "gmail",
      link: "mailto:info@gmail.com",
    },
    {
      icon: "mdi-twitter",
      name: "twitter",
      link: "https://twitter.com/aidspan",
    },
    {
      icon: "mdi-linkedin",
      name: "linkedin",
      link: "https://www.linkedin.com/company/aidspan",
    },
  ],

  basicInfo: [
    {
      icon: "mdi-phone",
      title: "+254 (0)774-135984",
    },
    {
      icon: "mdi-map-marker",
      title: "P.O. Box 66869 - 00800,Nairobi, Kenya",
    },
    {
      icon: "mdi-email",
      title: "info@aidspan.org",
    },
  ],
  slides: [
    {
      imageUrl:
        "https://www.theglobalfund.org/media/9602/media-hero-2020-04-30.jpg",
      language: "en",
      caption: "Women Leading Fight",
      id: "adfhad",
    },
    {
      imageUrl:
        "https://www.theglobalfund.org/media/7311/where-programs-are_en.png",
      language: "en",
      caption: "Map for aidspan works",
      id: "adfhasdd",
    },
  ],
  logo: require("@/assets/images/en/logo_en.png"),
  logo_fr: require("@/assets/images/common/logo_fr.png"),
  adminlogo: require("@/assets/images/en/admin-logo.png"),

  appTitle: [
    {
      lang: "en",
      title: "Independent observer of the Global fund",
    },
  ],
  appIcon: require("@/assets/images/common/aid_icon.png"),

  quicklinks: [
    {
      title: "Key Documents",
      route: "key-documents",
    },
    {
      title: "Gallery",
      route: "gallery",
    },
    {
      title: "Career and Opportunities",
      route: "aidspan/careers",
    },
  ],

  epidemics: [
    {
      ep_name: "HIV-AIDS",
      ep_icon: require("@/assets/images/common/aids.png"),
      ep_id: "adfawe",
      class: "A",
      color: "red--text text-center font-weight-bold",
    },
    {
      ep_name: "TUBERCULOSIS",
      ep_icon: require("@/assets/images/common/tuberclosis.png"),
      ep_id: "safda3",
      class: "T",
      color: "blue--text text-center font-weight-bold",
    },
    {
      ep_name: "MALARIA",
      ep_icon: require("@/assets/images/common/maralia.png"),
      ep_id: "213fjdsl",
      class: "M",
      color: "amber--text text-center font-weight-bold",
    },
  ],

  /// template article
  Areas: [],
  Diseases: [],
  Countries: [],
};
