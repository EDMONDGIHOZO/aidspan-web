<template>
  <div class="holder">
    <div class="tops">
      <Menubar></Menubar>
    </div>
    <MobileMenu></MobileMenu>
    <keep-alive class="client-contents">
      <router-view :key="$route.path"></router-view>
    </keep-alive>
   
    <Footer></Footer>
  </div>
</template>

<script>
import Menubar from "@/components/layouts/client/menubar.vue";
import MobileMenu from "@/components/layouts/client/mobileMenu.vue";
import Footer from "@/components/layouts/client/Footer.vue";


export default {
  components: {
    Menubar,
    Footer,
    MobileMenu,
  },
};
</script>

<style lang="scss" scoped>
.tops {
  padding: 10px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
