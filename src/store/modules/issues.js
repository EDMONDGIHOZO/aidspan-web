import axios from 'axios'


const issues = {
  namespaced: true,

  state: {
    //keep the data
    issues: []
  },
  actions: {
    loadIssues({commit}){
      axios
      .get('http://localhost:3331/api/v1/all-issues')
      .then(res => {
        commit('SET_ISSUES', res.data)
      })
      .catch(error =>
        console.log (error)
      )
    }
  },
  mutations: {
    SET_ISSUES(state,data){
      state.issues = data
    }
  }
}


export default issues
