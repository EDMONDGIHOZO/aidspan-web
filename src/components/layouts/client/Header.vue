<template>
  <div class="header">
    <v-app-bar app height="80px" flat class="white">
      <div v-if="current_language === 'fr'">
        <img
          :src="logo_fr"
          alt="aidspan-logo"
          class="d-none d-sm-flex head-logo"
        />
      </div>
      <div v-else>
        <img
          :src="logo"
          alt="aidspan-logo"
          class="d-none d-sm-flex head-logo"
        />
      </div>
      <!-- buttons field -->
      <v-spacer></v-spacer>
      <subscribe />
      <!--social media -->
      <socials color="primary" />
      <v-btn
        color="secondary"
        outlined
        class="mx-4"
        href="https://gfo.aidspan.org/user"
        target="_blank"
        >Login</v-btn
      >
    </v-app-bar>
    <!-- subscribe dialog -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import subscribe from "@/components/helpers/subscriptionForm";
import socials from "@/components/tools/sociallinks";
export default {
  computed: {
    ...mapState(["logo", "logo_fr"]),
  },
  mounted() {
    return (this.current_language = this.$i18n.locale);
  },
  components: {
    subscribe,
    socials,
  },
  data() {
    return {
      //subscribe form
      status: "",
      snackbar: false,
      timeout: 2000,
      frenchlogo: false,
      current_language: "",
      //end of subscribe form
      image: require("@/assets/images/en/logo_en.png"),
    };
  },
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
  overflow: hidden;
}
</style>
