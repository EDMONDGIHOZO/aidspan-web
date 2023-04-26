<template>
    <div class="locales ml-2" style="border-bottom: solid 4px #fafafa">
        <v-btn
                v-for="locale in locales"
                :key="locale"
                rounded
                depressed
                :color="getColor(locale)"
                x-small
                class="text-white ml-1"
                @click="switchLocale(locale)"
        >{{ locale === 'en' ? 'English' : 'Français' }}
        </v-btn>
    </div>
</template>

<script>
export default {
    methods: {
        getColor(loc) {
            const current = localStorage.getItem('lang')
            if (current === loc) {
                return 'secondary'
            } else {
                return 'primary'
            }
        },
        switchLocale(locale) {
            if (this.$i18n.locale !== locale) {
                this.$i18n.locale = locale;
                this.$router.push({path: `/${locale}/c`});
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