<template>
  <div class="grantsByCountry">
    <v-list>
      <v-list-item v-for="area in areas" :key="area.geographicAreaId">
        <v-vard>
          <v-card-title v-text="area.geographicAreaName">
          </v-card-title>
          <v-card-text v-text="area.geographicAreaCode_ISO3">
          </v-card-text>
        </v-vard>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
//import axios for data fetching

export default {
  mounted: function loadGeoAreas() {
    this.$store.dispatch("loadGeoAreas");
  },

  computed: {
    areas() {
      return this.$store.state.Areas;
    }
  }
};
</script>
