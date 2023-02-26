<template>
  <v-navigation-drawer app right v-model="show" :width="400" temporary>
    <template v-slot:prepend>
      <v-list-item class="accent">
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
        v-for="addedProducts in shoppingCartItems"
        :key="addedProducts.timestamp"
        class="rounded-xl ma-3 pa-2"
        :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-3'"
      >
        <v-list-item-avatar size="100">
          <v-img :src="addedProducts.imgs[0]"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-bold"
            >{{ addedProducts.brand }}-{{
              addedProducts.name
            }}</v-list-item-title
          >
          <v-list-item-subtitle class="font-weight-bold"
            >$ {{ addedProducts.price }} X
            {{ addedProducts.quantity }}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="removeFromCart(addedProducts)">
            <v-icon color="red lighten-1">mdi-cart-remove</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <template v-slot:append v-if="totalAmount">
      <v-divider></v-divider>

      <v-card-title class="justify-center pa-2 accent"
        >Cart Total: $ {{ totalAmount.price }}</v-card-title
      >
      <v-card-title
        class="justify-center pa-2 accent darken-1"
        @click="routeToCart"
        style="cursor: pointer"
      >
        <v-icon class="mr-1">mdi-cart</v-icon>Checkout</v-card-title
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
      if (this.shoppingCartItems.length === 1) {
        return {
          price:
            this.shoppingCartItems[0].quantity *
            this.shoppingCartItems[0].price,
        };
      } else if (this.shoppingCartItems.length > 1) {
        var val = this.shoppingCartItems.reduce(function (
          previousValue,
          currentValue
        ) {
          let prevPrice =
            parseFloat(previousValue.price) *
            parseFloat(previousValue.quantity || 1);
          let currentPrice =
            parseFloat(currentValue.price) *
            parseFloat(currentValue.quantity || 1);
          return {
            price: parseFloat(prevPrice + currentPrice).toFixed(2),
          };
        });
        return val;
      } else return 0;
    },
  },
  methods: {
    removeFromCart(item) {
      this.shoppingCartItems = this.shoppingCartItems.filter(function (obj) {
        return item.timestamp !== obj.timestamp;
      });

      this.$store.dispatch("setShoppingCartData", this.shoppingCartItems);
    },
    routeToCart() {
      if (this.$router.currentRoute.path !== "/cart") {
        this.$router.push({
          path: "/cart",
        });
      } else {
        this.show = !this.show;
      }
    },
  },
};
</script>
<style scoped>
::v-deep ::-webkit-scrollbar {
  width: 5px;
}
::v-deep ::-webkit-scrollbar-thumb {
  background: rgb(145, 145, 145);
  border-radius: 20px;
}
</style>
