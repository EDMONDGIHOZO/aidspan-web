import Api from '../services/Api'

export default {
    /** menu actions */
    async loadMenu({ commit }, lang) {
        Api()
            .get(`menus/${lang}`)
            .then((response) => {
                commit('SET_MENUS', response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    async fetchIssues({ commit }, pageNumber) {
        Api()
            .get(`/gfo?page=${pageNumber}`)
            .then(function(response) {
                commit('SET_ISSUES', response.data)
            })
            .catch(function(error) {
                console.log(error)
            })
    },
    async fetchofms({ commit }, pageNumber) {
        Api()
            .get(`/ofm?page=${pageNumber}`)
            .then(function(response) {
                commit('SET_OFM', response.data)
            })
            .catch(function(error) {
                console.log(error)
            })
    },
    async fetchedition({ commit }, nid) {
        Api()
            .get(`/all-issues/${nid}`)
            .then(function(response) {
                commit('SET_EDITION', response.data)
            })
            .catch(function(error) {
                console.log(error)
            })
    },
    async loadArticleTags({ commit }, pageNumber) {
        Api()
            .get('/article-tags/?page=' + pageNumber)
            .then((response) => {
                commit('SET_ARTICLE_TAGS', response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },

    async loadTag({ commit }, tid) {
        const response = await Api().get(`/article-tags/${tid}`)
        commit('SET_ARTICLE_TAG', response.data)
    },

    async loadCurrentIssue({ commit }, lang) {
        const currentIssue = await Api().get(`/current-issue/${lang}`)
        commit('SET_CURRENT_ISSUE', currentIssue.data)
    },

    async getPublications({ commit }) {
        const publications = await Api().get('/publications')
        commit('SET_PUBLICATIONS', publications.data.data)
    },
    async loadPublicationsTypes({ commit }) {
        const types = await Api().get('/publications-types')
        commit('SET_PUBLICATIONS_TYPES', types.data.data)
    },

    async loadArticles({ commit }, article_id) {
        const response = await Api().get(`/articles/${article_id}`)
        commit('SET_ARTICLE', response.data)
    },

    /* logout the user**/

    logoutUser({ commit }) {
        commit('LOGOUT_USER')
    },

    /** setting the current User */
    loginUser({ commit }, user) {
        localStorage.currentUser = JSON.stringify(user)
        commit('SET_CURRENT_USER', user)
    },

    /** start the authentication **/
    loadUsers({ commit }) {
        Api()
            .get('/users')
            .then((res) => {
                {
                    commit('GET_USERS', res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    /*** end if authentication */
    loadSubscribers({ commit }) {
        Api()
            .get('/subscribers')
            .then((res) => {
                {
                    commit('GET_SUBSCRIBERS', res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    /** article types */

    async fetchtypes({ commit }) {
        const articleTypes = await Api().get('articletypes')
        commit('SET_ARTICLE_TYPES', articleTypes.data)
    },

    /** change language */

    changelanguage({ commit }) {
        const lang = localStorage.getItem('lang')
        commit('SET_LANG', lang)
    },
}