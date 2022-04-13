<template>
  <div class="locales">
    <v-btn
      v-for="locale in locales"
      :key="locale"
      depressed
      class="text-white ml-2"
      dark
      outlined
      @click="switchLocale(locale)"
    >{{locale}}</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.$router.push({ path: `/${locale}/c` });
        localStorage.setItem("lang", locale);
        window.location.reload();
      }
    },
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
};
</script>

<style lang="scss" scoped>
.locales .langs {
  color: white;
}
</style>