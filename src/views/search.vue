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
              <v-card-subtitle class="subtitle-2"
                >${{ pro.price }}</v-card-subtitle
              >
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
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
    products: [
      {
        id: 369,
        name: "Edifice (ED369)",
        brand: "Casio",
        type: "Chronograph",
        price: "150.00",
        movement: "Quartz",
        gender: "M",
        imgs: [
          "https://m.media-amazon.com/images/I/713m0cORTBL._UL1100_.jpg",
          "https://m.media-amazon.com/images/I/516UJ9B3AiL._UL1100_.jpg",
          "https://m.media-amazon.com/images/I/41ojGD14DkL._UL1100_.jpg",
          "https://m.media-amazon.com/images/I/61pU41bIjsL._UL1100_.jpg",
          "https://m.media-amazon.com/images/I/51zRqfJICzL._UL1100_.jpg",
          "https://m.media-amazon.com/images/I/51dLG6sE23L._UL1100_.jpg",
        ],
        description:
          "Brand New Casio Edifice Tachymeter Chronograph Multi-Color Dial Men's Watch - EF-539D-1AVDF (ED369)",
      },
      {
        id: 61,
        name: "SRPD61K1",
        brand: "Seiko",
        type: "Analogue",
        price: "250.00",
        movement: "Automatic & Mechanical",
        gender: "M",
        imgs: [
          "https://m.media-amazon.com/images/I/81j8TtonHhL._UL1500_.jpg",
          "https://m.media-amazon.com/images/I/71WmjI3VosL._UL1500_.jpg",
          "https://m.media-amazon.com/images/I/71u-C9C5IqL._UL1500_.jpg",
          "https://m.media-amazon.com/images/I/71zydc1xRpL._UL1500_.jpg",
        ],
        description:
          "Dial Color: Green, Case Shape: Round, Dial Glass Material: Hardlex /n Band Color: Silver, Band Material: Stainless Steel Watch Movement Type: Automatic, Watch Display Type: Analog Case Material: Stainless Steel, Case Diameter: 42.5 millimeters Water Resistance Depth: 100 meters",
      },
      {
        id: 5000,
        name: "Gshock GMWB5000D-1",
        brand: "Casio",
        type: "Analogue",
        price: "550.00",
        movement: "Digital",
        gender: "U",
        imgs: [
          "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq1.png.transform/main-visual-pc/image.png",
          "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq5.jpg.transform/main-visual-pc/image.jpg",
          "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq4.jpg.transform/main-visual-pc/image.jpg",
          "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GM/GMW/GMW-B5000D-1/assets/GMW-B5000D-1_Seq8.jpg.transform/main-visual-pc/image.jpg",
        ],
        description:
          "The DW-5000C is the original G-Shock model from 1983. The GMW-B5000 Series has inherited its characteristic square design and been given the full metal treatment along with upgraded features including smartphone linking. The watch has been given a full-metal case by using a shock-resistant fine resin cushioning material inserted between the case and the sturdy stainless steel metal bezel. High-density mounting technology also allows the watch to maintain its size. The back of the watch features a solid Screw Lock Back and has been DLC treated for resistance to wear. The metal band has been dimple processed, inheriting the Resin Band design of the original. Visibility too has been enhanced via use of a film solar cell and STN-LCD (liquid crystal). ",
      },
      {
        id: 930,
        name: "NISMO Limited Edition",
        brand: "Casio",
        type: "Chronograph",
        price: "300.00",
        movement: "Solar",
        gender: "M",
        imgs: [
          "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A.png.transform/main-visual-pc/image.png",
          "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A_top.jpg.transform/main-visual-pc/image.jpg",
          "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A_N.png.transform/main-visual-pc/image.png",
          "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EQ/EQS/EQS-930NIS-1A/assets/EQS-930NIS-1A_side.jpg.transform/main-visual-pc/image.jpg",
        ],
        description:
          "Celebrate a motorsports-chronograph partnership born in 2021 with the EDIFICE NISMO Limited Edition. ",
      },
      {
        id: 27086162,
        name: "True Square Automatic Open Heart",
        brand: "Rado",
        type: "Analog",
        price: "2500.00",
        movement: "Automatic & Mechanical",
        gender: "U",
        imgs: [
          "https://www.rado.com/media/catalog/product/r/g/rgb_cat_truesquare_734_6086_3_016_3.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center",
          "https://www.rado.com/media/catalog/product/t/r/truesquare_0173460863016_r27086162_a_2.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center",
          "https://www.rado.com/media/catalog/product/t/r/truesquare_0173460863016_r27086162_b_2.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center",
          "https://www.rado.com/media/catalog/product/t/r/truesquare_r27086162_wrist_a.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center",
        ],
        description:
          "At Rado, we made our name producing square high-tech ceramic watches. The True Square is a new take on an iconic Rado shape. Our first watch made using a square injected monobloc high-tech ceramic case, the True Square is light, scratch-resistant and comfortable to wear. Distinctive and design-led the Rado True Square Automatic Open Heart is the shape of things to come. ",
      },
    ],
    selectedBrand: [],
  }),
  mounted() {
    this.productsDB = this.products;
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
