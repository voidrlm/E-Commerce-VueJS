<template>
  <div>
    <v-menu offset-y :nudge-width="240" transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" class="settings-btn">
          <v-icon size="20">mdi-tune-vertical</v-icon>
        </v-btn>
      </template>
      <v-card class="settings-menu">
        <div class="settings-header pa-4">
          <span
            class="text-overline primary--text"
            style="letter-spacing: 0.2em"
            >PREFERENCES</span
          >
          <h4
            class="text-display mt-1"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
          >
            Settings
          </h4>
        </div>
        <v-divider style="border-color: rgba(212, 175, 55, 0.1)"></v-divider>

        <!-- Dark Mode Toggle -->
        <div
          class="setting-item d-flex align-center justify-space-between pa-4"
        >
          <div>
            <span
              class="setting-label"
              :class="$vuetify.theme.dark ? 'white--text' : ''"
              >Dark Mode</span
            >
            <span class="setting-description d-block grey--text text-caption"
              >Toggle night theme</span
            >
          </div>
          <v-switch
            v-model="$vuetify.theme.dark"
            inset
            dense
            color="primary"
            hide-details
            @change="saveSettings('darkMode')"
          ></v-switch>
        </div>

        <v-divider style="border-color: rgba(212, 175, 55, 0.1)"></v-divider>

        <!-- Theme Accent -->
        <div class="setting-item pa-4">
          <span
            class="setting-label d-block mb-3"
            :class="$vuetify.theme.dark ? 'white--text' : ''"
            >Accent Color</span
          >
          <div class="theme-colors d-flex flex-wrap">
            <div
              v-for="theme in themes"
              :key="theme.id"
              class="theme-color-option"
              :style="{
                background: $vuetify.theme.dark ? theme.dark : theme.light,
              }"
              @click="saveSettings('setAccent', theme.id)"
            >
              <v-icon
                v-if="currentTheme === theme.id"
                size="14"
                :color="theme.id === 'gold' ? 'black' : 'white'"
                >mdi-check</v-icon
              >
            </div>
          </div>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentTheme: "gold",
    themes: [
      { id: "gold", light: "#D4AF37", dark: "#D4AF37" },
      { id: "ruby", light: "#C62828", dark: "#EF5350" },
      { id: "sapphire", light: "#1565C0", dark: "#42A5F5" },
      { id: "emerald", light: "#2E7D32", dark: "#66BB6A" },
      { id: "amethyst", light: "#6A1B9A", dark: "#AB47BC" },
      { id: "obsidian", light: "#37474F", dark: "#78909C" },
    ],
  }),
  mounted() {
    this.currentTheme = localStorage.getItem("themeAccent") || "gold";
  },
  methods: {
    saveSettings(parameter, themeId) {
      if (parameter === "darkMode") {
        localStorage.setItem("darkTheme", this.$vuetify.theme.dark);
      } else {
        const theme = this.themes.find((t) => t.id === themeId);
        if (theme) {
          this.currentTheme = themeId;
          localStorage.setItem("themeAccent", themeId);
          localStorage.setItem("lightAccent", theme.light);
          localStorage.setItem("darkAccent", theme.dark);
          this.$vuetify.theme.themes.light.primary = theme.light;
          this.$vuetify.theme.themes.dark.primary = theme.dark;
        }
      }
    },
  },
};
</script>

<style scoped>
.settings-btn {
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.settings-btn:hover {
  opacity: 1;
}

.settings-menu {
  border: 1px solid rgba(212, 175, 55, 0.1) !important;
  border-radius: 4px !important;
}

.text-display {
  font-family: "Playfair Display", serif !important;
}

.setting-label {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 500;
}

.theme-colors {
  gap: 8px;
}

.theme-color-option {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.theme-color-option:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
