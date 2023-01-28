<template>
  <v-container>
    <div class="row">
      <div class="col-md-5 col-sm-5 col-xs-12">
        <v-carousel>
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
            :value="1"
            dense
          ></v-text-field>
          <v-btn
            class="primary white--text"
            outlined
            tile
            dense
            :disabled="selectedProduct.price === ''"
            ><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn
          >
          <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-xs-12 col-md-12">
        <v-tabs>
          <v-tab>REVIEWS</v-tab>

          <v-tab-item>
            <v-list avatar="true">
              <v-list-item-group v-model="item" color="primary">
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
        <v-card-text class="pa-0 pt-4" tile outlined>
          <p class="subtitle-1 font-weight-light pt-3 text-center">
            YOU MIGHT ALSO LIKE
          </p>
          <v-divider></v-divider>
          <div class="row text-center">
            <div class="col-md-2 col-sm-4 col-xs-12 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                  >
                    <v-card-title>Bags & Purses </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Baggit, Zara, Fossil</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-12 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                  >
                    <v-card-title>T-Shirt </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 50%</div>
                    <div>Zara, Selected, Celio</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-12 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                  >
                    <v-card-title>Jeans </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Jack & Jones, Levis</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-12 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                  >
                    <v-card-title>Shirts </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-12 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                  >
                    <v-card-title>Shoes </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-12 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                  >
                    <v-card-title>Jackets </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
          </div>
        </v-card-text>
      </div>
    </div>
  </v-container>
</template>
<script>
import { products } from "@/resources/productsDB";
export default {
  name: "products-component",
  data: () => ({
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
  methods: {
    addToCart() {
      console.log("Adding to cart");
    },
  },
};
</script>
