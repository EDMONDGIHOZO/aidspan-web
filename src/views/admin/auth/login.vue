<template id="login">

  <div class="contents">
    <p class="font-weight-black title pa-2 ma-5" style="border-left:solid 4px #F46516; text-transform: uppercase">Login as Staff Member</p>
    <Notification :message="notification.message"
                  :type="notification.type"
                  v-if="notification.message" />
    <v-card-text>
      <form @submit.prevent="login" >
        <v-text-field v-model="email"
                      :error-messages="emailErrors"
                      label="E-mail"
                      single-line
                      outlined
                      append-icon="mdi-email"
                      required
                       rounded
                      dense
                      autofocus
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"></v-text-field>

        <v-text-field v-model="password"
                      label="Password"
                      single-line
                      outlined
                      required
                      dense
                      append-icon="mdi-onepassword"
                      rounded
                      type="password"></v-text-field>
        <v-btn class="mr-4" block rounded color="primary" type="submit" @click="loginUser">login</v-btn>
      </form>
      <router-link to="forgot">
        <p class="text-center ma-5 forgot-pwd">Forgot Password</p>
      </router-link>
    </v-card-text>
  </div>

</template>
<script>

  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import staffer from '@/services/staffer'
  import Notification from '@/components/helpers/notification'
  export default {
    name: 'staffLogin',
    components: {
      Notification
    },
    mixins: [validationMixin],
    validations: {
      password: { required },
      email: { required, email }
    },
    data: () => ({
      email: '',
      password: '',
      notification: {
        message: '',
        type: ''
      }
    }),
    beforeRouteEnter(to, from, next) {
      const token = localStorage.getItem('staff-token')
      return token ? next('dashboard') : next()
    },
    methods: {
      login: function() {
        this.$v.$touch()
        //athentication
      },
      beforeRouteEnter(to, from, next) {
        const token = localStorage.getItem('staff-token')
        return token ? next('dashboard') : next()
      },
      loginUser() {
        const userdata = {
          email: this.email,
          password: this.password
        }
        staffer
          .login(userdata)
          .then(response => {
            // save token in localstorage
            localStorage.setItem('staff-token', response.data.data.token)
            console.log(response.data)
            // redirect to user home
            this.$router.push({name: 'dashboard'})
          })
          .catch(error => {
            // clear form inputs
            this.email = this.password = ''

            // display error notification
            this.notification = Object.assign({}, this.notification, {
              message: error.response.data.message,
              type: error.response.data.status
            })
          })
      }
    },
    computed: {
      emailErrors() {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    }
  }

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
