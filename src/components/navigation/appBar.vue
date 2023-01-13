<template>
  <v-app-bar
    :color="$vuetify.theme.dark ? '#121212' : '#FFFFFF'"
    app
    class="pa-3"
  >
    <v-card-title v-if="!$vuetify.breakpoint.xsOnly" class="text-h5 mt-n5"
      >Store</v-card-title
    >
    <v-spacer />
    <v-text-field
      placeholder="Search store"
      filled
      rounded
      dense
      :class="$vuetify.breakpoint.xsOnly ? '' : 'ml-5'"
      class="accent--text mt-1"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field
    ><v-spacer />
    <appBarMenu />
  </v-app-bar>
</template>

<script>
import appBarMenu from "./appBarMenu.vue";
export default {
  components: {
    appBarMenu,
  },
  data: () => ({}),
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
  methods: {},
};
</script>
