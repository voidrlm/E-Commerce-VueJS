<template>
  <v-container fluid fill-height style="background: black">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="rounded-xl" dark>
          <v-card-title class="justify-center pa-5">Login</v-card-title>

          <v-form class="px-8 mb-n2" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              color="black"
              prepend-inner-icon="mdi-account"
              label="Username"
              type="text"
              solo-inverted
              v-model="name"
              :counter="10"
              :rules="nameRules"
              rounded
              @keypress.enter="performAction('login')"
            ></v-text-field>
            <v-text-field
              color="black"
              prepend-inner-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              solo-inverted
              v-model="password"
              :rules="passwordRules"
              rounded
              @click:append="showPassword = !showPassword"
              @keypress.enter="performAction('login')"
            ></v-text-field>
          </v-form>

          <v-card-actions class="justify-center pb-5">
            <v-btn
              rounded
              color="accent"
              @click.stop="performAction('signup')"
              dark
              elevation="0"
              class="mr-5 px-4"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >
              Sign Up
            </v-btn>
            <v-btn
              rounded
              color="accent"
              @click.stop="performAction('login')"
              dark
              elevation="0 px-4"
              :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showSignUpForm" fullscreen
      ><signUpForm @closeForm="showSignUpForm = false"
    /></v-dialog>
  </v-container>
</template>
<script>
import signUpForm from "../components/userManagement/signUpForm.vue";
export default {
  name: "user-auth-component",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    showPassword: false,
    password: "",
    passwordRules: [
      (value) => !!value || "Password is required.",
      (value) => (value && value.length >= 8) || "Minimum 8 characters",
    ],
    showSignUpForm: false,
    userDatabase: [],
  }),
  components: {
    signUpForm,
  },
  computed: {},
  beforeCreate() {
    if (
      JSON.stringify(this.$store.getters.currentUser) !== JSON.stringify({})
    ) {
      this.$router.push({
        path: "/dashboard",
      });
    }
  },
  methods: {
    isUserValid() {
      this.userDatabase = [];
      if (localStorage.getItem("userDatabase") !== null) {
        this.userDatabase = JSON.parse(localStorage.getItem("userDatabase"));
        for (var i = 0; i < this.userDatabase.length; i++) {
          if (
            this.name === this.userDatabase[i].name &&
            this.password === this.userDatabase[i].password
          ) {
            return [true, this.userDatabase[i]];
          }
        }
        return [false];
      } else return [false];
    },
    performAction(action) {
      if (action === "signup") {
        this.showSignUpForm = true;
      } else {
        if (this.$refs.form.validate()) {
          if (this.isUserValid()[0] === true) {
            this.$store.dispatch("setCurrentUser", {
              name: this.isUserValid()[1].name,
              email: this.isUserValid()[1].mail,
              avatar: this.isUserValid()[1].avatar,
            });
            if (this.$router.currentRoute.path === "/") {
              this.$router.push({
                path: "/dashboard",
              });
            }
          } else alert("Cannot find user.");
        }
      }
    },
  },
};
</script>
