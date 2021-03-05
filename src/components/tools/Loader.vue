<template>
  <v-sheet class="px-3 pt-3 pb-3">
    <v-skeleton-loader class="mx-auto" :type="type"></v-skeleton-loader>
  </v-sheet>
</template>

<script>
export default {
  name: "loader",
  props: ["type"],
};
</script>