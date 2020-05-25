import Vue from "vue";
import Vuex from "vuex";
import { api } from "./AxiosService.js"
import { keeps } from "./modules/Keeps"
import { vaults } from "./modules/Vaults"
import { vaultKeeps } from "./modules/VaultKeeps"
import Axios from "axios";
import router from "../router";


Vue.use(Vuex);

// NOTE Breaking down store into different modules (Keeps, Vaults, )
export default new Vuex.Store({
  modules: {
    keeps,
    vaults,
    vaultKeeps
  },
  state: {},
  mutations: {},
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    }
  }
});
