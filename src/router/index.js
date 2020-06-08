import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/home",
        name: "aidspan",
        meta: {
            title: "welcome page"
        }
    },
    {
        path: "/aidspan",
        name: "holder",
        meta: {
            title: "Welcome to Aidspan "
        },
        component: () =>
            import (
                /* webpackChunkName: "client-app-holder" */
                "../views/client/holder/clientholder.vue"
            ),
        children: [{
                path: "/about-us",
                name: "about",
                component: () =>
                    import (
                        /* webpackChunkName: "about-us" */
                        "../views/client/pages/About.vue"
                    ),
                meta: {
                    title: "About aidspan"
                }
            },

            {
                path: "/editorial",
                name: "editoral",
                component: () =>
                    import (
                        /* webpackChunkName: "editoral" */
                        "../views/client/pages/Editorial.vue"
                    ),
                meta: {
                    title: "GFO NEWSLETTER"
                }
            },
            {
                path: "/current-issue",
                name: "current-ssie",
                component: () =>
                    import (
                        /* webpackChunkName: "editoral" */
                        "../components/helpers/currentIssue.vue"
                    ),
                meta: {
                    title: "GFO current Issue"
                }
            },
            {
                path: "/home",
                name: "homepage",
                component: () =>
                    import (
                        /* webpackChunkName: "editoral" */
                        "../views/client/pages/Home.vue"
                    ),
                meta: {
                    title: "Welcome to aidspan"
                }
            },

            {
                path: "/article/:article_id",
                name: "article",
                params: true,

                component: () =>
                    import (
                        /* webpackChunkName: "editoral" */
                        "../views/client/pages/Article.vue"
                    ),
                meta: {
                    title: "Gfo Newsletter"
                }
            },
            {
                path: "/methodologies",
                name: "methodologies",
                component: () =>
                    import (
                        /* webpackChunkName: "Methodologies" */
                        "../views/client/pages/Methodologies.vue"
                    ),
                meta: {
                    title: "Data Methodolofies"
                }
            },

            {
                path: "/data-analytics/grants-portfolio",
                name: "Grants-portfolio",
                component: () =>
                    import (
                        /* webpackChunkName: "grants-portfolio" */
                        "../views/client/pages/grants-portfolio.vue"
                    ),
                meta: {
                    title: "grants portfolio"
                }
            },
            {
                path: "/publications",
                name: "Publications",
                component: () =>
                    import (
                        /* webpackChunkName: "grants-portfolio" */
                        "../views/client/pages/Publications.vue"
                    ),
                meta: {
                    title: "Aidspan Data Bank"
                }
            }
        ]
    },

    ////administration routes
    {
        path: "/admin/auth",
        name: "administration",
        component: () =>
            import (
                /* webpackChunkName: "administration" */
                "../views/admin/auth/authloader.vue"
            ),
        children: [{
                path: ":login",
                name: "login",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/auth/login.vue"
                    ),
                meta: {
                    title: "Login as staff Member"
                }
            },
            {
                path: "/forgot",
                name: "forgot",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/auth/forgot.vue"
                    ),
                meta: {
                    title: "Request for password reset"
                }
            },
            {
                path: "/checkyouremail",
                name: "mailreset",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/auth/resetmailsent.vue"
                    ),
                meta: {
                    title: "Request for password reset"
                }
            },
            {
                path: "/newpassword/:token/:email",
                name: "Newpassword",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/auth/resetpwd.vue"
                    ),
                meta: {
                    title: "create new password"
                }
            }
        ]
    },

    ///admin dashboard
    {
        path: "/dashboard",
        name: "dashboard",
        meta: {
            title: "Admin Dashboard"
        },
        component: () =>
            import (
                /* webpackChunkName: "Dashboard" */
                "../views/admin/dashboard/index.vue"
            ),

        children: [{
                path: "/admin",
                name: "Admin-homepage",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/dashboard/pages/dashboard-home.vue"
                    ),
                meta: {
                    title: "Aidspan Admin Dashboard"
                }
            }, {
                path: "/admin/new-article",
                name: "new-article",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/dashboard/actions/new-article.vue"
                    ),
                meta: {
                    title: "create new article"
                }
            },
            {
                path: "/admin/new-issue",
                name: "new-issue",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/dashboard/actions/new-issue.vue"
                    ),
                meta: {
                    title: "create new issue"
                }
            }, {
                path: "/admin/new-publication",
                name: "new-publication",
                component: () =>
                    import (
                        /* webpackChunkName: "admin-login" */
                        "../views/admin/dashboard/actions/new-publication.vue"
                    ),
                meta: {
                    title: "create new publication"
                }
            },
        ]
    },

    {
        path: "/notFound",
        name: "notFound",
        component: () =>
            import (
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

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next("/notFound");
    } else {
        next();
    }
    document.title = to.meta.title;
    next();
});

export default router;