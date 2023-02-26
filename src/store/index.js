import Vue from "vue";
import Vuex from "vuex";
import { encrypt } from "../services/encryptDecrypt";
import VueCookies from "vue-cookies";
Vue.use(Vuex);
Vue.use(VueCookies);
const store = new Vuex.Store({
  state: {
    currentUser: {},
    shoppingCart: JSON.parse(localStorage.getItem("shoppingCartItems")) || [],
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      return (state.currentUser = currentUser);
    },
    setShoppingCartData(state, shoppingCart) {
      return (state.shoppingCart = shoppingCart);
    },
  },

  actions: {
    setCurrentUser(context, currentUser) {
      window.$cookies.set("uauth", encrypt(currentUser));
      if (context.currentUser === currentUser) return;
      context.commit("setCurrentUser", currentUser);
    },
    setShoppingCartData(context, shoppingCart) {
      localStorage.setItem("shoppingCartItems", JSON.stringify(shoppingCart));
      context.commit("setShoppingCartData", shoppingCart);
    },

    resetState() {
      // context.dispatch("setCurrentUser", {});
    },
  },
  getters: {
    currentUser: (state) => state.currentUser,
    shoppingCart: (state) => state.shoppingCart,
  },
});

export default store;
