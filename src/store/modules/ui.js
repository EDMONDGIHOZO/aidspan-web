export default {
    state: {
        art_types_search_bar: false,

    },
    getters: {
        SHOW_SEARCH_TYPES: (state) => {
            return state.art_types_search_bar
        },
    },
    mutations: {
        SET_SEARCH_TYPES: (state, payload) => {
            state.art_types_search_bar = payload
        },
    },
    actions: {},
}