<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :selected-color="$vuetify.theme.dark ? 'white' : 'black'"
                selectable
                return-object
                v-model="selectedBrand"
                @input="filter"
              ></v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Price</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              :color="$vuetify.theme.dark ? 'white' : 'black'"
              class="align-center mx-3"
              dense
            ></v-range-slider>
            <v-row class="pa-2 mx-1" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  v-for="(card, index) in cards"
                  :key="index"
                  :color="$vuetify.theme.dark ? 'white' : 'black'"
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
                <v-text-field
                  :color="$vuetify.theme.dark ? 'white' : 'black'"
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">To</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :color="$vuetify.theme.dark ? 'white' : 'black'"
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Rating</v-card-title>
            <v-container class="pt-0 mx-1" fluid>
              <v-checkbox
                v-for="(rating, index) in 4"
                :key="index"
                v-model="selectedRatings"
                :value="4 - index"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                :label="4 - index + ' & above'"
                hide-details
                dense
                @change="filter"
              ></v-checkbox>
            </v-container>
            <v-card-title class="pb-0">Movement</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                v-model="selectedMovements"
                :value="'Automatic & Mechanical'"
                @change="filter"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                label="Automatic & Mechanical"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                v-model="selectedMovements"
                :value="'Quartz'"
                @change="filter"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                label="Quartz"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                v-model="selectedMovements"
                :value="'Solar'"
                @change="filter"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                label="Solar"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
            <v-card-title class="pb-0">Gender</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                v-model="selectedGender"
                :value="'M'"
                @change="filter"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                label="Men"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                v-model="selectedGender"
                :value="'W'"
                @change="filter"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                label="Women"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                v-model="selectedGender"
                :value="'U'"
                @change="filter"
                :color="$vuetify.theme.dark ? 'white' : 'black'"
                label="Unisex"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>{{
                selectedBrand.length === 0
                  ? "Showing " + products.length + " of " + productsDB.length
                  : ""
              }}</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                v-model="sortChosen"
                color="accent"
                class="pa-0"
                :items="typesOfSort"
                style="margin-bottom: -20px"
                outlined
                dense
                item-color="accent"
                @change="sortProducts()"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>
          <v-data-iterator
            :items="products"
            :items-per-page.sync="itemsPerPage"
            :page.sync="page"
            :search="search"
            :sort-by="sortProductsBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
            class="pa-5"
          >
            <template v-slot:default="props">
              <v-row>
                <div
                  class="col-md-4 col-sm-6 col-xs-12"
                  v-for="(pro, index) in props.items"
                  :key="index"
                >
                  <v-card
                    class="mx-auto"
                    @click="showProductView(pro)"
                    height="350"
                    width="350"
                  >
                    <v-carousel hide-delimiters height="350" width="350">
                      <v-carousel-item v-for="(image, i) in pro.imgs" :key="i">
                        <v-img height="350" width="350" :src="image"> </v-img>
                      </v-carousel-item>
                    </v-carousel>
                  </v-card>
                  <v-card-title
                    class="subtitle-1 justify-center align-center"
                    to="/product"
                  >
                    {{ pro.brand + " " + pro.name }}
                  </v-card-title>
                  <v-card-title
                    class="subtitle-2 justify-center align-center mt-n8"
                  >
                    <v-rating
                      v-model="pro.rating"
                      background-color="warning darken-2"
                      color="warning"
                      dense
                      half-increments
                      hover
                      size="20"
                      readonly
                    ></v-rating
                  ></v-card-title>

                  <v-card-title
                    class="subtitle-2 justify-center align-center mt-n5"
                    >{{
                      pro.price !== "" ? "$" + pro.price : "Unavailable"
                    }}</v-card-title
                  >
                </div>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center">
                <span class="grey--text">Items per page</span>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      text
                      color="primary"
                      class="ml-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-spacer></v-spacer>

                <span class="mr-4 grey--text">
                  Page {{ page }} of {{ numberOfPages }}
                </span>
                <v-btn fab dark color="accent" class="mr-1" @click="formerPage">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab dark color="accent" class="ml-1" @click="nextPage">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import { products } from "@/resources/productsDB";
export default {
  name: "products-component",
  data: () => ({
    range: [0, 5000],
    sortChosen: "Relevance",
    sortProductsBy: "Relevance",
    typesOfSort: [
      "Popularity",
      "Relevance",
      "Price: Low to High",
      "Price: High to Low",
    ],
    productsDB: [],
    min: 0,
    max: 5000,
    items: [
      {
        id: 1,
        name: "Brands",
        children: [
          { id: "1a", name: "Casio" },
          { id: "1b", name: "Seiko" },
          { id: "1c", name: "Rado" },
          { id: "1d", name: "Rolex" },
          { id: "1e", name: "Tissot" },
        ],
      },
    ],
    selectedRatings: [],
    selectedFace: [],
    selectedMovements: [],
    selectedGender: [],
    products,
    selectedBrand: [],
    itemsPerPageArray: [10, 25, 50],
    search: "",
    sortDesc: true,
    page: 1,
    itemsPerPage: 10,
  }),
  mounted() {
    this.productsDB = this.products;
    let routeTag = this.$route.params.id;
    if (routeTag[0] === "b") {
      let brand = this.items[0].children.find(
        (x) => x.name === routeTag.substring(2)
      );
      this.selectedBrand = [brand];
    } else if (
      routeTag[0] === "M" ||
      routeTag[0] === "W" ||
      routeTag[0] === "U"
    ) {
      this.selectedGender = [routeTag[0]];
      this.filter();
    } else {
      console.log("loaded");
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
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
    filter() {
      const brands = this.selectedBrand.map(function (user) {
        return user.name;
      });
      if (brands.length !== 0) {
        this.products = JSON.parse(JSON.stringify(this.productsDB)).filter(
          (watch) => brands.includes(watch.brand)
        );
      } else this.products = this.productsDB;
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
      console.log(product);
      if (this.$router.currentRoute.path !== "/product") {
        this.$router.push({
          path: "/product/" + product.id,
        });
      }
    },
  },
};
</script>
