import { api } from "../AxiosService"
import router from '../../router';

export const vaults = {
  state: {
    userVaults: [],
    activeVault: {},
    activeVaultKeeps: []
  },
  mutations: {
    setUserVaults(state, uVaults) {
      state.userVaults = uVaults;
    },
    setActiveVault(state, aVault) {
      state.activeVault = aVault;
    },
    setActiveVaultKeeps(state, aVaultKeeps) {
      state.activeVaultKeeps = aVaultKeeps;
    }
  },
  actions: {
    //NOTE Get user vaults
    async getUserVaults({ commit, dispatch }, userData) {
      try {
        let res = await api.get(`vaults/user`, userData);
        commit("setUserVaults", res.data);
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    },
    //NOTE Get keeps by vaultId
    async getKeepsByVaultId({ commit, dispatch }, vaultId) {
      try {
        let res = await api.get(`vaults/${vaultId}/keeps`);
        commit("setActiveVaultKeeps", res.data);

      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    },
    //NOTE Create a new user vault
    async createVault({ commit, dispatch }, payload) {
      try {
        await api.post("vaults", payload.newVault);
        dispatch("getUserVaults", payload.user);
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    },
    //NOTE Delete a user vault
    async deleteVault({ dispatch }, payload) {
      try {
        await api.delete("vaults/" + payload.vaultId);
        dispatch("getUserVaults", payload.user);
      } catch (error) {
        alert(JSON.stringify(error.response.data));
      }
    }
  }
}