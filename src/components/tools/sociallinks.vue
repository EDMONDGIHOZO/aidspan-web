<template>
  <div class="social-links">
    <v-btn
      class="d-none d-sm-flex"
      icon
      v-for="social in icons"
      :key="social.icon"
      light
      small
      tag="a"
      left
      :color="color"
      :href="social.link"
      target="_blank"
    >
      <v-icon>{{ social.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["color"],
  computed: {
    ...mapState(["icons"]),
  },
};
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>