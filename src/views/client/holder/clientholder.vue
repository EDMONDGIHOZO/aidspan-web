<template>
  <!--- contain the client stuffs -->
  <div class="all">
    <!-- container the app header contents -->
    <Header> <Header>
    <router-view> </router-view>
    <footer> </footer>    
  </div>
</template>

<script>
import Header from "@/components/layouts/client/Header.vue";
export default {
  components: {
    Header
  }
};
</script>