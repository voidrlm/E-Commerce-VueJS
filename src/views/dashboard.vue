<template>
  <v-container fluid>
    <v-card-title
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'
      "
      ><v-icon
        size="35"
        class="mr-2"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        >{{
          getGreetingData === "Good Evening"
            ? "mdi-moon-waning-crescent"
            : "mdi-white-balance-sunny"
        }}</v-icon
      >{{ getGreetingData }},
      {{ $store.getters.currentUser.name }} !</v-card-title
    ><template>
      <div>
        <v-carousel hide-delimiters>
          <v-carousel-item
            :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
                <strong>Upto 60% + Extra 10%</strong>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
          <v-carousel-item
            :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
                <strong>Upto 60% + Extra 10%</strong>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
          <v-carousel-item
            :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
                <strong>Upto 60% + Extra 10%</strong>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
          <v-carousel-item
            :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
                <strong>Upto 60% + Extra 10%</strong>
              </div>
              <br />
            </v-row>
          </v-carousel-item>
        </v-carousel>
        <div class="pl-4 pr-4 row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <v-card>
              <v-img
                :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
              >
                <h1 class="text-center font-size">Top Picks</h1>
                <div class="text-center">
                  <v-btn href="/shop" class="white--text" outlined
                    >SHOP NOW</v-btn
                  >
                </div>
              </v-img>
            </v-card>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <v-card>
              <v-img
                :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
              >
                <h1 class="text-center font-size">New Arrivals</h1>
                <div class="text-center">
                  <v-btn href="/shop" class="white--text" outlined
                    >SHOP NOW</v-btn
                  >
                </div>
              </v-img>
            </v-card>
          </div>
        </div>
        <div class="pl-4 pr-4 row">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <v-card outlined>
              <v-img
                :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <h1 class="text-center font-size">Lorem & Ipsum</h1>
                <div class="text-center mt-2">
                  <v-btn class="white--text caption" href="/shop" text
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
                :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <h1 class="text-center font-size">Lorem & Ipsum</h1>
                <div class="text-center mt-2">
                  <v-btn class="white--text caption" href="/shop" text
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
                :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                class="white--text align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <h1 class="text-center font-size">Lorem & Ipsum</h1>
                <div class="text-center mt-2">
                  <v-btn class="white--text caption" href="/shop" text
                    >SHOP NOW
                    <v-icon class="white--text caption"
                      >mdi-arrow-right</v-icon
                    ></v-btn
                  >
                </div>
              </v-img>
            </v-card>
          </div>
        </div>
        <v-container>
          <v-row no-gutters>
            <v-col :cols="12">
              <v-card-text class="" tile outlined>
                <v-card-title class="subheading">Deals of the Day</v-card-title>
                <v-divider></v-divider>
                <div class="row">
                  <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <v-img
                          class="white--text align-end"
                          height="200px"
                          :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                        >
                          <v-card-title>Bags & Purses </v-card-title>
                        </v-img>

                        <v-card-text class="text--primary text-center">
                          <div>Upto 60% + Extra 10%</div>
                          <div>Baggit, Zara, Fossil</div>
                        </v-card-text>

                        <div class="text-center">
                          <v-btn
                            href="/shop"
                            class="ma-2"
                            outlined
                            color="info"
                          >
                            Explore
                          </v-btn>
                        </div>
                      </v-card>
                    </v-hover>
                  </div>
                  <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <v-img
                          class="white--text align-end"
                          height="200px"
                          :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                        >
                          <v-card-title>T-Shirt </v-card-title>
                        </v-img>

                        <v-card-text class="text--primary text-center">
                          <div>Upto 50%</div>
                          <div>Zara, Selected, Celio</div>
                        </v-card-text>

                        <div class="text-center">
                          <v-btn
                            href="/shop"
                            class="ma-2"
                            outlined
                            color="info"
                          >
                            Explore
                          </v-btn>
                        </div>
                      </v-card>
                    </v-hover>
                  </div>
                  <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <v-img
                          class="white--text align-end"
                          height="200px"
                          :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                        >
                          <v-card-title>Jeans </v-card-title>
                        </v-img>

                        <v-card-text class="text--primary text-center">
                          <div>Upto 60% + Extra 10%</div>
                          <div>Jack & Jones, Levis</div>
                        </v-card-text>

                        <div class="text-center">
                          <v-btn
                            href="/shop"
                            class="ma-2"
                            outlined
                            color="info"
                          >
                            Explore
                          </v-btn>
                        </div>
                      </v-card>
                    </v-hover>
                  </div>
                  <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2">
                        <v-img
                          class="white--text align-end"
                          height="200px"
                          :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'"
                        >
                          <v-card-title>Shoes </v-card-title>
                        </v-img>

                        <v-card-text class="text--primary text-center">
                          <div>Upto 60% + Extra 10%</div>
                          <div>Nike, Adidas, Puma</div>
                        </v-card-text>

                        <div class="text-center">
                          <v-btn
                            href="/shop"
                            class="ma-2"
                            outlined
                            color="info"
                          >
                            Explore
                          </v-btn>
                        </div>
                      </v-card>
                    </v-hover>
                  </div>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
        <v-card class="accent">
          <v-container>
            <v-row no-gutters>
              <v-col class="col-12 col-md-4 col-sm-12">
                <v-row>
                  <v-col class="col-12 col-sm-3 pr-4" align="right">
                    <v-icon class="display-2">mdi-truck</v-icon>
                  </v-col>
                  <v-col class="col-12 col-sm-9 pr-4">
                    <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                    <p class="font-weight-thin">Free Shipping over $300</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="col-12 col-md-4 col-sm-12">
                <v-row>
                  <v-col class="col-12 col-sm-3 pr-4" align="right">
                    <v-icon class="display-2">mdi-cash-usd</v-icon>
                  </v-col>
                  <v-col class="col-12 col-sm-9 pr-4">
                    <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                    <p class="font-weight-thin">30 Days Money Back Guarantee</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="col-12 col-md-4 col-sm-12">
                <v-row>
                  <v-col class="col-12 col-sm-3 pr-4" align="right">
                    <v-icon class="display-2">mdi-headset</v-icon>
                  </v-col>
                  <v-col class="col-12 col-sm-9 pr-4">
                    <h3 class="font-weight-light">020-800-456-747</h3>
                    <p class="font-weight-thin">24/7 Available Support</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </template>
  </v-container>
</template>
<script>
export default {
  name: "dashboard-component",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    activeBtn: 1,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
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
