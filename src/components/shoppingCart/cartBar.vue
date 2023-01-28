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
        <v-list-item-avatar>
          <v-img :src="addedProducts.imgs[0]"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            >{{ addedProducts.brand }}-{{
              addedProducts.name
            }}</v-list-item-title
          >
          <v-list-item-subtitle
            >$ {{ addedProducts.price }} X
            {{ addedProducts.quantity }}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-cart-remove</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-divider></v-divider>
      <v-card-title class="justify-center pa-2"
        >Cart Total:{{ totalAmount.price }}</v-card-title
      >
    </template>
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
    totalAmount() {
      var val = this.shoppingCartItems.reduce(function (
        previousValue,
        currentValue
      ) {
        return {
          price:
            parseFloat(previousValue.price) + parseFloat(currentValue.price),
        };
      });
      return val;
    },
  },
};
</script>
