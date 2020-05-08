<template id="login">
  <div class="contents">
    <p
      class="font-weight-black title pa-2 ma-5"
      style="border-left:solid 4px #F46516; text-transform: uppercase"
    >Login as Staff Member</p>
    <v-card-text>
      <form @submit.prevent="login">
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

        <v-text-field
          v-model="password"
          :counter="10"
          label="Password"
          single-line
          solo
          required
          append-icon="mdi-onepassword"
          rounded
          type="password"
        ></v-text-field>
        <v-checkbox v-model="checkbox" label="Remember this browser?"></v-checkbox>
        <v-btn class="mr-4" block rounded color="primary" type="submit">login</v-btn>
      </form>
      <router-link to="/forgot">
        <p class="text-center ma-5 forgot-pwd">Forgot Password</p>
      </router-link>
    </v-card-text>
  </div>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  validations: {
    password: { required },
    email: { required, email }
  },
  data: () => ({
    email: "",
    password: "",
    checkbox: false
  }),
  methods: {
    login: function() {
      this.$v.$touch();
      //athentication
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
  }
};
</script>


<style lang="scss" scoped>
.forgot-pwd {
  cursor: pointer;
}

.forgot-pwd:hover {
  color: #e62e16;
  font-weight: bold;
}
</style>
