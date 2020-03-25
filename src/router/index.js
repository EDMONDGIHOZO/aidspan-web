import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Editorial from "../views/Editorial.vue";
import Article from "../views/Article.vue";
import About from "../views/About.vue";

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
  }
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
