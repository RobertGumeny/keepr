import { api } from "../AxiosService"

export const vaults = {
  state: {
    userVaults: [],
    activeVault: {}
  },
  mutations: {
    setUserVaults(state, uVaults) {
      state.userVaults = uVaults;
    },
    setActiveVault(state, aVault) {
      state.activeVault = aVault;
    }
  },
  actions: {
    async getUserVaults({ commit, dispatch }, userData) {
      let res = await api.get(`vaults/user`, userData);
      commit("setUserVaults", res.data)
    },
    async createVault({ commit, dispatch }, payload) {
      await api.post("vaults", payload.newVault);
      dispatch("getUserVaults", payload.user);
    }
  }
}