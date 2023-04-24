import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";

// import components
import Home from "@/views/client/pages/Home.vue";
import AppHolder from "@/components/layouts/appholder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/en/c",
  },
  {
    path: "/:lang",
    component: AppHolder,
    beforeEnter(to, from, next) {
      const lang = to.params.lang;
      if (!["en", "fr"].includes(lang)) return next("en" + "/c");
      if (i18n.locale === lang) return next();
      import(`@/locales/${lang}.json`).then((msgs) => {
        i18n.setLocaleMessage(lang, msgs.default || msgs);
        i18n.locale = lang;
        document.title = to.meta.title;
        return next();
      });
    },

    AfterEnter() {
      // initiate the session
      // record the next route to the web visit
    },

    children: [
      /** client web path */
      {
        path: "c",
        component: () =>
          import(
            /* webpackChunkName: "editoral" */
            "../views/client/holder/clientholder.vue"
          ),
        children: [
          {
            path: "",
            name: "Homepage",
            component: Home,
            meta: {
              title: "Welcome to Aidspan",
            },
          },
          {
            path: "about-us",
            name: "about",
            component: () =>
              import(
                /* webpackChunkName: "about-us" */
                "../views/client/pages/About.vue"
              ),
            meta: {
              title: "About aidspan",
            },
          },{
            path: "watchdog",
            name: "watchdog",
            component: () =>
                import(
                    /* webpackChunkName: "about-us" */
                    "../views/client/pages/Watchdog.vue"
                    ),
            meta: {
              title: "About aidspan",
            },
          },
          {
            path: "strategy",
            name: "strategy",
            component: () =>
              import(
                /* webpackChunkName: "strategy" */
                "../components/pages/Strategy.vue"
              ),
            meta: {
              title: "Strategy",
            },
          },
          {
            path: "strategy-content/:id",
            name: "strategyContent",
            params: true,
            props: true,
            component: () =>
              import(
                /* webpackChunkName: "strategy-content" */
                "../components/helpers/singleStrategy.vue"
              ),
            meta: {
              title: "single strategy",
            },
          },
          {
            path: "policy",
            name: "policy",
            component: () =>
              import(
                /* webpackChunkName: "policy" */
                "../components/pages/Consacre.vue"
              ),
            meta: {
              title: "strategies aidspan",
            },
          },
          {
            path: "editorial",
            name: "Editorial",
            component: () =>
              import(
                /* webpackChunkName: "editoral" */
                "../views/client/pages/Editorial.vue"
              ),
            meta: {
              title: "GFO NEWSLETTER",
            },
          },
          {
            path: "careers",
            name: "careers",
            component: () =>
              import(
                /* webpackChunkName: "careers" */
                "../views/client/pages/careers.vue"
              ),
            meta: {
              title: "GFO NEWSLETTER",
            },
          },
          {
            path: "career/:id",
            name: "career",
            props: true,
            params: true,
            component: () =>
              import(
                /* webpackChunkName: "career" */
                "../views/client/pages/career.vue"
              ),
            meta: {
              title: "Job",
            },
          },
          {
            path: "key-documents",
            name: "key-documents",
            component: () =>
              import(
                /* webpackChunkName: "key_documents" */
                "../views/client/pages/key-documents.vue"
              ),
            meta: {
              title: "Aidsan Key documents",
            },
          },
          {
            path: "french-issues",
            name: "ofm",
            component: () =>
              import(
                /* webpackChunkName: "ofm" */
                "../components/pages/client/french-issues.vue"
              ),
            meta: {
              title: "OFM",
            },
          },
          {
            path: "gfo-issues",
            name: "gfo",
            component: () =>
              import(
                /* webpackChunkName: "gfo" */
                "../components/pages/client/english-issues.vue"
              ),
            meta: {
              title: "GFO ISSUES",
            },
          },
          {
            path: "gallery",
            name: "gallery",
            component: () =>
              import(
                /* webpackChunkName: "editoral" */
                "../views/client/pages/gallery.vue"
              ),
            meta: {
              title: "AIDSPAN GALLERY",
            },
          },
          {
            path: "current-issue",
            name: "current-issie",
            component: () =>
              import(
                /* webpackChunkName: "editoral" */
                "../components/helpers/currentIssue.vue"
              ),
            meta: {
              title: "GFO current Issue",
            },
          },
          {
            path: "edition/:nid",
            name: "edition",
            props: true,
            params: true,
            component: () =>
              import(
                /* webpackChunkName: "single-edition" */
                "../components/pages/client/singleEdition.vue"
              ),
            meta: {
              title: "Edition",
            },
          },
          {
            path: "article-tags/:tid",
            name: "articleTags",
            props: true,
            params: true,
            component: () =>
              import(
                /* webpackChunkName: "article-tags" */
                "../views/client/pages/articletags.vue"
              ),
            meta: {
              title: "GFO TAGS",
            },
          },
          {
            path: "articletypes/:type_id",
            name: "articletype",
            props: true,
            params: true,
            component: () =>
              import(
                /* webpackChunkName: "article-type" */
                "../views/client/pages/articleTypesView.vue"
              ),
            meta: {
              title: "GFO Article Types",
            },
          },

          {
            path: "article/:article_id",
            name: "article",
            props: true,
            afterEnter() {
              // record the visited article information
            },
            params: true,
            component: () =>
              import(
                /* webpackChunkName: "editoral" */
                "../views/client/pages/Article.vue"
              ),
            meta: {
              title: "Gfo Newsletter",
              countIt: true,
            },
          },
          {
            path: "search/:query",
            name: "search-results",
            props: true,
            params: true,

            component: () =>
              import(
                /* webpackChunkName: "search-result" */
                "../views/client/pages/search.vue"
              ),
            meta: {
              title: "Search results",
            },
          },
          {
            path: "publication/:pub_id",
            name: "publication",
            props: true,
            params: true,

            component: () =>
              import(
                /* webpackChunkName: "publication" */
                "../views/client/pages/PublicationView.vue"
              ),
            meta: {
              title: "Single Puplication",
            },
          },
          {
            path: "methodologies",
            name: "Analytics",
            component: () =>
              import(
                /* webpackChunkName: "Methodologies" */
                "../views/client/pages/Methodologies.vue"
              ),
            meta: {
              title: "Data Methodolofies",
            },
          },
          {
            path: "data-analytics/grants-portfolio",
            name: "GrantsPortfolio",
            component: () =>
              import(
                /* webpackChunkName: "grants-portfolio" */
                "../views/client/pages/grants-portfolio.vue"
              ),
            meta: {
              title: "grants portfolio",
            },
          },
          {
            path: "publications",
            name: "Publications",
            component: () =>
              import(
                /* webpackChunkName: "grants-portfolio" */
                "../views/client/pages/Publications.vue"
              ),
            meta: {
              title: "Aidspan Data Bank",
            },
          },
          {
            path: "subscribe",
            name: "Subscribe",
            component: () =>
              import(
                /* webpackChunkName: "subscribe" */
                "../views/client/pages/subscribe.vue"
              ),
            meta: {
              title: "Subscribe to newsletter",
            },
          },
          {
            path: "country/:countryName",
            name: "countryGrants",
            props: true,
            params: true,
            component: () =>
              import(
                /* webpackChunkName: "single-country" */
                "../views/client/pages/single-country"
              ),
            meta: {
              title: "country grants",
              countIt: true,
            },
          },
        ],
      },
      /** end of client routes */
      {
        path: "auth",
        name: "user-auth",
        redirect: {
          name: "user-login",
        },
        component: () =>
          import(
            /* webpackChunkName: "grants-portfolio" */
            "../views/admin/auth/authloader.vue"
          ),
        children: [
          {
            path: "login",
            name: "user-login",
            component: () =>
              import(
                /* webpackChunkName: "grants-portfolio" */
                "../views/admin/auth/login.vue"
              ),
          },
          {
            path: "forgot",
            name: "forgot",
            component: () =>
              import(
                /* webpackChunkName: "admin-login" */
                "../views/admin/auth/forgot.vue"
              ),
            meta: {
              title: "Request for password reset",
            },
          },
          {
            path: "checkyouremail",
            name: "mailreset",
            component: () =>
              import(
                /* webpackChunkName: "admin-login" */
                "../views/admin/auth/resetmailsent.vue"
              ),
            meta: {
              title: "Request for password reset",
            },
          },
          {
            path: "newpassword/:token/:email",
            name: "Newpassword",
            component: () =>
              import(
                /* webpackChunkName: "admin-login" */
                "../views/admin/auth/resetpwd.vue"
              ),
            meta: {
              title: "create new password",
            },
          },
        ],
      },
      {
        path: "dashboard",
        name: "dashboard",
        redirect: {
          name: "Admin-homepage",
        },
        component: () =>
          import(
            /* webpackChunkName: "grants-portfolio" */
            "../views/admin/dashboard/index.vue"
          ),
        children: [
          {
            path: "admin",
            name: "Admin-homepage",
            component: () =>
              import(
                /* webpackChunkName: "admin-login" */
                "../views/admin/dashboard/pages/dashboard-home.vue"
              ),
            meta: {
              title: "Aidspan Admin Dashboard",
            },
          },
          {
            path: "new-article",
            name: "new-article",
            component: () =>
              import(
                /* webpackChunkName: "new-article" */
                "../views/admin/dashboard/actions/new-article.vue"
              ),
            meta: {
              title: "create new article",
            },
          },
          {
            path: "new-issue",
            name: "new-issue",
            component: () =>
              import(
                /* webpackChunkName: "new-issue" */
                "../views/admin/dashboard/actions/new-issue.vue"
              ),
            meta: {
              title: "create new issue",
            },
          },
          {
            path: "new-key-doc",
            name: "new-key-doc",
            component: () =>
              import(
                /* webpackChunkName: "new-key-document" */
                "../views/admin/dashboard/actions/key-document.vue"
              ),
            meta: {
              title: "create new Key Document",
            },
          },
          {
            path: "new-publication",
            name: "new-publication",
            component: () =>
              import(
                /* webpackChunkName: "new-publication" */
                "../views/admin/dashboard/actions/new-publication.vue"
              ),
            meta: {
              title: "create new Publication",
            },
          },
          {
            path: "edit-article/:nid",
            props: true,
            params: true,
            name: "edit",
            component: () =>
              import(
                /* webpackChunkName: "edit" */
                "../views/admin/dashboard/pages/EditArticle.vue"
              ),
            meta: {
              title: "edit-article",
            },
          },
        ],
      },
    ],
  },
  { path: "/node/:id", redirect: "/en/c/article/:id" },
  { path: "/fr/node/:id", redirect: "/fr/c/article/:id" },
  { path: "/gfo_article/:query", redirect: "/en/c/search/:query" },
  { path: "/page/:title", redirect: "/en/c" },
  { path: "/taxonomy/term/:tid", redirect: "/en/c/article-tags/:tid" },
  { path: "/user/logout", redirect: "/en/c/editorial" },
  { path: "/apw_gfo_subscribe/nojs/test/form", redirect: "/en/c/subscribe" },
  {
    path: "*",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: "notfound" */
        "../views/client/holder/404.vue"
      ),
    meta: {
      title: "Page not found ",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
