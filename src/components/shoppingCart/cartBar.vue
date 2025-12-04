<template>
  <v-navigation-drawer
    app
    right
    v-model="show"
    :width="420"
    temporary
    class="cart-drawer"
  >
    <!-- Header -->
    <template v-slot:prepend>
      <div class="cart-header">
        <div class="d-flex align-center justify-space-between pa-6">
          <div>
            <span
              class="text-overline primary--text"
              style="letter-spacing: 0.2em"
              >YOUR</span
            >
            <h3
              class="text-display"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Shopping Cart
            </h3>
          </div>
          <v-btn icon @click="show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="divider-gold" style="margin: 0 24px"></div>
      </div>
    </template>

    <!-- Empty Cart -->
    <div
      v-if="shoppingCartItems.length === 0"
      class="empty-cart text-center pa-12"
    >
      <v-icon size="80" color="grey lighten-2">mdi-cart-outline</v-icon>
      <h4
        class="text-display mt-6 mb-2"
        :class="$vuetify.theme.dark ? 'white--text' : ''"
      >
        Your cart is empty
      </h4>
      <p class="grey--text text-body-2">
        Discover our collection of luxury timepieces
      </p>
    </div>

    <!-- Cart Items -->
    <div v-else class="cart-items pa-4">
      <div
        v-for="item in shoppingCartItems"
        :key="item.timestamp"
        class="cart-item mb-4"
      >
        <div class="cart-item-image">
          <v-img :src="item.imgs[0]" aspect-ratio="1" class="rounded"></v-img>
        </div>
        <div class="cart-item-details">
          <span class="item-brand text-overline primary--text">{{
            item.brand
          }}</span>
          <h4
            class="item-name"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            {{ item.name }}
          </h4>
          <div class="d-flex align-center justify-space-between mt-2">
            <span class="item-qty grey--text text-caption"
              >QTY: {{ item.quantity }}</span
            >
            <span class="item-price primary--text"
              >${{ parseFloat(item.price * item.quantity).toFixed(2) }}</span
            >
          </div>
        </div>
        <v-btn icon x-small class="remove-btn" @click="removeFromCart(item)">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Footer -->
    <template v-slot:append v-if="totalAmount">
      <div class="cart-footer">
        <div class="divider-gold mb-4"></div>
        <div class="d-flex justify-space-between align-center px-6 mb-4">
          <span class="text-overline grey--text">SUBTOTAL</span>
          <span class="total-price primary--text"
            >${{ totalAmount.price }}</span
          >
        </div>
        <div class="px-4 pb-4">
          <v-btn block x-large class="checkout-btn" @click="routeToCart">
            <v-icon left>mdi-lock</v-icon>
            Checkout
          </v-btn>
          <v-btn
            block
            text
            small
            color="grey"
            class="mt-2"
            @click="show = false"
          >
            Continue Shopping
          </v-btn>
        </div>
      </div>
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
      get() {
        return this.showShoppingCart;
      },
      set(newValue) {
        this.$emit("hide", newValue);
      },
    },
    totalAmount() {
      if (this.shoppingCartItems.length === 0) return null;
      if (this.shoppingCartItems.length === 1) {
        return {
          price: (
            this.shoppingCartItems[0].quantity * this.shoppingCartItems[0].price
          ).toFixed(2),
        };
      }
      return this.shoppingCartItems.reduce((prev, curr) => {
        const prevPrice =
          parseFloat(prev.price || 0) * parseFloat(prev.quantity || 1);
        const currPrice =
          parseFloat(curr.price || 0) * parseFloat(curr.quantity || 1);
        return { price: (prevPrice + currPrice).toFixed(2) };
      });
    },
  },
  methods: {
    removeFromCart(item) {
      this.shoppingCartItems = this.shoppingCartItems.filter(
        (obj) => item.timestamp !== obj.timestamp
      );
      this.$store.dispatch("setShoppingCartData", this.shoppingCartItems);
    },
    routeToCart() {
      if (this.$router.currentRoute.path !== "/cart") {
        this.$router.push({ path: "/cart" });
      } else {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped>
.cart-drawer {
  border-left: 1px solid rgba(212, 175, 55, 0.1) !important;
}

.text-display {
  font-family: "Playfair Display", serif !important;
}

.divider-gold {
  height: 1px;
  background: linear-gradient(90deg, #d4af37, transparent);
}

.empty-cart {
  margin-top: 60px;
}

/* Cart Items */
.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr 24px;
  gap: 16px;
  align-items: start;
  padding: 16px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 4px;
  position: relative;
}

.cart-item-image {
  border-radius: 4px;
  overflow: hidden;
}

.item-brand {
  font-size: 9px;
  letter-spacing: 0.15em;
}

.item-name {
  font-family: "Playfair Display", serif;
  font-size: 0.95rem;
  line-height: 1.3;
  margin-top: 2px;
}

.item-price {
  font-family: "Playfair Display", serif;
  font-weight: 600;
}

.remove-btn {
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.remove-btn:hover {
  opacity: 1;
}

/* Footer */
.cart-footer {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding-top: 16px;
}

.total-price {
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  font-weight: 600;
}

.checkout-btn {
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

/* Custom Scrollbar */
::v-deep ::-webkit-scrollbar {
  width: 4px;
}
::v-deep ::-webkit-scrollbar-thumb {
  background: #d4af37;
  border-radius: 2px;
}
::v-deep ::-webkit-scrollbar-track {
  background: rgba(212, 175, 55, 0.1);
}
</style>
