<template>
  <div class="header">
    <v-app-bar height="84px" flat class="white">
      <img :src="logo" alt="aidspan-logo" />
      <!-- buttons field -->
      <v-spacer></v-spacer>
      <v-btn class="ma-12 subscribeBtn" rounded color="secondary">SUBSCRIBE TO NEWSLETTER</v-btn>
      <!--social media -->
      <v-icon v-for="social in icons" :key="social.icon" light tag="a" left color="primary">{{social.icon}}</v-icon>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  computed: {
    icons(){
      return this.$store.state.icons;
    },
    logo(){
      return this.$store.state.logo;
    }
  },
  data() {
    return {
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

.subscribeBtn{
  box-shadow: 4px 17px 19px rgba(21, 171, 226, 0.031);
  height: 100px;
  background-color: #F46517;
}
</style>