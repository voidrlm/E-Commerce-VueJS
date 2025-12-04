<template>
  <footer
    class="site-footer"
    :class="$vuetify.theme.dark ? 'dark-footer' : 'light-footer'"
  >
    <!-- Newsletter Section -->
    <div class="newsletter-section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="text-center">
            <span
              class="text-overline primary--text"
              style="letter-spacing: 0.3em"
              >STAY INFORMED</span
            >
            <h3
              class="text-display text-h5 mt-2 mb-4"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Subscribe to Our Newsletter
            </h3>
            <div class="newsletter-form d-flex justify-center">
              <v-text-field
                v-model="email"
                placeholder="Enter your email"
                outlined
                dense
                hide-details
                class="newsletter-input"
              ></v-text-field>
              <v-btn class="newsletter-btn ml-2" height="40"> Subscribe </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Main Footer -->
    <div class="main-footer">
      <v-container>
        <v-row>
          <!-- Brand Column -->
          <v-col cols="12" md="4" class="mb-6 mb-md-0">
            <div class="footer-brand">
              <h2 class="brand-name">CHRONOS</h2>
              <p class="brand-tagline grey--text mt-3">
                Curating the world's finest timepieces since 2024. Every watch
                tells a story of craftsmanship and excellence.
              </p>
              <div class="social-links mt-4">
                <v-btn icon class="social-btn mr-2">
                  <v-icon size="20">mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon class="social-btn mr-2">
                  <v-icon size="20">mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon class="social-btn mr-2">
                  <v-icon size="20">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon class="social-btn">
                  <v-icon size="20">mdi-pinterest</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- Quick Links -->
          <v-col cols="6" md="2">
            <h4
              class="footer-title"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Explore
            </h4>
            <ul class="footer-links">
              <li>
                <a href="#" @click.prevent="$router.push('/')">New Arrivals</a>
              </li>
              <li>
                <a href="#" @click.prevent="$router.push('/search/all')"
                  >All Watches</a
                >
              </li>
              <li>
                <a href="#" @click.prevent="$router.push('/search/M')"
                  >Men's Collection</a
                >
              </li>
              <li>
                <a href="#" @click.prevent="$router.push('/search/W')"
                  >Women's Collection</a
                >
              </li>
            </ul>
          </v-col>

          <!-- Brands -->
          <v-col cols="6" md="2">
            <h4
              class="footer-title"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Brands
            </h4>
            <ul class="footer-links">
              <li><a href="#">Rolex</a></li>
              <li><a href="#">Omega</a></li>
              <li><a href="#">Patek Philippe</a></li>
              <li><a href="#">Audemars Piguet</a></li>
            </ul>
          </v-col>

          <!-- Support -->
          <v-col cols="6" md="2">
            <h4
              class="footer-title"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Support
            </h4>
            <ul class="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </v-col>

          <!-- Contact -->
          <v-col cols="6" md="2">
            <h4
              class="footer-title"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              Contact
            </h4>
            <ul class="footer-links contact-links">
              <li>
                <v-icon small color="primary" class="mr-2">mdi-email</v-icon>
                hello@chronos.com
              </li>
              <li>
                <v-icon small color="primary" class="mr-2">mdi-phone</v-icon>
                +1 (555) 123-4567
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Bottom Bar -->
    <div class="bottom-bar">
      <v-container>
        <div
          class="d-flex flex-column flex-md-row align-center justify-space-between"
        >
          <span class="text-caption grey--text">
            © 2024 CHRONOS. All rights reserved.
          </span>
          <div class="legal-links">
            <a href="#" class="text-caption grey--text mx-3">Privacy Policy</a>
            <a href="#" class="text-caption grey--text mx-3"
              >Terms of Service</a
            >
          </div>
        </div>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data: () => ({
    email: "",
  }),
};
</script>

<style scoped>
.site-footer {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}

.light-footer {
  background: #fafafa;
}
.dark-footer {
  background: #0a0a0a;
}

.text-display {
  font-family: "Playfair Display", serif !important;
}

/* Newsletter */
.newsletter-section {
  padding: 60px 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
}

.newsletter-input {
  max-width: 300px;
}

.newsletter-input >>> .v-input__slot {
  border-color: rgba(212, 175, 55, 0.3) !important;
}

.newsletter-btn {
  background: linear-gradient(
    135deg,
    #d4af37 0%,
    #f5e7a3 50%,
    #d4af37 100%
  ) !important;
  color: #0a0a0a !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  font-size: 12px !important;
  border-radius: 0 !important;
}

/* Main Footer */
.main-footer {
  padding: 60px 0 40px;
}

.brand-name {
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  color: #d4af37;
  letter-spacing: 0.2em;
}

.brand-tagline {
  font-size: 14px;
  line-height: 1.7;
}

.social-btn {
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: #d4af37;
  color: #d4af37;
}

.footer-title {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #d4af37;
}

.contact-links li {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #888;
}

/* Bottom Bar */
.bottom-bar {
  padding: 20px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}

.legal-links a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #d4af37 !important;
}
</style>
