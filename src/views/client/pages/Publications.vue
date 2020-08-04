<template>
  <div class="publications">
    <div class="sidenav">
      <v-btn icon @mouseover="seen = !seen" color="primary">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <div class="menus" v-if="!seen">
        <v-btn depressed rounded color="secondary" class="mx-3" href="#reports">Reports</v-btn>
        <v-btn depressed rounded color="primary" class="mx-3" href="#guides">Guides</v-btn>
      </div>
    </div>
    <Reports id="reports" />
    <Guides id="guides" />
  </div>
</template>
<script>
import Reports from "@/views/client/pages/reports.vue";
import Guides from "@/views/client/pages/Guides.vue";
export default {
  name: "publications",
  components: {
    Reports,
    Guides,
  },
  data: () => ({
    seen: false,
  }),
};
</script>
<style lang="scss" scoped>
.sidenav {
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  border-radius: 10px;
}
.sidenav .menus {
  overflow-x: hidden;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 23px rgba(0, 0, 0, 0.1);
  background-color: white;
}


@media only screen and (max-width: 600px) {
  .sidenav {
      bottom: 0;
  }
  #reports {
      margin-top: 40px;
  }
}




</style>