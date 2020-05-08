<template id="forgot-password">
  <div class="contents">
    <p
      class="font-weight-black title pa-2 ma-5"
      style="border-left:solid 4px #F46516; text-transform: uppercase"
    >Forgot password</p>
    <v-card-text>
      <form>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          single-line
          solo
          append-icon="mdi-email"
          required
          rounded
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-btn class="mr-4" @click="login" block rounded color="primary">Send Password Rest Link</v-btn>
      </form>
      <router-link to="/admin/auth/login"><p class="text-center ma-5 backtologin">Go back to login</p></router-link>
    </v-card-text>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email }
  },

  data: () => ({
    email: "",
    checkbox: false
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

};
</script>

<style lang="scss" scoped>
.backtologin {
  cursor: pointer;
}

.backtologin:hover {
  color: #e62e16;
  font-weight: bold;
}
</style>