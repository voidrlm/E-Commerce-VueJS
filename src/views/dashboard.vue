<template>
  <v-container fluid>
    <v-carousel>
      <v-carousel-item
        v-for="(hero, index) in heroItems"
        :key="index"
        :src="hero.img"
        @click="showProductView(hero)"
      >
      </v-carousel-item>
    </v-carousel>
    <div class="mt-2 row">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="'https://cdn.shopify.com/s/files/1/0277/9601/3133/articles/box-2567767_960_720_9dba573a-4a9f-4f5e-b6dc-fae1aa3a6845.jpg?v=1591515644'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">View Collection</h1>
            <div class="text-center">
              <v-btn to="/search/all" class="white--text" outlined
                >Explore</v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-card>
          <v-img
            :src="'https://magazine.lucerneluxe.com/wp-content/uploads/2020/03/Womens-watches-banner.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">Shop For Women</h1>
            <div class="text-center">
              <v-btn to="/search/W" class="white--text" outlined
                >SHOP NOW</v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="'https://www.thewatchcompany.com/media/tm_blog/p/o/7/6485/post_7_6485.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Rolex</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" to="/search/b-Rolex" text
                >SHOP NOW
                <v-icon class="white--text caption"
                  >mdi-arrow-right</v-icon
                ></v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="'https://images.squarespace-cdn.com/content/v1/58610afd29687f7c771f55ec/1597895450777-TXUZT72AAHDEQLB7KE74/Seiko+Five.png'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Seiko</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" to="/search/b-Seiko" text
                >Shop
                <v-icon class="white--text caption"
                  >mdi-arrow-right</v-icon
                ></v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card outlined>
          <v-img
            :src="'https://1000logos.net/wp-content/uploads/2018/02/Casio-logo.jpg'"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size">Casio</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" to="/search/b-Casio" text
                >Shop
                <v-icon class="white--text caption"
                  >mdi-arrow-right</v-icon
                ></v-btn
              >
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "dashboard-component",
  data: () => ({
    heroItems: [
      {
        img: "http://cdn.shopify.com/s/files/1/0639/1221/4745/collections/seiko-psx-banner-2022-kc_1.jpg?v=1664792439",
        tag: "p-61",
      },
      {
        img: "https://www.casio.com/content/casio/locales/intl/en/products/_jcr_content/root/responsivegrid/image_1970305012_cop.casiocoreimg.jpeg/1669891514209/aem-banner-top-g-1920-816.jpeg",
        tag: "p-5000",
      },
      {
        img: "https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/teaser_347947699.casiocoreimg.jpeg/1661234121239/aem-banner-top-ed1-1920-816.jpeg",
        tag: "p-930",
      },
      {
        img: "https://helveticawatches.com/wp-content/uploads/2021/04/rado-banner.jpg",
        tag: "b-Rado",
      },
    ],
  }),
  computed: {
    getGreetingData() {
      var today = new Date();
      var curHr = today.getHours();

      return curHr < 12
        ? "Good Morning"
        : curHr > 18
        ? "Good Evening"
        : "Good Afternoon";
    },
  },
  methods: {
    showProductView(product) {
      if (product.tag[0] === "p") {
        this.$router.push({
          path: "/product/" + product.tag,
        });
      } else if (product.tag[0] === "b") {
        this.$router.push({
          path: "/search/" + product.tag,
        });
      }
    },
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
