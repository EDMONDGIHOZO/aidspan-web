<template>
  <div class="header">
    <v-app-bar height="84px" flat class="white">
      <div v-if="frenchlogo">
        <img :src="logo_fr" alt="aidspan-logo" class="d-none d-sm-flex d-md-none" />
      </div>
      <div v-else>
        <img :src="logo" alt="aidspan-logo"  class="d-none d-sm-flex d-md-none"/>
      </div>
      <!-- buttons field -->
      <v-spacer></v-spacer>
      <v-btn
        v-if="!subscribed"
        class="ma-12 subscribeBtn"
        rounded
        color="secondary"
        @click.stop="subscribeDialog = true"
      >{{$t("newsletterbtn")}}</v-btn>
      <!--social media -->
      <v-btn
        class="d-none d-sm-flex"
        icon
        v-for="social in icons"
        :key="social.icon"
        light
        small
        tag="a"
        left
        color="primary"
        :href="social.link"
        target="_blank"
      >
        <v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- subscribe dialog -->
    <v-dialog
      v-model="subscribeDialog"
      max-width="500"
      overlay-opacity="0.8"
      overlay-color="secondary"
      transition="scale-transition"
    >
      <v-card id="subscribe-dialog">
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          bottom
          color="deep-orange accent-4"
        ></v-progress-linear>
        <!--- loading -->
        <v-flex class="pa-2 content" v-if="!subscribed">
          <div class="ma-3">
            <div
              class="heading title text-center ma-4 font-weight-bold orange--text"
            >{{$t('newsletterbtn')}}</div>
            <div
              class="subHeading font-weight-light"
            >{{$t('newsletterbtn_desc')}}</div>
          </div>
          <v-col cols="12" md="12">
            <v-form ref="form" v-model="valid" lazy-validation justify-center>
              <v-text-field
                v-model="subscriber.email"
                :rules="emailRules"
                label="E-mail"
                required
                outlined
                rounded
                color="secondary"
                background-color="white"
              ></v-text-field>

              <v-select
                v-model="subscriber.select"
                :items="newsletters"
                :rules="[v => !!v || 'Item is required']"
                label="GFO or OFM ?"
                required
                class="white--text"
              ></v-select>

              <div class="text-center">
                <v-dialog v-model="dialog" max-width="400">
                  <template v-slot:activator="{ on }">
                    <v-chip class="ma-2" color="secondary" text-color="white" v-on="on">
                      <v-avatar left>
                        <v-icon>mdi-information</v-icon>
                      </v-avatar>Read our user Agreements.
                    </v-chip>
                  </template>
                  <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>
                    <v-card-text>By subscribing to this newsletter you agree to receive our newsletter every month.</v-card-text>
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
                @click="saveSubscriber"
              >{{$t('subscribe')}}</v-btn>
            </v-form>
          </v-col>
        </v-flex>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import staffer from "@/services/staffer";
export default {
  computed: {
    ...mapState(["icons", "logo", "logo_fr"]),
  },
  created(){
      if (localStorage.lang === 'fr'){
          return this.frenchlogo = true
      }
  },
  data() {
    return {
      //subscribe form
      dialog: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      valid: false,
      status: "",
      snackbar: false,
      loading: false,
      timeout: 2000,
      subscribed: false,
      frenchlogo: false,
      subscriber: {
        email: "",
        select: null
      },
      newsletters: ["OFM", "GFO"],
      checkbox: false,
      //end of subscribe form
      subscribeDialog: false,
      image: require("@/assets/images/en/logo_en.png")
    };
  },
  methods: {
    saveSubscriber() {
      const data = {
        email: this.subscriber.email,
        chosen: this.subscriber.select
      };
      this.loading = true;
      ///then use the services to talk to the API
      staffer
        .create(data)

        .then(response => {
          this.status = response.data.message;
          this.subscribeDialog = false;
          this.subscribed = false;
          localStorage.subscribed = this.subscribed;
          this.loading = false;
        })
        .catch(err => {
          alert(err);
        });
    }
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

.header {
  width: 98%;
}

.subscribeBtn {
  box-shadow: 4px 17px 19px rgba(21, 171, 226, 0.031);
  height: 100px;
  background-color: #f46517;
  overflow: hidden;
}
</style>
