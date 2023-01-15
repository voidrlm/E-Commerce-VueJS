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
                :selected-color="'accent'"
                color="accent"
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
              color="accent"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  color="accent"
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  color="accent"
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Customer Rating</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                color="accent"
                append-icon="mdi-star"
                label="4 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                append-icon="mdi-star"
                label="3 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                append-icon="mdi-star"
                label="2 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                append-icon="mdi-star"
                label="1 & above"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Face</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                color="accent"
                label="Analog"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                label="Digital"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                label="Chronograph"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
            <v-card-title class="pb-0">Movement</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                color="accent"
                label="Automatic & Mechanical"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                label="Quartz"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                label="Solar"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
            <v-card-title class="pb-0">Gender</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                color="accent"
                label="Men"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
                label="Women"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                color="accent"
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
                color="accent"
                class="pa-0"
                v-model="select"
                :items="options"
                style="margin-bottom: -20px"
                outlined
                dense
                item-color="accent"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <div class="row text-center">
            <div
              class="col-md-4 col-sm-6 col-xs-12"
              v-for="(pro, index) in products"
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
              <v-card-title class="subtitle-1 justify-center" to="/product">
                {{ pro.brand + " " + pro.name }}
              </v-card-title>
              <v-card-subtitle class="subtitle-2">{{
                pro.price !== "" ? "$" + pro.price : "Unavailable"
              }}</v-card-subtitle>
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </div>
      </div>
      {{ selectedBrand }}
    </v-container>
  </div>
</template>
<script>
import { products } from "@/resources/productsDB";
export default {
  name: "products-component",
  data: () => ({
    range: [0, 500000],
    select: "Popularity",
    options: [
      "Default",
      "Popularity",
      "Relevance",
      "Price: Low to High",
      "Price: High to Low",
    ],
    page: 1,
    productsDB: [],
    min: 0,
    max: 500000,
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
    products,
    selectedBrand: [],
  }),
  mounted() {
    this.productsDB = this.products;
    let routeTag = this.$route.params.id;
    console.log(routeTag);
    if (routeTag[0] === "b") {
      let brand = this.items[0].children.find(
        (x) => x.name === this.$route.params.id.substring(2)
      );
      this.selectedBrand = [brand];
    } else {
      console.log("error");
    }
  },

  watch: {
    range() {
      this.filter();
    },
  },
  methods: {
    filter() {
      const brands = this.selectedBrand.map(function (user) {
        return user.name;
      });
      if (brands.length !== 0) {
        this.products = this.productsDB.filter((watch) =>
          brands.includes(watch.brand)
        );
      } else this.products = this.productsDB;
      this.products = this.products.filter(
        (watch) => watch.price >= this.range[0] && watch.price <= this.range[1]
      );
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
