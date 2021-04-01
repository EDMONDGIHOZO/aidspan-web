<template>
  <div class="menubar hidden-xs-only" id="menubar">
    <Header class="d-none d-sm-flex"></Header>
    <v-app-bar min-width="100%" color="primary" flat class="menucontainer">
      <!--- menubar list -->
        <menu-list device="computer" />
      <!---menu end -->
      <v-spacer></v-spacer>
      <Search :dialog="false" searchClass="desktop-search" />
      <locale-switch></locale-switch>
    </v-app-bar>
  </div>
</template>

<script>
import Search from "@/components/helpers/search.vue";
import localSwitcher from "@/components/helpers/localeswitch.vue";
import Header from "@/components/layouts/client/Header.vue";
import menuList from "@/components/layouts/client/Menu-list.vue";

export default {
  computed: {
    menus() {
      return this.$store.state.menus.data;
    },
  },
  methods: {
    gohome() {
      return this.$router.push({ name: "Homepage" });
    },
    gogfo() {
      return this.$router.push({ name: "Editorial" });
    },
    goabout() {
        return this.$router.push({ name: "about" });
    },
    goanalytics() {
      return this.$router.push({ name: "Analytics" });
    },
    gopubs() {
      return this.$router.push({ name: "Publications" });
    },
    policy() {
      return this.$router.push({ name: "policy" });
    },
    strategy() {
      return this.$router.push({ name: "strategy" });
    },

    Vcountry() {
      return this.$router.push({ name: "GrantsPortfolio" });
    },
    onMutate() {
      let height = 0;
      const toolbar = this.$refs.toolbar;
      if (toolbar) {
        height = `${toolbar.$el.offsetHeight}px`;
      }
      document.documentElement.style.setProperty("--toolbarHeight", height);
    },
  },
  components: {
    Search,
    Header,
    "locale-switch": localSwitcher,
     "menu-list": menuList,
  },
};
</script>

<style lang="scss">
.right-icons .btn {
  float: right;
  margin-right: 3px;
}

.emptyList {
  display: none;
}
</style>
