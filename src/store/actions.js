import Api from "../services/Api";


export default {

    async loadIssues({
        commit
    }, pageNumber) {
        Api()
            .get("/all-issues/?page=" + pageNumber)
            .then(response => {
                commit('SET_ISSUES', response.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    async loadArticleTags({
        commit
    }, pageNumber) {
        Api()
            .get("/article-tags/?page=" + pageNumber)
            .then(response => {
                commit('SET_ARTICLE_TAGS', response.data)
            })
            .catch(error => {
                console.log(error)
            });
    },

    async loadTag({
        commit
    }, tid) {
        const response = await Api().get(`/article-tags/${tid}`);
        commit("SET_ARTICLE_TAG", response.data);
    },

    async loadCurrentIssue({
        commit
    }) {
        const currentIssue = await Api().get("/current-issue");
        commit("SET_CURRENT_ISSUE", currentIssue.data);
    },
    async getPublications({
        commit
    }) {
        const publications = await Api().get("/publications");
        commit("SET_PUBLICATIONS", publications.data.data);
    },
    async loadPublicationsTypes({
        commit
    }) {
        const types = await Api().get("/publications-types");
        commit("SET_PUBLICATIONS_TYPES", types.data.data);
    },

    async loadArticles({
        commit
    }, article_id) {
        const response = await Api().get(`/articles/${article_id}`);
        commit("SET_ARTICLE", response.data);
    },


    /* logout the user**/

    logoutUser({
        commit
    }) {
        commit('LOGOUT_USER')
    },

    /** setting the current User */
    loginUser({
        commit
    }, user) {
        localStorage.currentUser = JSON.stringify(user)
        commit('SET_CURRENT_USER', user)
    },

    /** start the authentication **/
    loadUsers({
        commit
    }) {
        Api()
            .get("/users")
            .then(res => {
                {
                    commit("GET_USERS", res.data.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    },
    /*** end if authentication */
    loadSubscribers({
        commit
    }) {
        Api()
            .get("/subscribers")
            .then(res => {
                {
                    commit("GET_SUBSCRIBERS", res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    },
    /** article types */

    async fetchtypes({
        commit
    }) {
        const articleTypes = await Api().get('articletypes');
        commit('SET_ARTICLE_TYPES', articleTypes.data)

    }
};