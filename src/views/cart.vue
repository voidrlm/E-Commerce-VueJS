<template>
  <div>
    <v-container>
      <p class="text-h5 font-weight-light text-center pa-4">SHOPPING CART</p>

      <v-row>
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
                    <td class="text-right" style="width: 50px">$160.00</td>
                  </tr>
                  <tr>
                    <td>Shipping Charges</td>
                    <td class="text-right" style="width: 50px">$10.00</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td class="text-right" style="width: 50px">$5.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td class="text-right" style="width: 50px">
                      <b>$175.00</b>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-center">
              <v-btn class="primary white--text mt-5" outlined
                >PROCEED TO PAY</v-btn
              >
            </div></v-card
          >
        </v-col>
      </v-row>
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
