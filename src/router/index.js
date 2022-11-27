import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { signOut } from "../services/sessionManagement";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
export default router;
router.beforeEach((to, from, next) => {
  let isUnauthorized =
    window.$cookies.get("uauth") === null &&
    JSON.stringify(window.$cookies.get("uauth")) === JSON.stringify({});
  if (to.matched.some((record) => record.meta.authorized)) {
    if (isUnauthorized) {
      signOut();
    } else {
      if (to.matched.some((record) => record.meta.authorized)) {
        if (!isUnauthorized) {
          next();
        } else next({ path: from.path });
      }
    }
  } else {
    next();
  }
});
router.afterEach((to) => {
  document.title = to.name !== null ? to.name : "Vue And Vuetify";
});
