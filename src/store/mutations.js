export default {
    SET_ISSUES(state, issues) {
        state.issues = issues
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
}