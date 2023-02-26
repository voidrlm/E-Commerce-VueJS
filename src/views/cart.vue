<template>
  <div>
    <v-container>
      <p class="text-h5 font-weight-light text-center pa-4">SHOPPING CART</p>

      <v-row>
        <v-col :cols="12" md="9" sm="12">
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
                          <v-img :src="product.imgs[0]"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
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
                      <v-btn icon><v-icon>mdi-close-circle</v-icon></v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table></v-card
          >
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Order Summary</p>
          <p class="overline">
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
                  <td class="text-right" style="width: 50px"><b>$175.00</b></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined
              >PROCEED TO PAY</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "products-component",
  data: () => ({}),
};
</script>
<style lang="scss">
tbody {
  tr:hover {
    background-color: transparent !important;
  }
}
</style>
