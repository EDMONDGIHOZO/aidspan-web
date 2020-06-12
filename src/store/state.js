//import axios from 'axios'

export default {
    /** get dynamic data from server  */
    issues: [],
    issue_article: {},
    currentIssueArticles: {},
    article: {},
    articletypes: {},
    article_data: null,
    publications: {},
    publications_types: {},
    subs: {},
    users: {},
    subscriber: {},
    currentUser: {},
    allTags: {},
    singleTag: [],
    adminMenus: [{
            id: 1,
            title: 'Dashboard',
            icon: 'mdi-home',
            lang: 'en',
            route: '/admin'
        },
        {
            id: 2,
            title: 'GFO Newsletter',
            icon: 'mdi-email-newsletter',
            lang: 'en',
            route: '/admin/gfos'
        },
        {
            id: 3,
            title: 'Publications',
            icon: 'mdi-receipt',
            lang: 'en',
            route: '/admin/publications'
        },
        {
            id: 4,
            title: 'Documents',
            icon: 'mdi-file-document',
            lang: 'en',
            route: '/admin/documents'
        },
        {
            id: 5,
            title: 'Careers',
            icon: 'mdi-briefcase',
            lang: 'en',
            route: '/admin/careers '
        },
        {
            id: 6,
            title: 'Donors',
            icon: 'mdi-seed',
            lang: 'en',
            route: '/admin/donors '
        },
    ],

    actionMenus: [{
            id: 1,
            title: 'new issue',
            lang: 'en',
            route: '/admin/new-issue'
        },
        {
            id: 2,
            title: 'new article',
            lang: 'en',
            route: '/admin/new-article'
        },
        {
            id: 3,
            title: 'new publication',
            lang: 'en',
            route: '/admin/new-publication'
        },
    ],
    settingsMenu: [{
            id: 1,
            title: 'Users',
            icon: 'mdi-account-group',
            lang: 'en',
            route: '/admin/new-issues'
        },
        {
            id: 2,
            title: 'Basic Site Info',
            icon: 'mdi-alert-circle-check',
            lang: 'en',
            route: '/admin/new-article'
        },
    ],
    /** end of dyanamic data from server */

    icons: [{
            icon: 'mdi-facebook',
            name: 'facebook',
            link: 'https://www.facebook.com/Aidspan1/',
        },
        {
            icon: 'mdi-gmail',
            name: 'gmail',
            link: 'mailto:info@gmail.com',
        },
        {
            icon: 'mdi-twitter',
            name: 'twitter',
            link: 'https://twitter.com/aidspan',
        },
        {
            icon: 'mdi-linkedin',
            name: 'linkedin',
            link: 'https://www.linkedin.com/company/aidspan',
        },
    ],

    basicInfo: [{
            icon: 'mdi-phone',
            title: '+254 (0)774-135984'
        },
        {
            icon: 'mdi-pin',
            title: 'P.O. Box 66869 - 00800,Nairobi, Kenya',
        },
        {
            icon: 'mdi-email',
            title: 'info@aidspan.org'
        },
    ],
    menus: [{
            action: 'mdi-eye',
            title: 'GFO',
            route: '/editorial',
            submenus: [{
                title: 'current issue',
                route: '/editorial/#current-issue-editorial',
            }, ],
        },
        {
            action: 'mdi-lightbulb-on',
            title: 'About Aidspan',
            route: '/about-us',
            active: true,
            submenus: [{
                title: 'Our History',
                route: '/about-us/#history',
            }, ],
        },

        {
            action: 'mdi-google-analytics',
            title: 'Data Analytics',
            route: '/methodologies',
            submenus: [{
                    title: 'Grant Portfolio',
                    route: '/data-analytics/grants-portfolio',
                },
                {
                    title: 'Global Fund Donors',
                    route: '/gf-donors',
                },
                {
                    title: 'Grant-performance-analysis',
                    route: '/gp-analysis',
                },
            ],
        },

        {
            action: 'mdi-newspaper-variant',
            title: 'Publications',
            route: '/publications',
            submenus: [{
                    title: 'Reports',
                    route: '/publications/#reports',
                },
                {
                    title: 'Guide',
                    route: '/publications/guide',
                },
            ],
        },
    ],
    slides: [{
            imageUrl: 'https://www.theglobalfund.org/media/9602/media-hero-2020-04-30.jpg',
            language: 'en',
            caption: 'Women Leading Fight',
            id: 'adfhad',
        },
        {
            imageUrl: 'https://www.theglobalfund.org/media/7311/where-programs-are_en.png',
            language: 'en',
            caption: 'Map for aidspan works',
            id: 'adfhasdd',
        },
    ],
    logo: require('@/assets/images/en/logo_en.png'),
    adminlogo: require('@/assets/images/en/admin-logo.png'),

    appTitle: [{
        lang: 'en',
        title: 'Independent observer of the Global fund',
    }, ],
    appIcon: require('@/assets/images/common/aid_icon.png'),

    quicklinks: [{
            title: 'Staff web',
            route: '/dashboard'
        },
        {
            title: 'Key Documents',
            route: 'aidspan/key-documents'
        },
        {
            title: 'Galleries',
            route: 'aidspan/galleries'
        },
        {
            title: 'Careers',
            route: 'aidspan/careers'
        },
        {
            title: 'Sitemap',
            route: 'aidspan/sitemap'
        },
    ],

    epidemics: [{
            ep_name: 'Tuberclosis',
            ep_icon: require('@/assets/images/common/tuberclosis.png'),
            ep_id: 'safda3',
            class: 'T',
        },
        {
            ep_name: 'AIDS',
            ep_icon: require('@/assets/images/common/aids.png'),
            ep_id: 'adfawe',
            class: 'A',
        },
        {
            ep_name: 'Malaria',
            ep_icon: require('@/assets/images/common/maralia.png'),
            ep_id: '213fjdsl',
            class: 'M',
        },
    ],

    /// template article
    fake_article: {
        title: 'Is it possible to contain and treat widespread COVID-19 infection in Africa?',
        secondTitle: 'Can African countries attempts to “flatten the curve” work, especially in the presence of large numbers of people living with HIV and TB?',
        abstract: 'On March 16, at the World Health Organization’s most recent COVID-19 press conference in Geneva, WHO Director-General Dr. Tedros Adhanom Ghebreyesus said: “As the virus moves to low-income countries, were deeply concerned about the impact it could have among populations with high HIV prevalence, or among malnourished children.”',
        date: '18 mar 2020',
        author: 'Adele Sulcas',
        number: 1,
        type: 'news',
        tags: [{
                title: 'corona Virus',
                route: 'tags'
            },
            {
                title: 'Pendemic',
                route: 'tags'
            },
            {
                title: 'Africa',
                route: 'tags'
            },
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu placerat magna, eu condimentum lorem. Mauris gravida tortor quam, aliquam gravida urna semper eget. Etiam consectetur justo et risus fringilla, a elementum urna mattis. Donec et luctus elit. Quisque at neque sit amet mauris ultrices posuere nec et lacus. Quisque purus felis, volutpat viverra commodo a, feugiat eget orci. Ut venenatis fermentum felis, ut feugiat urna rhoncus a. Morbi nec iaculis libero, in placerat augue. Sed sed turpis hendrerit, suscipit metus vel, consequat augue. Maecenas sagittis varius lectus nec maximus.',
    },
    Areas: [],
    Diseases: [],
    Countries: [],
}