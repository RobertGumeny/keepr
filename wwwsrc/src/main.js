import Vue from "vue";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import { Auth0Plugin, onAuth } from "@bcwdev/auth0-vue";
import { domain, clientId, audience } from "./authConfig";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
