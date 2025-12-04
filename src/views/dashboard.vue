<template>
  <div class="dashboard-container">
    <!-- HERO SECTION - Cinematic Full Screen -->
    <section class="hero-section">
      <div class="hero-background">
        <v-carousel
          cycle
          :interval="6000"
          hide-delimiters
          :show-arrows="false"
          height="100vh"
          class="hero-carousel"
        >
          <v-carousel-item v-for="(hero, index) in heroItems" :key="index">
            <div
              class="hero-slide"
              :style="{ backgroundImage: `url(${hero.img})` }"
            >
              <div class="hero-overlay"></div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>

      <div class="hero-content">
        <div class="hero-badge animate-fade-in">
          <span
            class="text-overline"
            style="letter-spacing: 0.4em; color: #d4af37"
            >ESTABLISHED 2024</span
          >
        </div>
        <h1 class="hero-title animate-fade-in delay-1">
          <span class="text-display">The Art of</span>
          <br />
          <span class="text-display text-gradient-gold">Timekeeping</span>
        </h1>
        <div
          class="divider-gold-animated mx-auto my-8 animate-fade-in delay-2"
        ></div>
        <p class="hero-subtitle animate-fade-in delay-3 text-elegant">
          Curated collection of the world's finest timepieces
        </p>
        <div class="hero-actions animate-fade-in delay-4">
          <v-btn x-large class="btn-luxury mr-4" to="/search/all">
            Explore Collection
          </v-btn>
          <v-btn x-large outlined class="btn-outline-gold" to="/search/b-Rolex">
            View Rolex
          </v-btn>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator animate-fade-in delay-5">
          <div class="scroll-line"></div>
          <span
            class="text-caption"
            style="letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.5)"
            >SCROLL</span
          >
        </div>
      </div>

      <!-- Corner Accents -->
      <div class="corner-accent top-left"></div>
      <div class="corner-accent top-right"></div>
      <div class="corner-accent bottom-left"></div>
      <div class="corner-accent bottom-right"></div>
    </section>

    <!-- FEATURED CATEGORIES - Artistic Grid -->
    <section class="featured-section py-16">
      <v-container>
        <div class="section-header text-center mb-12">
          <span
            class="text-overline primary--text"
            style="letter-spacing: 0.3em"
            >DISCOVER</span
          >
          <h2
            class="text-display text-h3 mt-2"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            Curated Collections
          </h2>
          <div class="divider-gold mx-auto mt-6"></div>
        </div>

        <v-row>
          <!-- Main Feature Card -->
          <v-col cols="12" md="7">
            <div
              class="feature-card feature-card-main"
              @click="$router.push('/search/all')"
            >
              <div
                class="feature-image"
                :style="{
                  backgroundImage: `url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200')`,
                }"
              ></div>
              <div class="feature-overlay"></div>
              <div class="feature-content">
                <span class="feature-tag">FULL COLLECTION</span>
                <h3 class="feature-title text-display">
                  Browse All Timepieces
                </h3>
                <p class="feature-subtitle text-elegant">108 Masterpieces</p>
                <div class="feature-arrow">
                  <v-icon color="white">mdi-arrow-right</v-icon>
                </div>
              </div>
              <div class="feature-border"></div>
            </div>
          </v-col>

          <!-- Side Features -->
          <v-col cols="12" md="5">
            <v-row>
              <v-col cols="12">
                <div
                  class="feature-card feature-card-side"
                  @click="$router.push('/search/M')"
                >
                  <div
                    class="feature-image"
                    :style="{
                      backgroundImage: `url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800')`,
                    }"
                  ></div>
                  <div class="feature-overlay"></div>
                  <div class="feature-content">
                    <span class="feature-tag">MEN'S COLLECTION</span>
                    <h3 class="feature-title text-display">For Him</h3>
                    <div class="feature-arrow">
                      <v-icon color="white" small>mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12">
                <div
                  class="feature-card feature-card-side"
                  @click="$router.push('/search/W')"
                >
                  <div
                    class="feature-image"
                    :style="{
                      backgroundImage: `url('https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800')`,
                    }"
                  ></div>
                  <div class="feature-overlay"></div>
                  <div class="feature-content">
                    <span class="feature-tag">WOMEN'S COLLECTION</span>
                    <h3 class="feature-title text-display">For Her</h3>
                    <div class="feature-arrow">
                      <v-icon color="white" small>mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- BRANDS SHOWCASE - Horizontal Scroll -->
    <section
      class="brands-section py-16"
      :class="$vuetify.theme.dark ? 'brands-dark' : 'brands-light'"
    >
      <v-container>
        <div class="section-header text-center mb-12">
          <span
            class="text-overline primary--text"
            style="letter-spacing: 0.3em"
            >PRESTIGIOUS</span
          >
          <h2
            class="text-display text-h3 mt-2"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            Iconic Brands
          </h2>
          <div class="divider-gold mx-auto mt-6"></div>
        </div>

        <div class="brands-grid">
          <div
            v-for="(brand, index) in featuredBrands"
            :key="index"
            class="brand-card"
            @click="$router.push(`/search/b-${brand.name}`)"
          >
            <div
              class="brand-image"
              :style="{ backgroundImage: `url(${brand.image})` }"
            ></div>
            <div class="brand-overlay"></div>
            <div class="brand-content">
              <h4 class="brand-name text-display">{{ brand.name }}</h4>
              <span class="brand-count">{{ brand.count }} Pieces</span>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- TRENDING NOW - Product Showcase -->
    <section class="trending-section py-16">
      <v-container>
        <div class="section-header text-center mb-12">
          <span
            class="text-overline primary--text"
            style="letter-spacing: 0.3em"
            >TRENDING</span
          >
          <h2
            class="text-display text-h3 mt-2"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            Most Desired
          </h2>
          <div class="divider-gold mx-auto mt-6"></div>
        </div>

        <v-row>
          <v-col
            v-for="(product, index) in trendingProducts"
            :key="index"
            cols="12"
            sm="6"
            md="3"
          >
            <div class="product-card" @click="showProductView(product)">
              <div class="product-image-container">
                <v-img
                  :src="product.imgs[0]"
                  aspect-ratio="1"
                  class="product-image"
                ></v-img>
                <div class="product-quick-view">
                  <v-icon color="white">mdi-eye</v-icon>
                </div>
              </div>
              <div class="product-info">
                <span class="product-brand text-overline">{{
                  product.brand
                }}</span>
                <h4 class="product-name">{{ product.name }}</h4>
                <div class="product-meta">
                  <v-rating
                    :value="product.rating"
                    color="primary"
                    background-color="grey"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <span class="product-price primary--text">
                    {{ product.price ? "$" + product.price : "Contact Us" }}
                  </span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="text-center mt-12">
          <v-btn
            x-large
            outlined
            color="primary"
            class="btn-outline-gold"
            to="/search/all"
          >
            View All Products
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- STATEMENT BANNER -->
    <section class="statement-section">
      <div
        class="statement-bg"
        :style="{
          backgroundImage: `url('https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1920')`,
        }"
      ></div>
      <div class="statement-overlay"></div>
      <v-container class="statement-content">
        <v-row align="center" justify="center" style="min-height: 500px">
          <v-col cols="12" md="8" class="text-center">
            <span
              class="text-overline"
              style="letter-spacing: 0.4em; color: #d4af37"
              >PHILOSOPHY</span
            >
            <h2
              class="text-display white--text text-h2 mt-4 mb-6"
              style="line-height: 1.3"
            >
              "Time is the most valuable thing a man can spend."
            </h2>
            <p class="text-elegant white--text text-h6" style="opacity: 0.7">
              — Theophrastus
            </p>
            <div class="divider-gold mx-auto mt-8"></div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- WATCH TYPES - Movement Showcase -->
    <section class="types-section py-16">
      <v-container>
        <div class="section-header text-center mb-12">
          <span
            class="text-overline primary--text"
            style="letter-spacing: 0.3em"
            >CRAFTSMANSHIP</span
          >
          <h2
            class="text-display text-h3 mt-2"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            By Movement
          </h2>
          <div class="divider-gold mx-auto mt-6"></div>
        </div>

        <v-row>
          <v-col
            v-for="(type, index) in watchTypes"
            :key="index"
            cols="12"
            md="4"
          >
            <div class="type-card" @click="$router.push(type.route)">
              <div class="type-icon">
                <v-icon size="48" color="primary">{{ type.icon }}</v-icon>
              </div>
              <h3
                class="type-title text-display"
                :class="$vuetify.theme.dark ? 'white--text' : ''"
              >
                {{ type.name }}
              </h3>
              <p
                class="type-description"
                :class="
                  $vuetify.theme.dark
                    ? 'grey--text'
                    : 'grey--text text--darken-1'
                "
              >
                {{ type.description }}
              </p>
              <div class="type-link primary--text">
                Explore <v-icon small color="primary">mdi-arrow-right</v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { products } from "@/resources/productsDB";

export default {
  name: "dashboard-component",
  data: () => ({
    heroItems: [
      {
        img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1920",
        tag: "p-61",
      },
      {
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920",
        tag: "p-5000",
      },
      {
        img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1920",
        tag: "p-930",
      },
    ],
    featuredBrands: [
      {
        name: "Rolex",
        image:
          "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600",
        count: 8,
      },
      {
        name: "Omega",
        image:
          "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=600",
        count: 12,
      },
      {
        name: "Patek Philippe",
        image:
          "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=600",
        count: 5,
      },
      {
        name: "Seiko",
        image:
          "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
        count: 15,
      },
      {
        name: "Casio",
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
        count: 18,
      },
    ],
    watchTypes: [
      {
        name: "Automatic",
        icon: "mdi-cog-sync",
        description:
          "Self-winding mechanical movements powered by your wrist motion",
        route: "/search/m-Automatic & Mechanical",
      },
      {
        name: "Quartz",
        icon: "mdi-flash",
        description:
          "Precise battery-powered movements with exceptional accuracy",
        route: "/search/m-Quartz",
      },
      {
        name: "Solar",
        icon: "mdi-white-balance-sunny",
        description: "Eco-friendly movements harnessing the power of light",
        route: "/search/m-Solar",
      },
    ],
  }),
  computed: {
    trendingProducts() {
      return [...products]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 8);
    },
  },
  methods: {
    showProductView(product) {
      this.$router.push({ path: "/product/p-" + product.id });
    },
  },
};
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-carousel {
  height: 100% !important;
}

.hero-slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1.1);
  animation: heroZoom 20s ease-in-out infinite alternate;
}

@keyframes heroZoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.2);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 40px;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 1.1;
  color: white;
  margin: 24px 0;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.1em;
  max-width: 600px;
  margin: 0 auto;
}

.hero-actions {
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.scroll-indicator {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, #d4af37, transparent);
  margin-bottom: 12px;
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 0.3;
    height: 60px;
  }
  50% {
    opacity: 1;
    height: 80px;
  }
}

/* Corner Accents */
.corner-accent {
  position: absolute;
  width: 60px;
  height: 60px;
  border-color: rgba(212, 175, 55, 0.3);
  z-index: 5;
}

.corner-accent.top-left {
  top: 40px;
  left: 40px;
  border-width: 1px 0 0 1px;
  border-style: solid;
}
.corner-accent.top-right {
  top: 40px;
  right: 40px;
  border-width: 1px 1px 0 0;
  border-style: solid;
}
.corner-accent.bottom-left {
  bottom: 40px;
  left: 40px;
  border-width: 0 0 1px 1px;
  border-style: solid;
}
.corner-accent.bottom-right {
  bottom: 40px;
  right: 40px;
  border-width: 0 1px 1px 0;
  border-style: solid;
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════════════════════════════════════ */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.delay-1 {
  animation-delay: 0.2s;
}
.delay-2 {
  animation-delay: 0.4s;
}
.delay-3 {
  animation-delay: 0.6s;
}
.delay-4 {
  animation-delay: 0.8s;
}
.delay-5 {
  animation-delay: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.divider-gold-animated {
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
}

.divider-gold {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
}

/* ═══════════════════════════════════════════════════════════════════════════
   FEATURE CARDS
   ═══════════════════════════════════════════════════════════════════════════ */
.feature-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
}

.feature-card-main {
  height: 500px;
}

.feature-card-side {
  height: 240px;
}

.feature-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.feature-card:hover .feature-image {
  transform: scale(1.1);
}

.feature-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  transition: background 0.5s ease;
}

.feature-card:hover .feature-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.feature-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px;
  z-index: 2;
}

.feature-tag {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: #d4af37;
  margin-bottom: 12px;
}

.feature-title {
  font-size: 1.8rem;
  color: white;
  margin-bottom: 8px;
}

.feature-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
}

.feature-arrow {
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(212, 175, 55, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-arrow {
  background: #d4af37;
  border-color: #d4af37;
}

.feature-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  pointer-events: none;
  transition: border-color 0.3s ease;
}

.feature-card:hover .feature-border {
  border-color: rgba(212, 175, 55, 0.3);
}

/* ═══════════════════════════════════════════════════════════════════════════
   BRANDS SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
.brands-section.brands-dark {
  background: linear-gradient(180deg, #0a0a0a 0%, #121212 100%);
}

.brands-section.brands-light {
  background: linear-gradient(180deg, #f5f5f0 0%, #fafafa 100%);
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

@media (max-width: 960px) {
  .brands-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.brand-card {
  position: relative;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
}

.brand-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  transition: all 0.5s ease;
}

.brand-card:hover .brand-image {
  filter: grayscale(0%);
  transform: scale(1.1);
}

.brand-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  transition: background 0.3s ease;
}

.brand-card:hover .brand-overlay {
  background: rgba(0, 0, 0, 0.4);
}

.brand-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  text-align: center;
}

.brand-name {
  font-size: 1rem;
  color: white;
  letter-spacing: 0.1em;
}

.brand-count {
  font-size: 11px;
  color: #d4af37;
  letter-spacing: 0.1em;
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRODUCT CARDS
   ═══════════════════════════════════════════════════════════════════════════ */
.product-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-image-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.product-image {
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-quick-view {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: rgba(212, 175, 55, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-quick-view {
  opacity: 1;
}

.product-info {
  padding: 16px 4px;
  text-align: center;
}

.product-brand {
  font-size: 10px;
  letter-spacing: 0.15em;
  color: #d4af37;
}

.product-name {
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  margin: 4px 0 8px;
}

.product-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.product-price {
  font-weight: 600;
  letter-spacing: 0.05em;
}

/* ═══════════════════════════════════════════════════════════════════════════
   STATEMENT SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
.statement-section {
  position: relative;
  overflow: hidden;
}

.statement-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.statement-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

.statement-content {
  position: relative;
  z-index: 2;
}

/* ═══════════════════════════════════════════════════════════════════════════
   TYPE CARDS
   ═══════════════════════════════════════════════════════════════════════════ */
.type-card {
  text-align: center;
  padding: 48px 32px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.type-card:hover {
  border-color: rgba(212, 175, 55, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.type-icon {
  margin-bottom: 24px;
}

.type-title {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.type-description {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.type-link {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* ═══════════════════════════════════════════════════════════════════════════
   BUTTONS
   ═══════════════════════════════════════════════════════════════════════════ */
.btn-luxury {
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
  padding: 0 48px !important;
}

.btn-outline-gold {
  border: 1px solid #d4af37 !important;
  color: #d4af37 !important;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 600 !important;
  letter-spacing: 0.15em !important;
  text-transform: uppercase !important;
  border-radius: 0 !important;
  background: transparent !important;
}

.btn-outline-gold:hover {
  background: #d4af37 !important;
  color: #0a0a0a !important;
}

/* ═══════════════════════════════════════════════════════════════════════════
   TYPOGRAPHY
   ═══════════════════════════════════════════════════════════════════════════ */
.text-display {
  font-family: "Playfair Display", serif !important;
}

.text-elegant {
  font-family: "Cormorant Garamond", serif !important;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #d4af37 0%, #f5e7a3 50%, #d4af37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ═══════════════════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════════════════ */
@media (max-width: 960px) {
  .hero-section {
    min-height: 600px;
  }

  .feature-card-main {
    height: 400px;
  }

  .feature-card-side {
    height: 200px;
  }

  .corner-accent {
    display: none;
  }
}

@media (max-width: 600px) {
  .hero-section {
    min-height: 500px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-luxury,
  .btn-outline-gold {
    width: 100%;
    max-width: 280px;
  }
}
</style>
