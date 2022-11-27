<template>
  <v-app>
    <v-main
      ><nav-bar v-if="$router.currentRoute.path !== '/'" /> <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navBar from "./components/navigation/navBar";
import { initializeSession } from "./services/sessionManagement";
export default {
  name: "App",
  components: {
    navBar,
  },
  data: () => ({
    //
  }),
  beforeCreate() {
    initializeSession();
  },
};
</script>
