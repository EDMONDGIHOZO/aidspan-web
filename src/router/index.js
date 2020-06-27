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
    redirect: "/en/c"
  },
  {
    path: "/:lang",
    component: AppHolder,
    beforeEnter(to, from, next) {
      const lang = to.params.lang;
      if (!["en", "fr"].includes(lang)) return next("en" + "/c");
      if (i18n.locale === lang) return next();
      import(`@/locales/${lang}.json`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default || msgs);
        i18n.locale = lang;
        document.title = to.meta.title;
        return next();
      });
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
              title: "Welcome to Aidspan"
            }
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
              title: "About aidspan"
            }
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
              title: "GFO NEWSLETTER"
            }
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
              title: "OFM"
            }
          },
          {
            path: "gallery",
            name: "Gallery",
            component: () =>
              import(
                /* webpackChunkName: "editoral" */
                "../views/client/pages/gallery.vue"
              ),
            meta: {
              title: "AIDSPAN GALLERY"
            }
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
              title: "GFO current Issue"
            }
          },
          {
            path: "edition/:nid",
            name: "edition",
            component: () =>
              import(
                /* webpackChunkName: "single-edition" */
                "../components/pages/client/singleEdition.vue"
              ),
            meta: {
              title: "Edition"
            }
          },
          {
            path: "article-tags/:tid",
            name: "articletags",
            props: true,
            component: () =>
              import(
                /* webpackChunkName: "editoral" */
                "../views/client/pages/articletags.vue"
              ),
            meta: {
              title: "GFO TAGS"
            }
          },
          {
            path: "article/:article_id",
            name: "article",
            props: true,
            params: true,

            component: () =>
              import(
                /* webpackChunkName: "editoral" */
                "../views/client/pages/Article.vue"
              ),
            meta: {
              title: "Gfo Newsletter"
            }
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
              title: "Data Methodolofies"
            }
          },
          {
            path: "data-analytics/grants-portfolio",
            name: "Grants-portfolio",
            component: () =>
              import(
                /* webpackChunkName: "grants-portfolio" */
                "../views/client/pages/grants-portfolio.vue"
              ),
            meta: {
              title: "grants portfolio"
            }
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
              title: "Aidspan Data Bank"
            }
          }
        ]
      },
      /** end of client routes */
      {
        path: "auth",
        name: "user-auth",
        redirect: {
          name: "user-login"
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
              )
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
              title: "Request for password reset"
            }
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
              title: "Request for password reset"
            }
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
              title: "create new password"
            }
          }
        ]
      },
      {
        path: "dashboard",
        name: "dashboard",
        redirect: {
          name: "Admin-homepage"
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
              title: "Aidspan Admin Dashboard"
            }
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
              title: "create new article"
            }
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
              title: "create new issue"
            }
          },
          {
            path: "new-image",
            name: "new-image",
            component: () =>
              import(
                /* webpackChunkName: "image-upload" */
                "../components/tools/photoUpload.vue"
              ),
            meta: {
              title: "PHOTO UPLOAD"
            }
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: "notfound" */
        "../views/client/holder/404.vue"
      ),
    meta: {
      title: "Page not found "
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});

export default router;
