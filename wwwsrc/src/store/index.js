import Vue from "vue";
import Vuex from "vuex";
import { api } from "./AxiosService.js"
import { keeps } from "./modules/Keeps"
import { vaults } from "./modules/Vaults"
import Axios from "axios";
import router from "../router";


// NOTE this is imported from AxiosService
// let api = Axios.create({
//   baseURL: baseUrl + "api/",
//   timeout: 3000,
//   withCredentials: true
// });


Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

// NOTE Breaking down store into different modules (Keeps, Vaults, )
export default new Vuex.Store({
  modules: {
    keeps,
    vaults
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
