import store from "@/store/index";
import router from "../router";
import { decrypt } from "../services/encryptDecrypt";
export function initializeSession() {
  if (
    window.$cookies.get("uauth") !== null &&
    JSON.stringify(window.$cookies.get("uauth")) !== JSON.stringify({})
  ) {
    var decrypted = decrypt(window.$cookies.get("uauth"));
    store.dispatch("setCurrentUser", decrypted);
  }
  let currentUserSession = store.getters.currentUser;
  if (JSON.stringify(currentUserSession) === JSON.stringify({})) {
    if (router.currentRoute.path !== "/") {
      router.push({
        path: "/",
      });
    }
  }
}
export function signOut() {
  window.$cookies.remove("uauth");
  store.dispatch("setCurrentUser", {});
  if (router.currentRoute.path !== "/") {
    router.push({
      path: "/",
    });
  }
}
