import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shoppingCart: JSON.parse(localStorage.getItem("shoppingCartItems")) || [],
  },
  mutations: {
    setShoppingCartData(state, shoppingCart) {
      return (state.shoppingCart = shoppingCart);
    },
  },
  actions: {
    setShoppingCartData(context, shoppingCart) {
      localStorage.setItem("shoppingCartItems", JSON.stringify(shoppingCart));
      context.commit("setShoppingCartData", shoppingCart);
    },
  },
  getters: {
    shoppingCart: (state) => state.shoppingCart,
  },
});

export default store;
