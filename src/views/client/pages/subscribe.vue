<template>
  <div class="subscribe">
    <v-card id="subscribe-dialog" max-width="500" outlined flat>
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
          <h3 class="green--text text-center">{{ $t("thankyou.title") }}</h3>
          <h5 class="black--text text-center">{{ $t("thankyou.message") }}</h5>
          <small class="center-text green--text">{{ message }}</small>
          <v-btn
            color="primary"
            small
            class="ma-4"
            depressed
            href="/en/c/editorial"
            >Read Latest Issue</v-btn
          >
        </v-col>
        <v-col cols="12" md="12" v-else>
          <div class="ma-3">
            <div
              class="heading-2 card-tit text-center ma-4 font-weight-bold orange--text"
            >
              {{ $t("newsletterbtn") }}
            </div>
            <div class="subHeading font-weight-light">
              {{ $t("newsletterbtn_desc") }}
            </div>
          </div>
          <v-form ref="form" v-model="valid" lazy-validation justify-center>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              dense
              outlined
              color="secondary"
              background-color="white"
              type="email"
            ></v-text-field>

            <v-select
              v-model="selections"
              :items="newsletters"
              item-value="event_type_id"
              item-text="title"
              return-object
              label="Select Newsletter(s)"
              multiple
              dense
              outlined
              chips
            ></v-select>
            <div class="text-center">
              <v-dialog v-model="dialog" max-width="400">
                <template v-slot:activator="{ on }">
                  <v-chip
                    class="ma-2"
                    color="secondary"
                    text-color="white"
                    v-on="on"
                  >
                    <v-avatar left> <v-icon>mdi-information</v-icon> </v-avatar
                    >Read our user Agreements.
                  </v-chip>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title
                    >Privacy Policy</v-card-title
                  >
                  <v-card-text
                    >By subscribing to this newsletter you agree to receive our
                    newsletter every month.</v-card-text
                  >
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="Do you agree?"
                      required
                      rounded
                    ></v-checkbox>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <v-btn
              color="secondary"
              class="mr-8"
              rounded
              outlined
              block
              large
              @click="saveSubscriber"
              >{{ $t("subscribe") }}</v-btn
            >
          </v-form>
        </v-col>
      </v-flex>
    </v-card>
    <div class="text-center">
      <v-snackbar v-model="snackOn" top vertical>
        {{ snacktext }}

        <template v-slot:action="{ attrs }">
          <v-btn color="indigo" text v-bind="attrs" @click="snackOn = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api";
export default {
  data: () => ({
    subscribed: false,
    valid: false,
    dialog: false,
    thanks: false,
    loading: false,
    checkbox: false,
    snackOn: false,
    snacktext: "email adress must be valid!",
    message: "",
    subscriber: {
      email: "",
      select: [],
    },
    email: "email",
    selections: [],
    newsletters: [
      {
        title: "GFO",
        event_type_id: 9,
      },
      {
        title: "OFM",
        event_type_id: 10,
      },
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail and newsletter selection must be valid",
    ],
  }),

  /** created() {
    ///check if the it alread poped up in local storage
    const popstatus = localStorage.getItem("popstat");
    if (popstatus === null) {
      localStorage.setItem("popstat", true);
      this.subscribeDialog = true;
    } else {
      this.subscribeDialog = false;
    }
    /// set the pop up status in local storage
  }, */
  methods: {
    saveSubscriber() {
      const validation = this.$refs.form.validate();

      if (validation === true && this.selections.length !== 0) {
        this.thanks = true;
        const formdata = {
          email: this.email,
          newsletters: this.selections,
        };

        var jsoned = JSON.stringify(formdata);

        Api()
          .post("/subscribers", jsoned)
          .then((response) => {
            this.message = response.data.message;
          });
      } else {
        this.snackOn = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#subscribe-dialog {
  margin-top: 30px;
  margin-bottom: 30px;
}

.card-tit {
  font-size: 20px;
}
</style>
