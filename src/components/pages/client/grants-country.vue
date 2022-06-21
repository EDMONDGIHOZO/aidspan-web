<template>
  <v-row>
    <v-col cols="9">
      <v-card height="180" max-width="330" class="dynamicLegend elevation-17">
        <v-card-title>
          Dynamic Legend
        </v-card-title>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card id="legendContainer" flat>
        <v-card-title>
          <p class="blue--text font-weight-black">LEGENDS</p>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="legend in legends" :key="legend.rating">
              <v-chip
                class="ma-2"
                :color="legend.color"
                label
                text-color="white"
              >
                <v-avatar left>
                  <span class="white--text font-weight-black">
                    {{ legend.rating }}
                  </span>
                </v-avatar>
                {{ legend.title }}
              </v-chip>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
///end of importing ----///

export default {
  data() {
    return {
      ratingGroups: [
        { groupName: "Exceeds expectations", color: "#2F0459" },
        { groupName: "Good performance", color: "#5C12A6" },
        { groupName: "Meets expectations", color: "#7F25D9" },
        { groupName: "Adequate", color: "#F2E205" },
        { groupName: "Inadequate but potential", color: "#D98E04" },
        { groupName: "C Unacceptable", color: "#F9DB49" },
      ],
      legends: [
        { title: "Exceeds Expectations", color: "#FC5E02", rating: "A1" },
        { title: "Good performance", color: "#FA9E03", rating: "A" },
        { title: "Adequate", color: "#FDDB6D", rating: "B1" },
        {
          title: "Inadequate but potential demonstrated",
          color: "#195ECA",
          rating: "B2",
        },
        { title: "Unacceptable", color: "#1CBFD8", rating: "C" },
        { title: "Not available", color: "#1D7ED4", rating: "N/A" },
      ],
      defaultColor: "#1D7ED4",
    };
  },
  computed: {
    ...mapState([
      'Countries'
    ])
  },

  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  },
};
</script>
