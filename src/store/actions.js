import Api from "../services/Api"

export default {
    async loadIssues({ commit }, pageNumber) {
        let response = await Api().get('/all-issues/?page=' + pageNumber);
        commit('SET_ISSUES', response.data);
    },

    async loadCurrentIssue({ commit }) {
        const currentIssue = await Api().get('/current-issue');
        commit('SET_CURRENT_ISSUE', currentIssue.data)
    },

    async loadArticles({ commit }, article_id) {
        const response = await Api().get(`/articles/${article_id}`)
        commit('SET_ARTICLE', response.data)
    },
}