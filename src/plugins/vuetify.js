import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        accent: "#e8e8e8",
        primary: "#ff8888",
        secondary: "#E0E0E0",
        error: "#FF5252",
        success: "#45a5ae",
      },
      dark: {
        accent: "#171717",
        primary: "#ff8888",
        secondary: "#1c1c1c",
        error: "#FF5252",
        success: "#45a5ae",
      },
    },
  },
});
