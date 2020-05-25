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
    //NOTE Get all keeps
    async getKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps");
        commit("setKeeps", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    //NOTE Get keeps by user Id
    async getUserKeeps({ commit, dispatch }, userData) {
      try {
        let res = await api.get(`keeps/user`, userData);
        commit("setUserKeeps", res.data)

      } catch (error) {
        console.error(error)
      }
    },
    //NOTE Create a new keep
    async createKeep({ commit, dispatch }, payload) {
      try {
        await api.post("keeps", payload.newKeep);
        dispatch("getKeeps");
        dispatch("getUserKeeps", payload.user);

      } catch (error) {
        alert(JSON.stringify(error.response))
      }
    },
    //NOTE Delete a keep (back-end will only allow it to be deleted if it is private)
    async deleteKeep({ dispatch }, payload) {
      try {
        await api.delete("keeps/" + payload.keepId);
        dispatch("getUserKeeps", payload.user);
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    },
    //NOTE Add keep to vault

  }
}