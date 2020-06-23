<template>
  <div class="locales">
    <v-chip color="secondary">
      <v-btn
        v-for="locale in locales"
        :key="locale"
        icon
        rounded
        class="langs"
        @click="switchLocale(locale)"
      >{{locale}}</v-btn>
    </v-chip>
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
    }
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",")
    };
  }
};
</script>

<style lang="scss" scoped>
.locales .langs {
  color: white;
}
</style>