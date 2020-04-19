import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/client/pages/Home.vue";
import Article from "../views/client/pages/Article.vue";
import Editorial from "../views/client/pages/Editorial.vue";
import About from "../views/client/pages/About.vue";
import GrantsPortfolio from "../views/client/pages/grants-portfolio.vue";
import Methodologies from "../views/client/pages/Methodologies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Welcome to Aidspan",
      metaTags: [
        {
          name: "Description",
          content: "aidspan is NGO based in Kenya"
        },
        {
          proporty: "og:Description",
          content: "the global fund independent observer"
        }
      ]
    }
  },
  // about aidspan
  {
    path: "/about-us",
    name: "About",
    component: About,
    meta: {
      title: "About Aidspan",
      metaTags: [
        {
          name: "Description",
          content: "aidspan is NGO based in Kenya"
        },
        {
          proporty: "og:Description",
          content: "the global fund independent observer"
        }
      ]
    }
  },

  /// end
  {
    path: "/editorial",
    name: "Editorial",
    component: Editorial,
    meta: {
      title: "Aidspan Editorial",
      metaTags: [
        {
          name: "Description",
          content: "aidspan is NGO based in Kenya"
        },
        {
          proporty: "og:Description",
          content: "the global fund independent observer"
        }
      ]
    }
  },

  {
    path: "/article",
    name: "Editorial",
    component: Article,
    meta: {
      title: "Article Page",
      metaTags: [
        {
          name: "Description",
          content: "aidspan is NGO based in Kenya"
        },
        {
          proporty: "og:Description",
          content: "the global fund independent observer"
        }
      ]
    }
  },
  {
    path: "/methodologies",
    name: "Data Analytics",
    component: Methodologies,
    meta: {
      title: "Aidspan Data Analytics from Global Fund Data",
      metaTags: [
        {
          name: "Description",
          content: "aidspan is NGO based in Kenya"
        },
        {
          proporty: "og:Description",
          content: "the global fund independent observer"
        }
      ]
    }
  },
  /// data analytics based pages
  {
    path: "/data-analytics/grants-portfolio",
    name: "Grants Portofolio",
    component: GrantsPortfolio,
    meta: {
      title: "Grants Portfolio",
      metaTags: [
        {
          name: "Description",
          content: "aidspan is NGO based in Kenya"
        },
        {
          proporty: "og:Description",
          content: "the global fund independent observer"
        }
      ]
    }
  }
  // end data analytics based pages
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
