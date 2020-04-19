<template>
  <v-app>
    <!-- first header include main aidspan informations -->
    <MobileMenu></MobileMenu>
    <Header class="d-none d-sm-flex"></Header>
    <!--end of first header -->
    <!-- second header include all the menu -->
    <Menubar class="d-none d-sm-flex"></Menubar>
    <!--end of first header -->
    <!--all contents from routers -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>
<script>
import Header from "./components/layouts/client/Header.vue";
import Footer from "./components/layouts/client/Footer.vue";
import Menubar from "./components/layouts/client/menubar.vue";
import MobileMenu from "./components/layouts/client/mobileMenu.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menubar,
    MobileMenu
  }
};
</script>

<style lang="scss">
$color-pack: true;
@import "~vuetify/src/styles/main.sass";
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  transition-property: transform, visibility;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
