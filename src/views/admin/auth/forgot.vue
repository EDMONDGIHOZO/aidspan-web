<template id="forgot-password">
  <div class="contents">
    <Notification
      :message="notification.message"
      :type="notification.type"
      v-if="notification.message"
    />
    <div class="loading" v-if="loading">
      <v-progress-circular indeterminate color="amber"></v-progress-circular>
    </div>
    <p
      class="font-weight-black title pa-2 ma-5"
      style="border-left:solid 4px #F46516; text-transform: uppercase"
    >Forgot password</p>
    <v-card-text>
      <div>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          single-line
          persistent-hint
          outlined
          dense
          append-icon="mdi-email"
          required
          rounded
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-btn class="mr-4" @click="resetpwd" block rounded color="primary">Send Password Rest Link</v-btn>
      </div>
      <router-link to="/admin/auth/login">
        <p class="text-center ma-5 backtologin">Go back to login</p>
      </router-link>
    </v-card-text>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import staffer from "@/services/staffer";
import Notification from "@/components/helpers/notification";

export default {
  mixins: [validationMixin],
  name: "passwordReset",
  components: {
    Notification
  },
  validations: {
    email: { required, email }
  },

  data: () => ({
    email: "",
    loading: false,
    notification: {
      message: "",
      type: ""
    }
  }),
  methods: {
    resetpwd() {
      this.loading = true;
      const userinfo = {
        email: this.email
      };

      staffer
        .passwordReset(userinfo)
        .then(response => {
          if (response.data.message === "success") {
            this.email = "";
            this.loading = false;
            this.$router.push({ name: "mailreset" });
          } else if (response.data.type === "fail") {
            this.email = "";
            this.loading = false;
            // display error notification
            this.notification = Object.assign({}, this.notification, {
              message: response.data.message,
              type: response.data.type
            });
          }
        })
        .catch(error => {
          // clear form inputs
          this.email = "";

          // display error notification
          this.notification = Object.assign({}, this.notification, {
            message: error.response.data.message,
            type: error.response.data.type
          });
        });
    }
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  }
};
</script>

<style lang="scss" scoped>
.backtologin {
  cursor: pointer;
}
.loading {
  text-align: center;
  padding: 20px;
}

.backtologin:hover {
  color: #e62e16;
  font-weight: bold;
}
</style>
