<template>
  <v-app :style="appStyle">
    <!-- Subtle Background Pattern -->
    <div class="app-background-pattern"></div>

    <v-main>
      <nav-bar />
      <transition name="page-fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
    </v-main>

    <!-- Footer -->
    <v-footer
      class="footer-luxury pa-0"
      :color="$vuetify.theme.dark ? '#0A0A0A' : '#1A1A1A'"
    >
      <v-container fluid class="pa-0">
        <!-- Footer Top -->
        <div class="footer-top py-16">
          <v-row justify="center" align="center">
            <v-col cols="12" class="text-center">
              <h2 class="text-display text-h3 white--text mb-4">CHRONOS</h2>
              <div class="divider-gold mx-auto"></div>
              <p
                class="text-elegant text-body-1 grey--text mt-4"
                style="letter-spacing: 0.1em"
              >
                Where Time Meets Artistry
              </p>
            </v-col>
          </v-row>

          <v-row justify="center" class="mt-8">
            <v-col cols="12" md="8">
              <v-row justify="center">
                <v-col cols="6" sm="3" class="text-center">
                  <h4
                    class="text-modern white--text text-caption mb-4"
                    style="letter-spacing: 0.2em"
                  >
                    COLLECTIONS
                  </h4>
                  <p class="grey--text text-caption mb-2 footer-link">Luxury</p>
                  <p class="grey--text text-caption mb-2 footer-link">Sport</p>
                  <p class="grey--text text-caption mb-2 footer-link">
                    Classic
                  </p>
                </v-col>
                <v-col cols="6" sm="3" class="text-center">
                  <h4
                    class="text-modern white--text text-caption mb-4"
                    style="letter-spacing: 0.2em"
                  >
                    BRANDS
                  </h4>
                  <p class="grey--text text-caption mb-2 footer-link">Rolex</p>
                  <p class="grey--text text-caption mb-2 footer-link">Omega</p>
                  <p class="grey--text text-caption mb-2 footer-link">
                    Patek Philippe
                  </p>
                </v-col>
                <v-col cols="6" sm="3" class="text-center">
                  <h4
                    class="text-modern white--text text-caption mb-4"
                    style="letter-spacing: 0.2em"
                  >
                    SUPPORT
                  </h4>
                  <p class="grey--text text-caption mb-2 footer-link">
                    Contact
                  </p>
                  <p class="grey--text text-caption mb-2 footer-link">
                    Warranty
                  </p>
                  <p class="grey--text text-caption mb-2 footer-link">
                    Returns
                  </p>
                </v-col>
                <v-col cols="6" sm="3" class="text-center">
                  <h4
                    class="text-modern white--text text-caption mb-4"
                    style="letter-spacing: 0.2em"
                  >
                    CONNECT
                  </h4>
                  <div class="d-flex justify-center">
                    <v-btn icon small class="mx-1"
                      ><v-icon small color="grey">mdi-instagram</v-icon></v-btn
                    >
                    <v-btn icon small class="mx-1"
                      ><v-icon small color="grey">mdi-facebook</v-icon></v-btn
                    >
                    <v-btn icon small class="mx-1"
                      ><v-icon small color="grey">mdi-twitter</v-icon></v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>

        <!-- Footer Bottom -->
        <v-divider style="border-color: rgba(212, 175, 55, 0.1)"></v-divider>
        <div class="footer-bottom py-6 text-center">
          <p
            class="text-modern grey--text text-caption mb-0"
            style="letter-spacing: 0.1em"
          >
            © 2025 CHRONOS. Crafted with passion for horology.
          </p>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import navBar from "./components/navigation/navBar";

export default {
  name: "App",
  components: {
    navBar,
  },
  computed: {
    appStyle() {
      return {
        background: this.$vuetify.theme.dark
          ? "linear-gradient(180deg, #0A0A0A 0%, #121212 100%)"
          : "linear-gradient(180deg, #FAFAFA 0%, #F0F0F0 100%)",
        minHeight: "100vh",
      };
    },
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app-background-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.02;
  background-image: radial-gradient(
      circle at 25% 25%,
      #d4af37 1px,
      transparent 1px
    ),
    radial-gradient(circle at 75% 75%, #d4af37 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 0;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.footer-luxury {
  position: relative;
  overflow: hidden;
}

.footer-luxury::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(212, 175, 55, 0.3),
    transparent
  );
}

.footer-top {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.5) 0%,
    transparent 100%
  );
}

.footer-link {
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #d4af37 !important;
}

.divider-gold {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
}

.text-display {
  font-family: "Playfair Display", serif !important;
  letter-spacing: 0.3em !important;
}

.text-elegant {
  font-family: "Cormorant Garamond", serif !important;
}

.text-modern {
  font-family: "Montserrat", sans-serif !important;
}
</style>
