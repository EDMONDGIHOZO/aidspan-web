<template>
  <div class="dashboard-container">
    <!--- dashboard top bar -->
    <admin-menu></admin-menu>
    <!--- dashboard sidebar -->
    <div class="dashboard-container">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </div>
</template>

<script>
import adminmenu from "@/components/layouts/admin/dashboardMenu.vue";
export default {
  name: "dashboard",
  components: {
    "admin-menu": adminmenu
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  background-color: rgba(240, 240, 240, 0.644);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
</style>
