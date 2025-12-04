<template>
  <div class="product-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb-section py-4">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="pa-0">
          <template v-slot:divider>
            <v-icon small color="primary">mdi-chevron-right</v-icon>
          </template>
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :to="item.to"
              :disabled="item.disabled"
              class="text-caption"
              style="letter-spacing: 0.1em"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-container>
    </div>

    <v-container class="py-8">
      <v-row>
        <!-- Product Gallery -->
        <v-col cols="12" lg="6" class="mb-8">
          <div class="gallery-container">
            <!-- Main Image -->
            <div class="main-image-container">
              <div
                class="main-image"
                :style="{ backgroundImage: `url(${activeImage})` }"
              ></div>
              <!-- Corner Accents -->
              <div class="image-corner top-left"></div>
              <div class="image-corner top-right"></div>
              <div class="image-corner bottom-left"></div>
              <div class="image-corner bottom-right"></div>
            </div>

            <!-- Thumbnails -->
            <div class="thumbnails-container mt-4">
              <div
                v-for="(img, index) in selectedProduct.imgs"
                :key="index"
                class="thumbnail"
                :class="{ 'thumbnail-active': activeImage === img }"
                @click="activeImage = img"
              >
                <v-img :src="img" aspect-ratio="1"></v-img>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Product Details -->
        <v-col cols="12" lg="6">
          <div class="product-details">
            <!-- Brand Badge -->
            <div class="brand-badge mb-4">
              <span
                class="text-overline primary--text"
                style="letter-spacing: 0.3em"
              >
                {{ selectedProduct.brand }}
              </span>
            </div>

            <!-- Product Name -->
            <h1
              class="product-title text-display"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              {{ selectedProduct.name }}
            </h1>

            <!-- Rating -->
            <div class="rating-section my-4">
              <v-rating
                :value="selectedProduct.rating"
                color="primary"
                background-color="grey"
                half-increments
                readonly
                dense
                size="20"
              ></v-rating>
              <span class="ml-2 text-caption grey--text">
                ({{ selectedProduct.rating }} / 5)
              </span>
            </div>

            <!-- Divider -->
            <div class="divider-gold my-6" style="margin-left: 0"></div>

            <!-- Price -->
            <div class="price-section mb-6">
              <span v-if="selectedProduct.price" class="product-price">
                ${{ selectedProduct.price }}
              </span>
              <span v-else class="product-price-contact">
                Contact for Price
              </span>
              <span class="price-note text-caption grey--text ml-3">
                Free worldwide shipping
              </span>
            </div>

            <!-- Description -->
            <div class="description-section mb-8">
              <p
                class="text-body-1"
                :class="
                  $vuetify.theme.dark
                    ? 'grey--text text--lighten-1'
                    : 'grey--text text--darken-1'
                "
                style="line-height: 1.8"
              >
                {{ selectedProduct.description }}
              </p>
            </div>

            <!-- Specifications -->
            <div class="specs-section mb-8">
              <h3
                class="text-overline mb-4"
                style="letter-spacing: 0.2em"
                :class="$vuetify.theme.dark ? 'white--text' : ''"
              >
                Specifications
              </h3>
              <div class="specs-grid">
                <div class="spec-item">
                  <span class="spec-label">Movement</span>
                  <span
                    class="spec-value"
                    :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >{{ selectedProduct.movement }}</span
                  >
                </div>
                <div class="spec-item">
                  <span class="spec-label">Type</span>
                  <span
                    class="spec-value"
                    :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >{{ selectedProduct.type }}</span
                  >
                </div>
                <div class="spec-item">
                  <span class="spec-label">Gender</span>
                  <span
                    class="spec-value"
                    :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >{{ genderLabel }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Quantity & Add to Cart -->
            <div class="action-section">
              <div class="quantity-selector mb-6">
                <span
                  class="text-overline"
                  style="letter-spacing: 0.15em"
                  :class="$vuetify.theme.dark ? 'white--text' : ''"
                >
                  Quantity
                </span>
                <div class="quantity-controls mt-3">
                  <v-btn
                    icon
                    outlined
                    small
                    @click="quantity > 1 ? quantity-- : null"
                    color="primary"
                  >
                    <v-icon small>mdi-minus</v-icon>
                  </v-btn>
                  <span
                    class="quantity-value mx-6"
                    :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >{{ quantity }}</span
                  >
                  <v-btn
                    icon
                    outlined
                    small
                    @click="quantity++"
                    color="primary"
                  >
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>

              <v-btn
                x-large
                block
                class="btn-add-to-cart mb-4"
                @click="addToCart()"
                :disabled="!selectedProduct.price"
              >
                <v-icon left>mdi-shopping-outline</v-icon>
                Add to Cart
              </v-btn>

              <v-btn
                x-large
                block
                outlined
                class="btn-wishlist"
                color="primary"
              >
                <v-icon left>mdi-heart-outline</v-icon>
                Add to Wishlist
              </v-btn>
            </div>

            <!-- Trust Badges -->
            <div class="trust-badges mt-8">
              <div class="trust-item">
                <v-icon color="primary" small>mdi-shield-check</v-icon>
                <span>Authentic</span>
              </div>
              <div class="trust-item">
                <v-icon color="primary" small>mdi-truck-fast</v-icon>
                <span>Free Shipping</span>
              </div>
              <div class="trust-item">
                <v-icon color="primary" small>mdi-refresh</v-icon>
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Reviews Section -->
      <section class="reviews-section mt-16">
        <div class="section-header text-center mb-12">
          <span
            class="text-overline primary--text"
            style="letter-spacing: 0.3em"
            >TESTIMONIALS</span
          >
          <h2
            class="text-display text-h4 mt-2"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            Customer Reviews
          </h2>
          <div class="divider-gold-center mx-auto mt-6"></div>
        </div>

        <v-row justify="center">
          <v-col v-for="(review, i) in reviews" :key="i" cols="12" md="4">
            <div class="review-card">
              <div class="review-header">
                <v-avatar size="56" class="mr-4">
                  <v-img :src="review.avatar"></v-img>
                </v-avatar>
                <div>
                  <h4
                    class="review-name"
                    :class="$vuetify.theme.dark ? 'white--text' : ''"
                  >
                    {{ review.title }}
                  </h4>
                  <v-rating
                    :value="5"
                    color="primary"
                    background-color="grey"
                    dense
                    readonly
                    size="14"
                  ></v-rating>
                </div>
              </div>
              <p class="review-text grey--text mt-4">"{{ review.subtitle }}"</p>
              <div class="review-date text-caption grey--text mt-3">
                Verified Purchase
              </div>
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- Similar Products -->
      <similiarItemsVue :similiarProducts="similiarProducts" />
    </v-container>

    <!-- Added to Cart Snackbar -->
    <v-snackbar
      v-model="showSnackbar"
      :timeout="3000"
      color="success"
      top
      right
    >
      <v-icon left>mdi-check-circle</v-icon>
      Added to cart!
    </v-snackbar>
  </div>
</template>

<script>
import similiarItemsVue from "@/components/navigation/similiarItems.vue";
import { products } from "@/resources/productsDB";

export default {
  name: "products-component",
  components: { similiarItemsVue },
  data: () => ({
    quantity: 1,
    products,
    selectedProduct: {},
    activeImage: "",
    showSnackbar: false,
    reviews: [
      {
        avatar: "https://i.pravatar.cc/150?img=1",
        title: "Alexander M.",
        subtitle:
          "Exceptional quality and craftsmanship. The watch exceeded all my expectations!",
      },
      {
        avatar: "https://i.pravatar.cc/150?img=2",
        title: "Sarah K.",
        subtitle:
          "Beautiful timepiece, exactly as described. Fast shipping and secure packaging.",
      },
      {
        avatar: "https://i.pravatar.cc/150?img=3",
        title: "James W.",
        subtitle:
          "Perfect addition to my collection. The attention to detail is remarkable.",
      },
    ],
  }),
  computed: {
    breadcrumbs() {
      return [
        { text: "Home", to: "/", disabled: false },
        { text: "Collection", to: "/search/all", disabled: false },
        { text: this.selectedProduct.brand || "", disabled: true },
      ];
    },
    genderLabel() {
      const labels = { M: "Men", W: "Women", U: "Unisex" };
      return labels[this.selectedProduct.gender] || "Unisex";
    },
    similiarProducts() {
      let similiarProductsByBrand = this.products.filter(
        (watch) =>
          watch.brand === this.selectedProduct.brand &&
          watch.id !== this.selectedProduct.id
      );
      let similiarProductsByType = this.products.filter(
        (watch) =>
          watch.type === this.selectedProduct.type &&
          watch.id !== this.selectedProduct.id
      );
      return similiarProductsByBrand.length === 0
        ? similiarProductsByType.slice(0, 4)
        : similiarProductsByBrand.slice(0, 4);
    },
  },
  mounted() {
    this.loadProduct();
  },
  watch: {
    "$route.params.id": function () {
      this.loadProduct();
    },
  },
  methods: {
    loadProduct() {
      let routeTag = this.$route.params.id;
      if (routeTag && routeTag[0] === "p") {
        routeTag = routeTag.substring(2);
      }
      this.selectedProduct =
        this.products.find((product) => product.id == routeTag) || {};
      this.activeImage = this.selectedProduct.imgs?.[0] || "";
      window.scrollTo(0, 0);
    },
    addToCart() {
      let shoppingCartItems = this.$store.getters.shoppingCart?.slice() || [];
      let product = {
        ...this.selectedProduct,
        quantity: this.quantity,
        timestamp: new Date().getTime(),
      };
      shoppingCartItems.push(product);
      this.$store.dispatch("setShoppingCartData", shoppingCartItems);
      this.showSnackbar = true;
    },
  },
};
</script>

<style scoped>
.product-page {
  min-height: 100vh;
}
.breadcrumb-section {
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
}
.gallery-container {
  position: sticky;
  top: 100px;
}

.main-image-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.main-image {
  width: 100%;
  padding-bottom: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease;
}

.main-image-container:hover .main-image {
  transform: scale(1.05);
}

.image-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: #d4af37;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.main-image-container:hover .image-corner {
  opacity: 1;
}
.image-corner.top-left {
  top: 8px;
  left: 8px;
  border-width: 1px 0 0 1px;
  border-style: solid;
}
.image-corner.top-right {
  top: 8px;
  right: 8px;
  border-width: 1px 1px 0 0;
  border-style: solid;
}
.image-corner.bottom-left {
  bottom: 8px;
  left: 8px;
  border-width: 0 0 1px 1px;
  border-style: solid;
}
.image-corner.bottom-right {
  bottom: 8px;
  right: 8px;
  border-width: 0 1px 1px 0;
  border-style: solid;
}

.thumbnails-container {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.thumbnail:hover,
.thumbnail-active {
  border-color: #d4af37;
  opacity: 1;
}

.product-details {
  padding-left: 24px;
}
@media (max-width: 1264px) {
  .product-details {
    padding-left: 0;
  }
}

.brand-badge {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 2px;
}

.product-title {
  font-family: "Playfair Display", serif !important;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  line-height: 1.2;
}

.divider-gold {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, #d4af37, transparent);
}
.divider-gold-center {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
}

.product-price {
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #d4af37;
  font-weight: 600;
}
.product-price-contact {
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  color: #d4af37;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 600px) {
  .specs-grid {
    grid-template-columns: 1fr;
  }
}

.spec-item {
  padding: 16px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 4px;
  text-align: center;
}

.spec-label {
  display: block;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 4px;
}
.spec-value {
  font-family: "Playfair Display", serif;
  font-size: 0.95rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
}
.quantity-value {
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  min-width: 40px;
  text-align: center;
}

.btn-add-to-cart {
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

.btn-wishlist {
  border-radius: 0 !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
}

.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: #888;
}

.review-card {
  padding: 32px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  height: 100%;
  transition: all 0.3s ease;
}

.review-card:hover {
  border-color: rgba(212, 175, 55, 0.3);
  transform: translateY(-4px);
}
.review-header {
  display: flex;
  align-items: center;
}
.review-name {
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  margin-bottom: 4px;
}
.review-text {
  font-style: italic;
  line-height: 1.7;
}
.text-display {
  font-family: "Playfair Display", serif !important;
}
</style>
