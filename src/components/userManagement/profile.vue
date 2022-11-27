<template>
  <v-dialog
    :value="showProfile"
    persistent
    max-width="400"
    content-class="rounded-xl"
    :overlay-opacity="0.8"
  >
    <v-card class="pa-5 text-center rounded-xl" max-width="400">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-avatar size="200">
            <v-img
              :src="
                $store.getters.currentUser.avatar
                  ? $store.getters.currentUser.avatar
                  : {
                      src: require('../../assets/defaultAvatar.png'),
                      text: 'Default Avatar',
                      extra: 'Avatar',
                    }
              "
            />
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                style="cursor: pointer"
                @click="$refs.avatarUpload.click()"
              >
                <input
                  type="file"
                  ref="avatarUpload"
                  style="display: none"
                  accept=".png, .jpg, .jpeg"
                  @change="avatarSelected($event.target.files)"
                />
                <v-icon size="50">mdi-pencil</v-icon>
              </v-overlay>
            </v-fade-transition>
          </v-avatar>
        </template>
      </v-hover>

      <v-list-item color="#0000" class="">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <v-text-field class="centered-input" v-model="name"></v-text-field
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn
        rounded
        color="accent"
        @click.stop="$emit('closeProfileDialog')"
        dark
        elevation="0"
        class="mr-5 px-4"
        :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
      >
        Close
      </v-btn>
      <v-btn
        :disabled="
          this.$store.getters.currentUser.name === name &&
          selectedAvatar === null
        "
        rounded
        color="accent"
        @click.stop="submitChanges"
        dark
        elevation="0"
        class="mr-5 px-4"
        :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
      >
        Save
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "profile-component",
  props: { showProfile: Boolean },
  data() {
    return {
      name: this.$store.getters.currentUser.name,
      selectedAvatar: null,
    };
  },
  computed: {},
  methods: {
    avatarSelected(img) {
      if (img[0].size <= 100000) {
        this.selectedAvatar = img;
      } else alert("Size exceeds more than one mb.");
    },
    submitChanges() {
      if (localStorage.getItem("userDatabase") !== null) {
        let userDatabase = JSON.parse(localStorage.getItem("userDatabase"));
        let currentUser = this.$store.getters.currentUser.name;
        for (var i = 0; i < userDatabase.length; i++) {
          if (currentUser === userDatabase[i].name) {
            this.$store.dispatch("setCurrentUser", {
              name: this.name,
              email: userDatabase[i].mail,
              avatar: null,
            });
            userDatabase[i].name = this.name;
            localStorage.setItem("userDatabase", JSON.stringify(userDatabase));
          } else console.log("User auth failed");
        }
      } else console.log("No userdatabase");
    },
  },
};
</script>
<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>
