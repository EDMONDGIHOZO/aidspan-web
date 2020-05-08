import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/home',
        name: 'aidspan',
        meta: {
            title: 'welcome page'
        },
    },
    {
        path: '/aidspan',
        name: 'holder',
        meta: {
            title: 'Welcome to Aidspan ',
        },
        component: () =>
            import (
                /* webpackChunkName: "client-app-holder" */
                '../views/client/holder/clientholder.vue'
            ),
        children: [{
                path: '/about-us',
                name: 'about',
                component: () =>
                    import (
                        /* webpackChunkName: "about-us" */
                        '../views/client/pages/About.vue'
                    ),
                meta: {
                    title: 'About aidspan',
                },
            },

            {
                path: '/editorial',
                name: 'editoral',
                component: () =>
                    import (
                        /* webpackChunkName: "editoral" */
                        '../views/client/pages/Editorial.vue'
                    ),
                meta: {
                    title: 'GFO NEWSLETTER',
                },
            },
            {
                path: '/home',
                name: 'homepage',
                component: () =>
                    import (
                        /* webpackChunkName: "editoral" */
                        '../views/client/pages/Home.vue'
                    ),
                meta: {
                    title: 'Welcome to aidspan',
                },
            },

            {
                path: '/article',
                name: 'article-view-page',
                component: () =>
                    import (
                        /* webpackChunkName: "editoral" */
                        '../views/client/pages/Article.vue'
                    ),
                meta: {
                    title: 'Current Article View',
                },
            },
            {
                path: '/methodologies',
                name: 'methodologies',
                component: () =>
                    import (
                        /* webpackChunkName: "Methodologies" */
                        '../views/client/pages/Methodologies.vue'
                    ),
                meta: {
                    title: 'Data Methodolofies',
                },
            },

            {
                path: '/data-analytics/grants-portfolio',
                name: 'Grants-portfolio',
                component: () =>
                    import (
                        /* webpackChunkName: "grants-portfolio" */
                        '../views/client/pages/grants-portfolio.vue'
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
            import (
                /* webpackChunkName: "administration" */
                '../views/admin/auth/authloader.vue'
            ),
        children: [{
                path: ':login',
                name: 'login',
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        '../views/admin/auth/login.vue'
                    ),
                meta: {
                    title: 'Login as staff Member',
                },
            },
            {
                path: '/forgot',
                name: 'forgot',
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        '../views/admin/auth/forgot.vue'
                    ),
                meta: {
                    title: 'Request for password reset',
                },
            },
        ],
    },

    ///admin dashboard
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ( /* webpackChunkName: "Dashboard" */ "../views/admin/dashboard/index.vue"),
        meta: {
            title: 'Aidspan - Admin Dashboard'
        }
    },


    {
        path: '/notFound',
        name: 'notFound',
        component: () =>
            import (
                /* webpackChunkName: "notfound" */
                '../views/client/holder/404.vue'
            ),
        meta: {
            title: "Page not found "
        }

    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next('/notFound')
    } else {
        next()
    }
    document.title = to.meta.title
    next()
})

export default router