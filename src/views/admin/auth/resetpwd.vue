<template id="forgot-password">

  <div class="contents">
    <Notification :message="notification.message"
                  :type="notification.type"
                  v-if="notification.message" />
    <p class="font-weight-black title pa-2 ma-5" style="border-left:solid 4px #F46516; text-transform: uppercase">CREATE NEW PASSWORD</p>
    <v-card-text>
      <form @submit.prevent="savenewpwd">
        <v-text-field v-model="NewPwd"
                      label="New Password"
                      single-line
                      persistent-hint
                      outlined
                      dense
                      append-icon="mdi-lock"
                      required
                      rounded
                      type="password"></v-text-field>
        <v-btn class="mr-4" @click="savenewpwd" block rounded color="primary">Save New Password</v-btn>
      </form>
      <router-link to="/admin/auth/login">
        <p class="text-center ma-5 backtologin">Go back to login</p>
      </router-link>
    </v-card-text>
  </div>

</template>
<script>
  import staffer from '@/services/staffer'
  import Notification from '@/components/helpers/notification'

  export default {
    name: 'passwordReset',
    components: {
      Notification
    },

    data: () => ({
      NewPwd: '',
      repeatpwd: '',
      notification: {
        message: '',
        type: ''
      }
    }),
    methods: {
      savenewpwd() {
        const newdata = {
          token: this.$route.params.token,
          email: this.$route.params.email,
          password: this.NewPwd
        }

        //send this params to backend
        staffer.resetpwd(newdata).then(response => {
          alert(response.data.message)
        })
      }
    }
  }

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
