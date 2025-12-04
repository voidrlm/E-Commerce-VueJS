<template>
  <div class="similar-items-section">
    <div class="section-header text-center mb-8">
      <span class="text-overline primary--text" style="letter-spacing: 0.3em"
        >CURATED FOR YOU</span
      >
      <h2
        class="text-display text-h4 mt-2"
        :class="$vuetify.theme.dark ? 'white--text' : ''"
      >
        You May Also Like
      </h2>
      <div class="divider-gold mx-auto mt-4"></div>
    </div>

    <v-row>
      <v-col
        v-for="(product, index) in similiarProducts"
        :key="index"
        cols="6"
        sm="4"
        md="2"
      >
        <div class="similar-product-card" @click="showProductView(product)">
          <div class="product-image-wrapper">
            <v-img
              :src="product.imgs[0]"
              aspect-ratio="1"
              class="product-image"
            >
              <div class="product-overlay">
                <v-icon color="white">mdi-arrow-right</v-icon>
              </div>
            </v-img>
          </div>
          <div class="product-info text-center">
            <span class="product-brand text-overline primary--text">{{
              product.brand
            }}</span>
            <h4
              class="product-name text-truncate"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              {{ product.name }}
            </h4>
            <span class="product-price primary--text">
              ${{ parseFloat(product.price).toLocaleString() }}
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: { similiarProducts: Array },
  methods: {
    showProductView(product) {
      this.$router.push({ path: "/product/p-" + product.id });
      location.reload();
    },
  },
};
</script>

<style scoped>
.similar-items-section {
  padding: 60px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
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

.similar-product-card {
  cursor: pointer;
  transition: all 0.4s ease;
}

.similar-product-card:hover {
  transform: translateY(-8px);
}

.product-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.product-image {
  transition: transform 0.6s ease;
}

.similar-product-card:hover .product-image {
  transform: scale(1.08);
}

.product-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.similar-product-card:hover .product-overlay {
  opacity: 1;
}

.product-info {
  padding: 12px 0;
}

.product-brand {
  font-size: 9px;
  letter-spacing: 0.15em;
}

.product-name {
  font-family: "Playfair Display", serif;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 4px;
}

.product-price {
  font-family: "Playfair Display", serif;
  font-size: 0.9rem;
  font-weight: 600;
  display: block;
  margin-top: 4px;
}
</style>
