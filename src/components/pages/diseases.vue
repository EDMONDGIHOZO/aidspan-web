<template>
  <div class="diseases">
    <v-list>
      <v-list-item v-for="disease in diseases" :key="disease.componentId">
        <p>{{ disease.componentName }}</p>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  mounted: function() {
    this.$store.dispatch("loadDiseases");
  },

  computed: {
    diseases() {
      return this.$store.state.Components;
    },
  }
};
</script>
