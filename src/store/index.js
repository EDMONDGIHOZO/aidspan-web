import Vue from 'vue'
import Vuex from 'vuex'
//store functionalities
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
/** import modules */
import uimods from './modules/ui'
import gfmods from './modules/globalFund'


Vue.use(Vuex)

const store = new Vuex.Store({
    /** modules */
    /** end modules */
    actions,
    getters,
    mutations,
    state,
    modules: {
        ui: uimods,
        globalFund: gfmods,
    },
})

export default store