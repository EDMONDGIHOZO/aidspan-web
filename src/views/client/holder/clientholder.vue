<template>
  <div class="holder">
    <Header></Header>
    <Menubar></Menubar>
    <keep-alive>
      <router-view :key="$route.path"></router-view>
    </keep-alive>
    <Footer> </Footer>
  </div>
</template>

<script>
import Header from "@/components/layouts/client/Header.vue";
import Menubar from "@/components/layouts/client/menubar.vue";
import Footer from "@/components/layouts/client/Footer.vue";
export default {
  components: {
    Header,
    Menubar,
    Footer
  }
};
</script>