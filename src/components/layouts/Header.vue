<template>
  <div class="header">
    <v-app-bar height="84px" flat class="white">
      <img :src="logo" alt="aidspan-logo" />
      <!-- buttons field -->
      <v-spacer></v-spacer>
      <v-btn
        class="ma-12 subscribeBtn"
        rounded
        color="secondary"
        @click.stop="subscribeDialog = true"
        >SUBSCRIBE TO NEWSLETTER</v-btn
      >
      <!--social media -->
      <v-btn
        icon
        v-for="social in icons"
        :key="social.icon"
        light
        tag="a"
        left
        color="primary"
        :href="social.link"
        target="_blank"
      >
        <v-icon>{{ social.icon }}</v-icon></v-btn
      >
    </v-app-bar>
    <!-- subscribe dialog -->
    <v-dialog
      v-model="subscribeDialog"
      width="80%"
      overlay-opacity="0.8"
      overlay-color="secondary"
      transition="scale-transition"
    >
      <v-card id="subscribe-dialog">
        <v-flex md12 class="pa-5 title">
          <div class="ma-3">
            <div class="heading display-1 orange--text">
              SUBSCRIBE FOR NEWSLETTER
            </div>
            <div class="subHeading font-weight-light">
              for newsletter in English choose GFO or OFM for french
            </div>
          </div>
        </v-flex>
        <v-flex class="pa-2 content">
          <v-col cols="12" md="12">
            <v-form ref="form" v-model="valid" lazy-validation justify-center>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                outlined
                rounded
                color="secondary"
                background-color="white"
              ></v-text-field>
              <v-select
                v-model="select"
                :items="newsletters"
                :rules="[v => !!v || 'Item is required']"
                label="GFO or OFM ?"
                required
                class="white--text"
              ></v-select>
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on }">
                    <v-chip
                      class="ma-2"
                      color="teal"
                      text-color="white"
                      v-on="on"
                    >
                      <v-avatar left>
                        <v-icon>mdi-information</v-icon>
                      </v-avatar>
                      Read our user Agreements.
                    </v-chip>
                  </template>

                  <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                      Privacy Policy
                    </v-card-title>
                    <v-card-text>
                      By subscribing to this website you agree to receive our
                      newsletter every month.
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                        rounded
                      ></v-checkbox>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <v-btn
                :disabled="!valid"
                color="secondary"
                class="mr-8"
                rounded
                outlined
                block
                large
              >
                Subscribe
              </v-btn>
            </v-form>
          </v-col>
        </v-flex>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  computed: {
    icons() {
      return this.$store.state.icons;
    },
    logo() {
      return this.$store.state.logo;
    }
  },
  data() {
    return {
      //subscribe form
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      valid: false,
      select: null,
      newsletters: ["OFM", "GFO", "Both"],
      checkbox: false,
      //end of subscribe form
      subscribeDialog: true,
      image: require("@/assets/images/en/logo_en.png")
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 270px;
}

.topbar {
  height: 85px;
  padding: 20px;
}

.subscribeBtn {
  box-shadow: 4px 17px 19px rgba(21, 171, 226, 0.031);
  height: 100px;
  background-color: #f46517;
}
</style>
