import { api } from "../AxiosService"

export const keeps = {
  state: {
    publicKeeps: [],
    userKeeps: [],
    activeKeep: {}
  },
  mutations: {
    setKeeps(state, pKeeps) {
      state.publicKeeps = pKeeps;
    },
    setUserKeeps(state, uKeeps) {
      state.userKeeps = uKeeps;
    },
    setActiveKeep(state, aKeep) {
      state.activeKeep = aKeep;
    }
  },
  actions: {
    async getKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps");
        commit("setKeeps", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getUserKeeps({ commit, dispatch }, userData) {
      let res = await api.get(`keeps/user`, userData);
      commit("setUserKeeps", res.data)
    },
    async createKeep({ commit, dispatch }, payload) {
      await api.post("keeps", payload.newKeep);
      dispatch("getKeeps");
      dispatch("getUserKeeps", payload.user);
    }
  }
}