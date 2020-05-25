import { api } from "../AxiosService"

export const vaultKeeps = {
  state: {
  },
  mutations: {
  },
  actions: {
    async createVaultKeep({ commit, dispatch }, vaultKeep) {
      debugger;
      try {
        await api.post("vaultkeeps", vaultKeep);
      } catch (error) {
        console.error(error);
      }
    }
  }
}