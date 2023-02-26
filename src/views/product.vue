<template>
  <v-container>
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <div
          :style="$vuetify.breakpoint.xsOnly ? 'width: 350px' : 'width: 500px'"
        >
          <v-carousel
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
              <v-img :aspect-ratio="1" :width="500" :src="image"> </v-img
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <div class="pl-6">
          <p class="display-1 mb-0 font-weight-bold">
            {{ selectedProduct.brand + " " + selectedProduct.name }}
          </p>
          <v-card-actions class="pa-0">
            <p class="headline font-weight-medium pt-3">
              {{
                selectedProduct.price !== ""
                  ? "$" + selectedProduct.price
                  : "Unavailable"
              }}
            </p>
            <v-spacer></v-spacer>
          </v-card-actions>
          <p class="subtitle-1 font-weight-medium">
            {{ selectedProduct.description }}
          </p>

          <p class="title">ITEMS</p>

          <v-text-field
            outlined
            :style="'width: 100px'"
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
        <p class="subtitle-1 font-weight-bold pt-3 text-center">REVIEWS</p>
        <v-divider class="mb-3"></v-divider>
        <v-list>
          <v-list-item v-for="(item, i) in reviews" :key="i" class="mx-2">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                class="mx-1"
                v-html="item.title"
              ></v-list-item-title
              ><v-rating
                :value="5"
                class=""
                background-color="warning lighten-3"
                color="warning"
                dense
              ></v-rating>
              <v-list-item-subtitle
                class="mx-1 font-weight-medium"
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

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

    reviews: [
      {
        avatar:
          "https://i.seadn.io/gcs/files/9008e1ff76a030fd412be9850badd3e9.png?auto=format&w=384",
        title: "Maya",
        subtitle: "Good",
      },
      {
        avatar:
          "https://i.seadn.io/gae/qoR1cWuIZzjlrNVcSMAzhrwDvXNtMxaYuDbNqkc_J5WGGqMSrF0wzO7K2MnSCEBLG8G8pZyJPqV7eTGt4wGwret85sbXJBYoAkypdQ?auto=format&w=384",
        title: "Adam",
        subtitle: "Nice",
      },
      {
        avatar:
          "https://i.seadn.io/gcs/files/3b34b743096f0e5c201c3a7b38e1f795.png?auto=format&w=384",
        title: "John",
        subtitle: "Awesome",
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
      shoppingCartItems =
        this.$store.getters.shoppingCart.length !== 0
          ? this.$store.getters.shoppingCart
          : [];
      let product = {
        ...this.selectedProduct,
        quantity: this.quantity,
        timestamp: new Date().getTime(),
      };
      shoppingCartItems.push(product);
      this.$store.dispatch("setShoppingCartData", shoppingCartItems);
    },
  },
};
</script>
<style></style>
