<template>
  <v-container>
    <div class="row">
      <div class="col-md-5 col-sm-5 col-xs-12">
        <v-carousel hide-delimiters
          ><template v-slot:prev="{ on, attrs }">
            <v-btn
              fab
              small
              color="accent"
              v-bind="attrs"
              v-on="on"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              ><v-icon>mdi-chevron-left-circle</v-icon></v-btn
            >
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn
              fab
              small
              color="accent"
              v-bind="attrs"
              v-on="on"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
              ><v-icon>mdi-chevron-right-circle</v-icon></v-btn
            >
          </template>
          <v-carousel-item
            v-for="(image, index) in selectedProduct.imgs"
            :key="index"
          >
            <v-img :aspect-ratio="1 / 1" :width="500" :src="image"> </v-img
          ></v-carousel-item>
        </v-carousel>
      </div>
      <div class="col-md-7 col-sm-7 col-xs-12">
        <div class="pl-6">
          <p class="display-1 mb-0">
            {{ selectedProduct.brand + " " + selectedProduct.name }}
          </p>
          <v-card-actions class="pa-0">
            <p class="headline font-weight-light pt-3">
              {{
                selectedProduct.price !== ""
                  ? "$" + selectedProduct.price
                  : "Unavailable"
              }}
            </p>
            <v-spacer></v-spacer>
          </v-card-actions>
          <p class="subtitle-1 font-weight-thin">
            {{ selectedProduct.description }}
          </p>

          <p class="title">ITEMS</p>

          <v-text-field
            outlined
            style="width: 100px"
            v-model="quantity"
            dense
          ></v-text-field>
          <v-btn
            class="accent"
            :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            rounded
            dense
            @click="addToCart()"
            :disabled="selectedProduct.price === ''"
            ><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-xs-12 col-md-12">
        <v-tabs>
          <v-tab
            class="accent"
            :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >REVIEWS</v-tab
          >

          <v-tab-item>
            <v-list avatar="true">
              <v-list-item-group v-model="item" color="accent">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-avatar>
                    <v-img
                      :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title
                    ><v-rating
                      :value="5"
                      class=""
                      background-color="warning lighten-3"
                      color="warning"
                      dense
                    ></v-rating>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-tab-item>
        </v-tabs>
        <similiarItemsVue :similiarProducts="similiarProducts" />
      </div>
    </div>
  </v-container>
</template>
<script>
import similiarItemsVue from "@/components/navigation/similiarItems.vue";
import { products } from "@/resources/productsDB";
export default {
  name: "products-component",
  data: () => ({
    quantity: 1,
    products,
    selectedProduct: {},
    item: 5,
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Lorem ipsum dolor?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
          "\n",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title:
          'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Lorem ipsum dolor",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Lorem ipsum dolor",
        subtitle: "",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Lorem ipsum dolor",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  }),
  components: { similiarItemsVue },
  mounted() {
    let routeTag = this.$route.params.id;
    if (routeTag[0] == "p") {
      routeTag = this.$route.params.id.substring(2);
    }
    if (routeTag[1] !== "-" && routeTag[1] !== "n") {
      this.selectedProduct = this.products.find(
        (product) => product.id == routeTag
      );
    } else {
      console.log("error");
    }
  },
  computed: {
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
        ? similiarProductsByType
        : similiarProductsByBrand;
    },
  },
  methods: {
    addToCart() {
      let shoppingCartItems = [];
      if (
        localStorage.getItem("shoppingCartItems") !== null &&
        JSON.parse(localStorage.getItem("shoppingCartItems")).length !== 0
      ) {
        shoppingCartItems = JSON.parse(
          localStorage.getItem("shoppingCartItems")
        );
        let product = {
          ...this.selectedProduct,
          quantity: this.quantity,
          timestamp: new Date().getTime(),
        };
        shoppingCartItems.push(product);
        localStorage.setItem(
          "shoppingCartItems",
          JSON.stringify(shoppingCartItems)
        );
      } else {
        let product = {
          ...this.selectedProduct,
          quantity: this.quantity,
          timestamp: new Date().getTime(),
        };
        shoppingCartItems.push(product);
        localStorage.setItem(
          "shoppingCartItems",
          JSON.stringify(shoppingCartItems)
        );
      }
    },
  },
};
</script>
<style></style>
