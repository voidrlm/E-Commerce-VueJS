<template>
  <div>
    <v-app-bar
      app
      :color="$vuetify.theme.dark ? 'transparent' : 'white'"
      flat
      class="nav-luxury"
      :class="{ 'nav-scrolled': scrolled }"
      height="80"
    >
      <v-container fluid class="d-flex align-center py-0">
        <!-- Logo -->
        <div
          class="logo-container d-flex align-center"
          style="cursor: pointer"
          @click="routeToDashboard()"
        >
          <div class="logo-icon mr-3">
            <v-icon
              :color="scrolled || !$vuetify.theme.dark ? 'primary' : 'white'"
              size="28"
            >
              mdi-watch
            </v-icon>
          </div>
          <div class="logo-text" v-if="!$vuetify.breakpoint.xsOnly">
            <span
              class="text-h5 font-weight-light"
              :class="
                scrolled || !$vuetify.theme.dark
                  ? 'primary--text'
                  : 'white--text'
              "
              style="
                font-family: 'Playfair Display', serif;
                letter-spacing: 0.3em;
              "
            >
              CHRONOS
            </span>
          </div>
        </div>

        <v-spacer />

        <!-- Search Bar -->
        <div class="search-container mx-4" :style="searchContainerStyle">
          <v-autocomplete
            v-model="search"
            :items="products"
            placeholder="Discover timepieces..."
            solo
            flat
            dense
            hide-details
            :background-color="
              $vuetify.theme.dark
                ? 'rgba(255,255,255,0.05)'
                : 'rgba(0,0,0,0.03)'
            "
            class="search-luxury"
            prepend-inner-icon="mdi-magnify"
            item-text="name"
            item-value="id"
            return-object
            hide-no-data
            @input="searchProduct()"
          >
            <template v-slot:prepend-inner>
              <v-icon
                small
                :color="$vuetify.theme.dark ? 'grey' : 'grey darken-1'"
                class="mr-2"
              >
                mdi-magnify
              </v-icon>
            </template>
            <template v-slot:item="{ item }">
              <v-list-item-avatar size="50" class="mr-4">
                <v-img :src="item.imgs[0]" class="rounded"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium">
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-caption">
                  {{ item.brand }} · {{ item.type }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <span class="primary--text font-weight-bold">
                  {{ item.price ? "$" + item.price : "Contact" }}
                </span>
              </v-list-item-action>
            </template>
          </v-autocomplete>
        </div>

        <v-spacer />

        <!-- Action Buttons -->
        <div class="nav-actions d-flex align-center">
          <!-- Cart Button with Badge -->
          <v-badge
            :content="cartCount"
            :value="cartCount > 0"
            color="primary"
            overlap
            offset-x="10"
            offset-y="10"
          >
            <v-btn
              icon
              class="mx-1 nav-icon-btn"
              @click.stop="showCart = !showCart"
            >
              <v-icon :color="$vuetify.theme.dark ? 'white' : 'grey darken-2'">
                mdi-shopping-outline
              </v-icon>
            </v-btn>
          </v-badge>

          <!-- Settings Menu -->
          <appBarMenu class="ml-2" />
        </div>
      </v-container>

      <!-- Animated Bottom Border -->
      <template v-slot:extension v-if="scrolled">
        <div class="nav-border-glow"></div>
      </template>
    </v-app-bar>

    <!-- Shopping Cart Drawer -->
    <cartBar :showShoppingCart="showCart" @hide="showCart = $event" />
  </div>
</template>

<script>
import cartBar from "../shoppingCart/cartBar.vue";
import { products } from "@/resources/productsDB";
import appBarMenu from "./appBarMenu.vue";

export default {
  components: {
    appBarMenu,
    cartBar,
  },
  data: () => ({
    products,
    search: {},
    showCart: false,
    scrolled: false,
  }),
  computed: {
    cartCount() {
      return this.$store.getters.shoppingCart?.length || 0;
    },
    searchContainerStyle() {
      return {
        maxWidth: this.$vuetify.breakpoint.xsOnly ? "200px" : "400px",
        width: "100%",
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (localStorage.getItem("darkTheme") !== null) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("darkTheme"));
    }
    if (localStorage.getItem("lightAccent")) {
      this.$vuetify.theme.themes.light.accent =
        localStorage.getItem("lightAccent");
    }
    if (localStorage.getItem("darkAccent")) {
      this.$vuetify.theme.themes.dark.accent =
        localStorage.getItem("darkAccent");
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    searchProduct() {
      if (this.search && this.search.id) {
        if (this.$router.currentRoute.path !== "/product/p-" + this.search.id) {
          this.$router.push({ path: "/product/p-" + this.search.id });
        }
        this.search = {};
      }
    },
    routeToDashboard() {
      if (this.$router.currentRoute.path !== "/") {
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style scoped>
.nav-luxury {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1) !important;
}

.nav-scrolled {
  background: rgba(10, 10, 10, 0.95) !important;
  backdrop-filter: blur(20px) !important;
}

.theme--light .nav-scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
}

.logo-container {
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.02);
}

.logo-icon {
  position: relative;
}

.logo-icon::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.logo-container:hover .logo-icon::after {
  opacity: 1;
}

.search-luxury {
  border-radius: 30px !important;
  overflow: hidden;
}

.search-luxury >>> .v-input__slot {
  padding: 0 20px !important;
  min-height: 44px !important;
  border-radius: 30px !important;
  border: 1px solid rgba(212, 175, 55, 0.1) !important;
  transition: all 0.3s ease !important;
}

.search-luxury >>> .v-input__slot:hover,
.search-luxury >>> .v-input--is-focused .v-input__slot {
  border-color: rgba(212, 175, 55, 0.3) !important;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.1) !important;
}

.nav-icon-btn {
  transition: all 0.3s ease;
}

.nav-icon-btn:hover {
  transform: scale(1.1);
}

.nav-icon-btn:hover .v-icon {
  color: #d4af37 !important;
}

.nav-border-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.5),
    transparent
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}
</style>
