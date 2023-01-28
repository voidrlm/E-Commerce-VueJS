<template>
  <v-navigation-drawer app right v-model="show" hide-overlay :width="400">
    <template v-slot:prepend>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center">
            <v-icon class="mr-2">mdi-cart</v-icon>Shopping
            Cart</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>
    <v-list-item v-if="shoppingCartItems.length === 0">
      <v-list-item-content>
        <v-list-item-title class="text-center text-wrap">
          You have no added items in your cart</v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-list v-else>
      <v-list-item
        v-for="(addedProducts, index) in shoppingCartItems"
        :key="index"
      >
        <v-list-item-icon>
          <v-icon>{{ addedProducts.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ addedProducts.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: { showShoppingCart: Boolean },
  data() {
    return {
      shoppingCartItems:
        JSON.parse(localStorage.getItem("shoppingCartItems")) || [],
    };
  },
  watch: {
    showShoppingCart() {
      this.shoppingCartItems =
        JSON.parse(localStorage.getItem("shoppingCartItems")) || [];
    },
  },
  computed: {
    show: {
      get: function () {
        return this.showShoppingCart;
      },
      set: function (newValue) {
        this.$emit("hide", newValue);
      },
    },
  },
};
</script>
