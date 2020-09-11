<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div class="feedbox">
          <p>{{$t('feedback.info')}}</p>
          <v-btn color="white" outlined v-bind="attrs" v-on="on">{{$t('feedback.btn')}}</v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <span class="font-weight-bold">Feedback</span>
        </v-card-title>
        <v-card-text>
          <h3 class="text-center light-green--text" v-if="thankyou">{{$t('feedback.thanks')}}</h3>
          <v-container v-else>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" filled required v-model="email" :rules="emailRules"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="Feedback*"
                    type="text"
                    filled
                    auto-grow
                    required
                    v-model="description"
                  ></v-textarea>

                  <small>*indicates required field</small>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn
            color="blue darken-1"
            v-if="!thankyou"
            text
            @click="savefeedback"
            :disabled="!valid"
          >Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Api from "@/services/Api";
export default {
  data: () => ({
    dialog: false,
    thankyou: false,
    valid: true,
    email: "",
    description: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    savefeedback() {
      const formdata = {
        email: this.email,
        description: this.description,
      };
      if (this.$refs.form.validate()) {
        Api()
          .post("/feedbacks", formdata)
          .then((response) => {
            this.results = response.data;
            this.thankyou = true;
          })
          .catch();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.feedbox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  flex-direction: column;
}
</style>