<template>
  <div class="dashboard-container">
    <adminheader></adminheader>
    <v-content>
      <h1>Welcome to dashboard</h1>
    </v-content>
  </div>
</template>

<script>
import adminheader from "@/components/layouts/admin/Admin-header.vue";
export default {
  components: {
    adminheader
  }
};
</script>