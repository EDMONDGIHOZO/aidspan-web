import GlobalFundApi from "../../services/GlobalFundApi";

export default {
  state: {
    diseasesComponents: undefined,
    geographicAreas: undefined,
    grantsCommitments: undefined,
  },
  getters: {
    getComponents: (state) => state.diseasesComponents,
  },
  actions: {
    async fetchComponents({ commit }) {
      try {
        const componentsData = await GlobalFundApi().get("/Components");
        commit("SET_COMPONENTS", componentsData.value);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_COMPONENTS(state, payload) {
      state.diseasesComponents = payload;
    },
  },
};
