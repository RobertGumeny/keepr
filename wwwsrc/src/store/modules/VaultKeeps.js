import { api } from "../AxiosService"

export const vaultKeeps = {
  state: {
  },
  mutations: {
  },
  actions: {
    //NOTE Add keep to a vault
    async createVaultKeep({ commit, dispatch }, vaultKeep) {
      try {
        await api.post("vaultkeeps", vaultKeep);
      } catch (error) {
        console.error(error);
      }
    },
    //NOTE Remove a keep from a vault
    async deleteVaultKeep({ dispatch }, payload) {
      try {
        await api.delete("vaultkeeps/" + payload.vaultKeepId);
        dispatch("getKeepsByVaultId", payload.vaultId)
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    }
  }
}