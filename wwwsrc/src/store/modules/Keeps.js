import { api } from "../AxiosService"

export const keeps = {
  state: {
    keepMessage: "Hi I am coming from the Keep Module",
    publicKeeps: [],
    userKeeps: []
  },
  mutations: {
    setKeeps(state, keeps) {
      state.publicKeeps = keeps;
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
    async createKeep({ commit, dispatch }, newKeep) {
      await api.post("keeps", newKeep);
      dispatch("getKeeps");
    }
  }
}