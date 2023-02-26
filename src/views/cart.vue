<template>
  <div>
    <v-container fluid>
      <p class="text-h5 font-weight-medium text-center pa-1">SHOPPING CART</p>

      <v-row v-if="$store.getters.shoppingCart.length !== 0">
        <v-col :cols="12" md="8" sm="12">
          <v-card class="rounded-xl">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center"></th>
                    <th class="text-center">PRICE</th>
                    <th class="text-center">QUANTITY</th>
                    <th class="text-center">TOTAL</th>
                    <th class="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(product, index) in $store.getters.shoppingCart"
                    :key="index"
                  >
                    <td class="text-center">
                      <v-list-item>
                        <v-list-item-avatar size="80">
                          <v-img
                            :src="product.imgs[0]"
                            @click="showProductView(product)"
                            style="cursor: pointer"
                          ></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content
                          @click="showProductView(product)"
                          style="cursor: pointer"
                        >
                          <v-list-item-title
                            >{{ product.brand }}
                          </v-list-item-title>
                          <v-list-item-subtitle>{{
                            product.name
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <td class="text-center">
                      $
                      {{ parseFloat(product.price).toFixed(2) }}
                    </td>
                    <td class="text-center">
                      {{ product.quantity }}
                    </td>
                    <td class="text-center">
                      $
                      {{
                        parseFloat(product.price * product.quantity).toFixed(2)
                      }}
                    </td>
                    <td class="text-center">
                      <v-btn
                        icon
                        @click="removeFromCart(product)"
                        class="red--text"
                        ><v-icon>mdi-close-circle</v-icon></v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table></v-card
          >
        </v-col>
        <v-col :cols="12" md="4" sm="12">
          <v-card class="rounded-xl pa-3">
            <p class="text-h5 text-center">Order Summary</p>
            <p class="caption text-center">
              Shipping and additional costs are calculated based on values you
              have entered.
            </p>
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>Order Subtotal</td>
                    <td class="text-right" style="width: 100px">
                      $ {{ totalAmount["price"] }}
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping Charges</td>
                    <td class="text-right" style="width: 100px">
                      $ {{ parseFloat(shippingCharges).toFixed(2) }}
                    </td>
                  </tr>

                  <tr>
                    <td>Total</td>
                    <td class="text-right" style="width: 100px">
                      <b>$ {{ totalAmount["price"] + shippingCharges }}</b>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-center">
              <v-btn
                elevation="0"
                class="accent rounded-xl mt-5"
                :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                >PROCEED TO PAY</v-btn
              >
            </div></v-card
          >
        </v-col>
      </v-row>
      <div v-else class="text-center text-h6">
        <div>You have no added items in your cart.</div>
        <v-btn class="accent ma-5 rounded-xl" large @click="routeToDashboard"
          >Start shopping</v-btn
        >
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "products-component",
  data: () => ({ shippingCharges: 0 }),
  computed: {
    totalAmount() {
      let shoppingCartItems = this.$store.getters.shoppingCart;

      var val = shoppingCartItems.reduce(function (
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
    },
  },
  methods: {
    routeToDashboard() {
      if (this.$router.currentRoute.path !== "/dashboard") {
        this.$router.push({
          path: "/dashboard",
        });
      }
    },
    showProductView(product) {
      this.$router.push({
        path: "/product/" + product.id,
      });
    },
    removeFromCart(product) {
      let shoppingCartItems = this.$store.getters.shoppingCart.filter(function (
        item
      ) {
        return product.timestamp !== item.timestamp;
      });
      this.$store.dispatch("setShoppingCartData", shoppingCartItems);
    },
  },
};
</script>
<style lang="scss">
tbody {
  tr:hover {
    background-color: transparent !important;
  }
}
</style>
