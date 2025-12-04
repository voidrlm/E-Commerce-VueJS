<template>
  <div class="search-page">
    <!-- Page Hero -->
    <div class="search-hero">
      <v-container>
        <div class="hero-content text-center">
          <span
            class="text-overline primary--text"
            style="letter-spacing: 0.3em"
            >DISCOVER</span
          >
          <h1
            class="text-display text-h3 mt-2"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            The Collection
          </h1>
          <p class="grey--text mt-4" style="max-width: 500px; margin: 0 auto">
            Explore our curated selection of {{ productsDB.length }} exceptional
            timepieces
          </p>
        </div>
      </v-container>
    </div>

    <v-container class="py-8">
      <v-row>
        <!-- Filters Sidebar -->
        <v-col cols="12" md="3">
          <div class="filters-panel">
            <div
              class="filter-header d-flex align-center justify-space-between mb-6"
            >
              <h3
                class="text-display"
                :class="$vuetify.theme.dark ? 'white--text' : ''"
              >
                Refine
              </h3>
              <v-btn text x-small color="primary" @click="clearFilters"
                >Clear All</v-btn
              >
            </div>
            <div class="divider-gold mb-6" style="margin-left: 0"></div>

            <!-- Brands Filter -->
            <v-expansion-panels flat accordion>
              <v-expansion-panel class="filter-section">
                <v-expansion-panel-header class="filter-title">
                  <span :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >Maison</span
                  >
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-treeview
                    :items="items"
                    :selected-color="'primary'"
                    selectable
                    return-object
                    v-model="selectedBrand"
                    @input="filter"
                    dense
                  ></v-treeview>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- Price Filter -->
              <v-expansion-panel class="filter-section">
                <v-expansion-panel-header class="filter-title">
                  <span :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >Investment</span
                  >
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-range-slider
                    v-model="range"
                    :max="max"
                    :min="min"
                    color="primary"
                    track-color="grey lighten-3"
                    class="mt-4"
                    hide-details
                  ></v-range-slider>
                  <div class="d-flex justify-space-between mt-2">
                    <span class="text-caption grey--text"
                      >${{ range[0].toLocaleString() }}</span
                    >
                    <span class="text-caption grey--text"
                      >${{ range[1].toLocaleString() }}</span
                    >
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- Movement Filter -->
              <v-expansion-panel class="filter-section">
                <v-expansion-panel-header class="filter-title">
                  <span :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >Movement</span
                  >
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="selectedMovements"
                    value="Automatic & Mechanical"
                    @change="filter"
                    color="primary"
                    label="Automatic"
                    hide-details
                    dense
                    class="mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selectedMovements"
                    value="Quartz"
                    @change="filter"
                    color="primary"
                    label="Quartz"
                    hide-details
                    dense
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selectedMovements"
                    value="Solar"
                    @change="filter"
                    color="primary"
                    label="Solar"
                    hide-details
                    dense
                  ></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- Gender Filter -->
              <v-expansion-panel class="filter-section">
                <v-expansion-panel-header class="filter-title">
                  <span :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >Collection</span
                  >
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="selectedGender"
                    value="M"
                    @change="filter"
                    color="primary"
                    label="Men's"
                    hide-details
                    dense
                    class="mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selectedGender"
                    value="W"
                    @change="filter"
                    color="primary"
                    label="Women's"
                    hide-details
                    dense
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selectedGender"
                    value="U"
                    @change="filter"
                    color="primary"
                    label="Unisex"
                    hide-details
                    dense
                  ></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- Rating Filter -->
              <v-expansion-panel class="filter-section">
                <v-expansion-panel-header class="filter-title">
                  <span :class="$vuetify.theme.dark ? 'white--text' : ''"
                    >Rating</span
                  >
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-for="(rating, index) in 4"
                    :key="index"
                    v-model="selectedRatings"
                    :value="5 - index"
                    color="primary"
                    hide-details
                    dense
                    @change="filter"
                    class="mt-0"
                  >
                    <template v-slot:label>
                      <v-rating
                        :value="5 - index"
                        color="primary"
                        background-color="grey lighten-2"
                        dense
                        readonly
                        size="14"
                        class="mr-2"
                      ></v-rating>
                      <span class="text-caption grey--text">& up</span>
                    </template>
                  </v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>

        <!-- Products Grid -->
        <v-col cols="12" md="9">
          <!-- Results Header -->
          <div
            class="results-header d-flex align-center justify-space-between mb-6"
          >
            <div>
              <span class="text-caption grey--text">
                Showing {{ products.length }} of
                {{ productsDB.length }} timepieces
              </span>
            </div>
            <div class="d-flex align-center">
              <v-select
                v-model="sortChosen"
                :items="typesOfSort"
                dense
                outlined
                hide-details
                color="primary"
                item-color="primary"
                class="sort-select"
                @change="sortProducts()"
                style="width: 200px"
              ></v-select>
            </div>
          </div>

          <!-- Products Data Iterator -->
          <v-data-iterator
            :items="products"
            :items-per-page.sync="itemsPerPage"
            :page.sync="page"
            :search="search"
            :sort-by="sortProductsBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="(pro, index) in props.items"
                  :key="index"
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <div class="product-card" @click="showProductView(pro)">
                    <div class="product-image-wrapper">
                      <v-img
                        :src="pro.imgs[0]"
                        aspect-ratio="1"
                        class="product-image"
                      >
                        <div class="product-overlay">
                          <v-btn icon dark>
                            <v-icon>mdi-magnify-plus</v-icon>
                          </v-btn>
                        </div>
                      </v-img>
                      <div class="product-badge" v-if="pro.price > 10000">
                        <span>LUXURY</span>
                      </div>
                    </div>
                    <div class="product-info">
                      <span class="product-brand text-overline primary--text">{{
                        pro.brand
                      }}</span>
                      <h4
                        class="product-name"
                        :class="$vuetify.theme.dark ? 'white--text' : ''"
                      >
                        {{ pro.name }}
                      </h4>
                      <div
                        class="d-flex align-center justify-space-between mt-2"
                      >
                        <v-rating
                          :value="pro.rating"
                          color="primary"
                          background-color="grey lighten-2"
                          dense
                          half-increments
                          readonly
                          size="12"
                        ></v-rating>
                        <span class="product-price primary--text">
                          ${{ parseFloat(pro.price).toLocaleString() }}
                        </span>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </template>

            <!-- Pagination -->
            <template v-slot:footer>
              <div class="pagination-wrapper mt-8">
                <div class="d-flex align-center justify-center">
                  <v-btn
                    icon
                    outlined
                    color="primary"
                    class="pagination-btn mr-2"
                    @click="formerPage"
                    :disabled="page === 1"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>

                  <div class="page-numbers d-flex">
                    <v-btn
                      v-for="n in displayedPages"
                      :key="n"
                      small
                      :outlined="page !== n"
                      :class="page === n ? 'active-page' : ''"
                      color="primary"
                      class="page-btn mx-1"
                      @click="page = n"
                    >
                      {{ n }}
                    </v-btn>
                  </div>

                  <v-btn
                    icon
                    outlined
                    color="primary"
                    class="pagination-btn ml-2"
                    @click="nextPage"
                    :disabled="page >= numberOfPages"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>

                <div class="text-center mt-4">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn text small color="grey" v-bind="attrs" v-on="on">
                        {{ itemsPerPage }} per page
                        <v-icon small right>mdi-chevron-down</v-icon>
                      </v-btn>
                    </template>
                    <v-list dense>
                      <v-list-item
                        v-for="(number, index) in itemsPerPageArray"
                        :key="index"
                        @click="updateItemsPerPage(number)"
                      >
                        <v-list-item-title>{{ number }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
            </template>
          </v-data-iterator>

          <!-- No Results -->
          <div
            v-if="products.length === 0"
            class="no-results text-center py-16"
          >
            <v-icon size="80" color="grey lighten-2">mdi-watch-variant</v-icon>
            <h3
              class="text-display mt-6"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
            >
              No Timepieces Found
            </h3>
            <p class="grey--text mt-2">Adjust your filters to discover more</p>
            <v-btn outlined color="primary" class="mt-4" @click="clearFilters">
              Clear Filters
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { products } from "@/resources/productsDB";

export default {
  name: "search-component",
  data: () => ({
    range: [0, 100000],
    sortChosen: "Relevance",
    sortProductsBy: "Relevance",
    typesOfSort: [
      "Relevance",
      "Popularity",
      "Price: Low to High",
      "Price: High to Low",
    ],
    productsDB: [],
    min: 0,
    max: 100000,
    items: [
      {
        id: 1,
        name: "All Brands",
        children: [
          { id: "1a", name: "Rolex" },
          { id: "1b", name: "Omega" },
          { id: "1c", name: "Patek Philippe" },
          { id: "1d", name: "Audemars Piguet" },
          { id: "1e", name: "Cartier" },
          { id: "1f", name: "TAG Heuer" },
          { id: "1g", name: "Seiko" },
          { id: "1h", name: "Casio" },
          { id: "1i", name: "Tissot" },
          { id: "1j", name: "Longines" },
        ],
      },
    ],
    selectedRatings: [],
    selectedFace: [],
    selectedMovements: [],
    selectedGender: [],
    products,
    selectedBrand: [],
    itemsPerPageArray: [12, 24, 48],
    search: "",
    sortDesc: true,
    page: 1,
    itemsPerPage: 12,
  }),
  mounted() {
    this.productsDB = this.products;
    let routeTag = this.$route.params.id;
    if (routeTag && routeTag[0] === "b") {
      let brand = this.items[0].children.find(
        (x) => x.name === routeTag.substring(2)
      );
      if (brand) this.selectedBrand = [brand];
    } else if (
      routeTag &&
      (routeTag[0] === "M" || routeTag[0] === "W" || routeTag[0] === "U")
    ) {
      this.selectedGender = [routeTag[0]];
      this.filter();
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    displayedPages() {
      const pages = [];
      const start = Math.max(1, this.page - 2);
      const end = Math.min(this.numberOfPages, this.page + 2);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  watch: {
    range() {
      this.filter();
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    clearFilters() {
      this.selectedBrand = [];
      this.selectedRatings = [];
      this.selectedMovements = [];
      this.selectedGender = [];
      this.range = [0, 100000];
      this.products = this.productsDB;
    },
    filter() {
      const brands = this.selectedBrand.map((user) => user.name);
      if (brands.length !== 0) {
        this.products = JSON.parse(JSON.stringify(this.productsDB)).filter(
          (watch) => brands.includes(watch.brand)
        );
      } else {
        this.products = this.productsDB;
      }
      this.products = this.products.filter(
        (watch) => watch.price >= this.range[0] && watch.price <= this.range[1]
      );
      let minimumRatingSelected = Math.min.apply(null, this.selectedRatings);
      if (minimumRatingSelected !== Infinity) {
        this.products = this.products.filter(
          (watch) => watch.rating >= minimumRatingSelected
        );
      }
      if (this.selectedFace.length !== 0) {
        this.products = this.products.filter((watch) =>
          this.selectedFace.includes(watch.type)
        );
      }
      if (this.selectedMovements.length !== 0) {
        this.products = this.products.filter((watch) =>
          this.selectedMovements.includes(watch.movement)
        );
      }
      if (this.selectedGender.length !== 0) {
        this.products = this.products.filter((watch) =>
          this.selectedGender.includes(watch.gender)
        );
      }
    },
    sortProducts() {
      if (this.sortChosen === "Price: Low to High") {
        this.sortProductsBy = "price";
        this.sortDesc = false;
      } else if (this.sortChosen === "Price: High to Low") {
        this.sortProductsBy = "price";
        this.sortDesc = true;
      } else if (this.sortChosen === "Popularity") {
        this.sortProductsBy = "Popularity";
        this.sortDesc = true;
      } else {
        this.sortProductsBy = "Relevance";
        this.sortDesc = true;
      }
    },
    showProductView(product) {
      this.$router.push({ path: "/product/p-" + product.id });
    },
  },
};
</script>

<style scoped>
.search-page {
  min-height: 100vh;
}

.search-hero {
  padding: 60px 0 40px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
}

.text-display {
  font-family: "Playfair Display", serif !important;
}

.divider-gold {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, #d4af37, transparent);
}

/* Filters Panel */
.filters-panel {
  position: sticky;
  top: 80px;
  padding: 24px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 4px;
}

.filter-section {
  background: transparent !important;
}
.filter-section::before {
  box-shadow: none !important;
}

.filter-title {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 12px 0;
}

/* Product Cards */
.product-card {
  cursor: pointer;
  transition: all 0.4s ease;
  margin-bottom: 24px;
}

.product-card:hover {
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

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #d4af37 0%, #f5e7a3 100%);
  color: #0a0a0a;
  padding: 4px 12px;
  font-size: 9px;
  letter-spacing: 0.15em;
  font-weight: 600;
}

.product-info {
  padding: 16px 0;
}

.product-brand {
  font-size: 10px;
  letter-spacing: 0.2em;
}

.product-name {
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 4px;
  line-height: 1.4;
}

.product-price {
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  font-weight: 600;
}

/* Sort Select */
.sort-select >>> .v-input__slot {
  border-color: rgba(212, 175, 55, 0.2) !important;
}

/* Pagination */
.pagination-wrapper {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding-top: 32px;
}

.pagination-btn {
  width: 40px !important;
  height: 40px !important;
  border-color: rgba(212, 175, 55, 0.3) !important;
}

.page-btn {
  min-width: 36px !important;
  height: 36px !important;
  border-radius: 0 !important;
}

.active-page {
  background: linear-gradient(135deg, #d4af37 0%, #f5e7a3 100%) !important;
  color: #0a0a0a !important;
}

/* No Results */
.no-results {
  opacity: 0.7;
}
</style>
