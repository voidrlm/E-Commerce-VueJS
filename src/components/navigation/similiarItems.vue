<template>
  <v-card-text class="pa-0 pt-4" tile outlined>
    <p class="subtitle-1 font-weight-bold pt-3 text-center">
      YOU MIGHT ALSO LIKE
    </p>
    <v-divider class="mb-3"></v-divider>
    <div class="row text-center">
      <div
        class="col-md-2 col-sm-4 col-xs-12 text-center"
        v-for="(product, index) in similiarProducts"
        :key="index"
      >
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-card :elevation="hover ? 16 : 2" @click="showProductView(product)">
            <v-img
              class="white--text"
              :aspect-ratio="1 / 1"
              :height="350"
              :src="product.imgs[0]"
            >
            </v-img>

            <v-card-text class="text--primary text-center">
              <div class="text-truncate">
                {{ product.brand }} {{ product.name }}
              </div>
              <div>
                {{
                  product.price !== "" ? "$ " + product.price : "Unavailable"
                }}
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>
    </div>
  </v-card-text>
</template>

<script>
export default {
  props: { similiarProducts: Array },
  data() {
    return {};
  },
  computed: {},
  methods: {
    showProductView(product) {
      this.$router.push({
        path: "/product/p-" + product.id,
      });
      location.reload();
    },
  },
};
</script>
