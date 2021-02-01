<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Aidspan",
  methods: {
    afterLeave() {
      this.$root.$emit("triggerScroll");
    },
  },

  mounted() {
    let checked = "12.456.677.8";
    let userid = checked.split(".").join("");
    if (!localStorage.getItem("your_id"))
      localStorage.setItem("your_id", userid);
  },

  ///remove the pop up from local storage
  /**beforeMount() {
    localStorage.removeItem("popstat");
  }, */
};
</script>
<style lang="scss">
$color-pack: true;
@import "~vuetify/src/styles/main.sass";
#app {
  scroll-behavior: smooth;
  font-family: "Raleway", sans-serif;
  transition-property: transform, visibility;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
