import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#D4AF37", // Luxury Gold
        secondary: "#1A1A1A", // Deep Charcoal
        accent: "#F5F5F0", // Ivory
        success: "#1B4332", // Emerald
        error: "#722F37", // Ruby
        warning: "#D4AF37", // Gold
        info: "#1E3A5F", // Sapphire
        background: "#FAFAFA", // Pearl
      },
      dark: {
        primary: "#D4AF37", // Luxury Gold
        secondary: "#2A2A2A", // Graphite
        accent: "#1A1A1A", // Charcoal
        success: "#1B4332", // Emerald
        error: "#722F37", // Ruby
        warning: "#D4AF37", // Gold
        info: "#1E3A5F", // Sapphire
        background: "#0A0A0A", // Noir
      },
    },
    dark: true, // Default to dark mode for luxury feel
  },
});
