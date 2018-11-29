import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from "./App.vue";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vue-stock-trader-40050.firebaseio.com/";

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.filter("currency", value => "$" + value.toLocaleString());

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
