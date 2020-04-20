import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/aidspan',
    name: 'holder',
    meta: {
      title: 'Welcome to Aidspan ',
    },
    component: () =>
      import(
        /* webpackChunkName: "client-app-holder" */ '../views/client/holder/clientholder.vue'
      ),
    children: [
      {
        path: '/about-us',
        name: 'about',
        component: () =>
          import(
            /* webpackChunkName: "about-us" */ '../views/client/pages/About.vue'
          ),
        meta: {
          title: 'About aidspan',
        },
      },

      {
        path: '/editorial',
        name: 'editoral',
        component: () =>
          import(
            /* webpackChunkName: "editoral" */ '../views/client/pages/Editorial.vue'
          ),
        meta: {
          title: 'GFO NEWSLETTER',
        },
      },
      {
        path: '/home',
        name: 'homepage',
        component: () =>
          import(
            /* webpackChunkName: "editoral" */ '../views/client/pages/Home.vue'
          ),
        meta: {
          title: 'Welcome to aidspan',
        },
      },

      {
        path: '/article',
        name: 'article-view-page',
        component: () =>
          import(
            /* webpackChunkName: "editoral" */ '../views/client/pages/Article.vue'
          ),
        meta: {
          title: 'Current Article View',
        },
      },
      {
        path: '/methodologies',
        name: 'methodologies',
        component: () =>
          import(
            /* webpackChunkName: "Methodologies" */ '../views/client/pages/Methodologies.vue'
          ),
        meta: {
          title: 'Data Methodolofies',
        },
      },

      {
        path: '/data-analytics/grants-portfolio',
        name: 'Grants-portfolio',
        component: () =>
          import(
            /* webpackChunkName: "grants-portfolio" */ '../views/client/pages/grants-portfolio.vue'
          ),
        meta: {
          title: 'grants portfolio',
        },
      },
    ],
  },

  ////administration routes
  {
    path: '/admin/auth',
    name: 'administration',
    component: () =>
      import(
        /* webpackChunkName: "administration" */ '../views/admin/auth/authloader.vue'
      ),
    children: [
      {
        path: '/admin/auth/:login',
        name: 'Login',
        component: () =>
          import(
            /* webpackChunkName: "admin-login" */ '../views/admin/auth/login.vue'
          ),
        meta: {
          title: 'Login as staff Member',
        },
      },
      {
        path: '/admin/auth/:login',
        name: 'Login',
        component: () =>
          import(
            /* webpackChunkName: "admin-login" */ '../views/admin/auth/login.vue'
          ),
        meta: {
          title: 'Login as staff Member',
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
