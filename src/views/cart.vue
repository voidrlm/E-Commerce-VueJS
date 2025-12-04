<template>
  <div class="cart-page">
    <v-container class="py-12">
      <!-- Page Header -->
      <div class="section-header text-center mb-12">
        <span class="text-overline primary--text" style="letter-spacing: 0.3em"
          >YOUR SELECTION</span
        >
        <h1
          class="text-display text-h3 mt-2"
          :class="$vuetify.theme.dark ? 'white--text' : ''"
        >
          Shopping Cart
        </h1>
        <div class="divider-gold mx-auto mt-6"></div>
      </div>

      <v-row v-if="$store.getters.shoppingCart.length !== 0">
        <!-- Cart Items -->
        <v-col cols="12" md="8">
          <div class="cart-items">
            <div
              v-for="(product, index) in $store.getters.shoppingCart"
              :key="index"
              class="cart-item"
            >
              <div class="cart-item-image" @click="showProductView(product)">
                <v-img
                  :src="product.imgs[0]"
                  aspect-ratio="1"
                  class="rounded"
                ></v-img>
              </div>

              <div class="cart-item-details">
                <span class="item-brand text-overline primary--text">{{
                  product.brand
                }}</span>
                <h3
                  class="item-name text-display"
                  :class="$vuetify.theme.dark ? 'white--text' : ''"
                  @click="showProductView(product)"
                >
                  {{ product.name }}
                </h3>
                <p class="item-type grey--text text-caption">
                  {{ product.type }} · {{ product.movement }}
                </p>
              </div>

              <div class="cart-item-quantity text-center">
                <span class="text-overline grey--text d-block mb-2">QTY</span>
                <span
                  class="quantity-display"
                  :class="$vuetify.theme.dark ? 'white--text' : ''"
                  >{{ product.quantity }}</span
                >
              </div>

              <div class="cart-item-price text-right">
                <span class="text-overline grey--text d-block mb-2">TOTAL</span>
                <span class="price-display primary--text">
                  ${{ parseFloat(product.price * product.quantity).toFixed(2) }}
                </span>
              </div>

              <div class="cart-item-remove">
                <v-btn
                  icon
                  small
                  @click="removeFromCart(product)"
                  class="remove-btn"
                >
                  <v-icon small>mdi-close</v-icon>
                </v-btn>
              </div>
            </div>
          </div>

          <!-- Continue Shopping -->
          <div class="continue-shopping mt-8">
            <v-btn text color="primary" @click="routeToDashboard">
              <v-icon left small>mdi-arrow-left</v-icon>
              Continue Shopping
            </v-btn>
          </div>
        </v-col>

        <!-- Order Summary -->
        <v-col cols="12" md="4">
          <div class="order-summary">
            <h3
              class="summary-title text-display"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Order Summary
            </h3>
            <div class="divider-gold mt-4 mb-6" style="margin-left: 0"></div>

            <div class="summary-row">
              <span class="grey--text">Subtotal</span>
              <span :class="$vuetify.theme.dark ? 'white--text' : ''">
                ${{ totalAmount["price"] }}
              </span>
            </div>

            <div class="summary-row">
              <span class="grey--text">Shipping</span>
              <span class="primary--text">FREE</span>
            </div>

            <div class="summary-row">
              <span class="grey--text">Tax</span>
              <span :class="$vuetify.theme.dark ? 'white--text' : ''"
                >Calculated at checkout</span
              >
            </div>

            <v-divider
              class="my-6"
              style="border-color: rgba(212, 175, 55, 0.1)"
            ></v-divider>

            <div class="summary-row summary-total">
              <span
                class="text-overline"
                :class="$vuetify.theme.dark ? 'white--text' : ''"
                >ESTIMATED TOTAL</span
              >
              <span class="total-price primary--text"
                >${{ totalAmount["price"] }}</span
              >
            </div>

            <v-btn x-large block class="btn-checkout mt-8">
              <v-icon left>mdi-lock</v-icon>
              Proceed to Checkout
            </v-btn>

            <!-- Trust Badges -->
            <div class="checkout-trust mt-8">
              <div class="trust-row">
                <v-icon small color="primary">mdi-shield-check</v-icon>
                <span>Secure Checkout</span>
              </div>
              <div class="trust-row">
                <v-icon small color="primary">mdi-credit-card-check</v-icon>
                <span>All Major Cards Accepted</span>
              </div>
              <div class="trust-row">
                <v-icon small color="primary">mdi-truck-fast</v-icon>
                <span>Free Worldwide Shipping</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Empty Cart -->
      <v-row v-else justify="center">
        <v-col cols="12" md="8" lg="6">
          <div class="empty-cart text-center">
            <div class="empty-icon mb-8">
              <v-icon size="120" color="grey lighten-1"
                >mdi-cart-outline</v-icon
              >
            </div>
            <h2
              class="text-display text-h4 mb-4"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Your Cart is Empty
            </h2>
            <p class="grey--text mb-8" style="max-width: 400px; margin: 0 auto">
              Discover our curated collection of luxury timepieces and find your
              perfect companion.
            </p>
            <v-btn x-large class="btn-shop-now" @click="routeToDashboard">
              <v-icon left>mdi-compass</v-icon>
              Explore Collection
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "cart-component",
  data: () => ({ shippingCharges: 0 }),
  computed: {
    totalAmount() {
      let shoppingCartItems = this.$store.getters.shoppingCart;
      if (!shoppingCartItems || shoppingCartItems.length === 0) {
        return { price: "0.00" };
      }
      var val = shoppingCartItems.reduce(function (
        previousValue,
        currentValue
      ) {
        let prevPrice =
          parseFloat(previousValue.price || 0) *
          parseFloat(previousValue.quantity || 1);
        let currentPrice =
          parseFloat(currentValue.price || 0) *
          parseFloat(currentValue.quantity || 1);
        return { price: parseFloat(prevPrice + currentPrice).toFixed(2) };
      });
      return val;
    },
  },
  methods: {
    routeToDashboard() {
      if (this.$router.currentRoute.path !== "/") {
        this.$router.push({ path: "/" });
      }
    },
    showProductView(product) {
      this.$router.push({ path: "/product/p-" + product.id });
    },
    removeFromCart(product) {
      let shoppingCartItems = this.$store.getters.shoppingCart.filter(
        (item) => product.timestamp !== item.timestamp
      );
      this.$store.dispatch("setShoppingCartData", shoppingCartItems);
    },
  },
};
</script>

<style scoped>
.cart-page {
  min-height: 80vh;
}

.section-header .text-display {
  font-family: "Playfair Display", serif !important;
}
.text-display {
  font-family: "Playfair Display", serif !important;
}

.divider-gold {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
}

/* Cart Items */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr auto auto auto;
  gap: 24px;
  align-items: center;
  padding: 24px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.cart-item:hover {
  border-color: rgba(212, 175, 55, 0.3);
}

@media (max-width: 768px) {
  .cart-item {
    grid-template-columns: 80px 1fr;
    gap: 16px;
  }
  .cart-item-quantity,
  .cart-item-price {
    grid-column: span 1;
  }
  .cart-item-remove {
    position: absolute;
    top: 16px;
    right: 16px;
  }
}

.cart-item-image {
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
}
.cart-item-details {
  min-width: 0;
}
.item-brand {
  letter-spacing: 0.2em;
  font-size: 10px;
}
.item-name {
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}
.item-name:hover {
  color: #d4af37 !important;
}

.quantity-display {
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
}
.price-display {
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  font-weight: 600;
}

.remove-btn {
  opacity: 0.5;
  transition: all 0.3s ease;
}
.remove-btn:hover {
  opacity: 1;
  color: #722f37 !important;
}

/* Order Summary */
.order-summary {
  position: sticky;
  top: 100px;
  padding: 32px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 8px;
}

.summary-title {
  font-size: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.summary-total {
  margin-top: 24px;
}
.total-price {
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  font-weight: 600;
}

.btn-checkout {
  background: linear-gradient(
    135deg,
    #d4af37 0%,
    #f5e7a3 50%,
    #d4af37 100%
  ) !important;
  color: #0a0a0a !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  border-radius: 0 !important;
}

.checkout-trust {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.trust-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #888;
}

/* Empty Cart */
.empty-cart {
  padding: 80px 24px;
}
.empty-icon {
  opacity: 0.3;
}

.btn-shop-now {
  background: linear-gradient(
    135deg,
    #d4af37 0%,
    #f5e7a3 50%,
    #d4af37 100%
  ) !important;
  color: #0a0a0a !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  border-radius: 0 !important;
}
</style>
