<template>
  <div>
    <v-app-bar
      :color="$vuetify.theme.dark ? '#121212' : '#FFFFFF'"
      app
      class="pa-3"
    >
      <v-btn
        v-if="$router.currentRoute.path !== '/dashboard'"
        class="mt-n5 ml-n6"
        :class="$vuetify.breakpoint.xsOnly ? 'mr-5' : ''"
        icon
        @click="$router.go(-1)"
        ><v-icon>mdi-chevron-left-circle</v-icon></v-btn
      >
      <v-card-title
        v-if="!$vuetify.breakpoint.xsOnly"
        class="text-h5 mt-n5 ml-n4"
        :style="'cursor:pointer'"
        @click="routeToDashboard()"
        >Store</v-card-title
      >
      <v-btn
        class="mt-n5 ml-n6"
        :class="$vuetify.breakpoint.xsOnly ? 'mr-5' : ''"
        v-if="$vuetify.breakpoint.xsOnly"
        icon
        @click="routeToDashboard()"
        ><v-icon size="40">mdi-home-circle</v-icon></v-btn
      >

      <v-spacer />
      <v-autocomplete
        v-model="search"
        :items="products"
        placeholder="Search store"
        filled
        rounded
        dense
        :class="$vuetify.breakpoint.xsOnly ? '' : 'ml-5'"
        class="accent--text mt-1"
        prepend-inner-icon="mdi-magnify"
        color="white"
        hide-no-data
        hide-selected
        item-text="name"
        item-value="id"
        return-object
        @input="searchProduct()"
        ><template v-slot:item="{ item }">
          <v-list-item-avatar
            color="indigo"
            class="text-h5 font-weight-light white--text"
          >
            <v-img :src="item.imgs[0]"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.brand"></v-list-item-subtitle>
          </v-list-item-content> </template
      ></v-autocomplete>
      <v-spacer /><v-btn
        @click.stop="showCart = !showCart"
        icon
        class="mt-n5 mr-2"
        ><v-icon>mdi-cart</v-icon></v-btn
      >
      <appBarMenu :class="$vuetify.breakpoint.xsOnly ? 'mr-n4' : ''" />
    </v-app-bar>
    <cartBar :showShoppingCart="showCart" @hide="showCart = $event" />
  </div>
</template>

<script>
import cartBar from "../shoppingCart/cartBar.vue";
import { products } from "@/resources/productsDB";
import appBarMenu from "./appBarMenu.vue";
export default {
  components: {
    appBarMenu,
    cartBar,
  },
  data: () => ({ products, search: {}, showCart: false }),
  beforeMount() {
    if (localStorage.getItem("darkTheme") !== null) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem("darkTheme"));
    }
    if (localStorage.getItem("lightAccent")) {
      this.$vuetify.theme.themes.light.accent =
        localStorage.getItem("lightAccent");
    }
    if (localStorage.getItem("darkAccent")) {
      this.$vuetify.theme.themes.dark.accent =
        localStorage.getItem("darkAccent");
    }
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    searchProduct() {
      if (
        this.$router.currentRoute.path !==
        "/product/" + "p-" + this.search.id
      ) {
        this.$router.push({
          path: "/product/" + "p-" + this.search.id,
        });
      }
      location.reload();
    },
    routeToDashboard() {
      if (this.$router.currentRoute.path !== "/dashboard") {
        this.$router.push({
          path: "/dashboard",
        });
      }
    },
  },
};
</script>
