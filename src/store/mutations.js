export default {
    /** dashboard confs */
    showSideBar(state, value) {
        state.adminDraw = value
    },
    SET_ISSUES(state, issues) {
        state.issues = issues;
    },
    SET_CURRENT_ISSUE(state, payload) {
        state.currentIssueArticles = payload;
    },
    setPage(state, payload) {
        state.issues.page = payload;
    },

    SET_ARTICLE(state, payload) {
        state.article = payload;
    },

    SET_PUBLICATIONS(state, data) {
        state.publications = data;
    },
    SET_PUBLICATIONS_TYPES(state, data) {
        state.publications_types = data;
    },
    GET_SUBSCRIBERS(state, subs) {
        state.subs = subs;
    },
    GET_USERS(state, users) {
        state.users = users;
    },
    SET_CURRENT_USER(state, user) {
        state.currentUser = user
    },
    LOGOUT_USER(state) {
        state.currentUser = []
    }
};