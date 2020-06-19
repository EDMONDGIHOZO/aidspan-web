import Vue from 'vue'
import Vuex from 'vuex'
//store functionalities
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
/** import modules */


Vue.use(Vuex)

const store = new Vuex.Store({
    /** modules */
    /** end modules */
    actions,
    getters,
    mutations,
    state,
})

export default store