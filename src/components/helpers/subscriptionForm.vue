<template>
  <div class="subs">
    <v-btn
      v-if="!subscribed"
      class="ma-12 subscribeBtn"
      rounded
      color="secondary"
      @click.stop="subscribeDialog = true"
    >{{$t("newsletterbtn")}}</v-btn>
    <!---subscribe dialog -->
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
          <v-col cols="12" v-if="thanks">
            <h3 class="green--text text-center">{{$t('thankyou.title')}}</h3>
            <h5 class="black--text text-center">{{$t('thankyou.message')}}</h5>
          </v-col>
          <v-col cols="12" md="12" v-else>
            <div class="ma-3">
              <div
                class="heading title text-center ma-4 font-weight-bold orange--text"
              >{{$t('newsletterbtn')}}</div>
              <div class="subHeading font-weight-light">{{$t('newsletterbtn_desc')}}</div>
            </div>
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
//import staffer from "@/services/staffer";
export default {
  data: () => ({
    subscribed: false,
    valid: false,
    thanks: false,
    loading: false,
    subscribeDialog: false,
    subscriber: {
      email: "",
      select: []
    },
    newsletters: ["OFM", "GFO", "BOTH"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    saveSubscriber() {
      this.thanks = true;
    },
  },
};
</script>