export default {
    /** langs */
    SET_LANG(state, lang) {
        state.activelang = lang
    },
    /** dashboard confs */
    showSideBar(state, value) {
        state.adminDraw = value
    },
    SET_ISSUES(state, payload) {
        state.issues = payload
    },
    SET_OFM(state, payload) {
        state.ofmissues = payload
    },
    SET_EDITION(state, payload) {
        state.edition = payload
    },
    SET_ARTICLE_TAGS(state, allTags) {
        state.allTags = allTags
    },

    SET_MENUS(state, menus) {
        state.menus = menus
    },

    SET_ARTICLE_TAG(state, singleTag) {
        state.singleTag = singleTag
    },
    SET_CURRENT_ISSUE(state, payload) {
        state.currentIssueArticles = payload
    },
    setPage(state, payload) {
        state.issues.page = payload
    },

    SET_ARTICLE(state, payload) {
        state.article = payload
    },

    SET_PUBLICATIONS(state, data) {
        state.publications = data
    },
    SET_PUBLICATIONS_TYPES(state, data) {
        state.publications_types = data
    },
    GET_SUBSCRIBERS(state, subs) {
        state.subs = subs
    },
    GET_USERS(state, users) {
        state.users = users
    },
    SET_CURRENT_USER(state, user) {
        state.currentUser = user
    },
    LOGOUT_USER(state) {
        state.currentUser = []
    },
    SET_ARTICLE_TYPES(state, articletypes) {
        state.articletypes = articletypes
    },
    SET_CURRENT_PAGE(state, data) {
        state.issues.page = data
    },
    SET_CURRENT_PAGE_OFM(state, data) {
        state.ofmissues.page = data
    }
}