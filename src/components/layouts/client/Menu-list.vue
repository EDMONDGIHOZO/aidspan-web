<template>
  <div :class="device">
    <!--- menubar list -->
    <v-btn
      class="menuBtn"
      depressed
      color="primary"
      @click="gohome"
    >
      <v-icon left small>{{ $t("home.action") }}</v-icon>
      {{ $t("home.title") }}
    </v-btn>
    <v-btn
      class="menuBtn mx-2"
      depressed
      color="primary"
      @click="gogfo"
    >
      <v-icon left small>{{ $t("gfo.action") }}</v-icon>
      {{ $t("gfo.title") }}
    </v-btn>
    <v-btn
      class="menuBtn mr-2"
      depressed
      color="primary"
      @click="goabout"
    >
      <v-icon left small>{{ $t("about.action") }}</v-icon>
      {{ $t("about.title") }}
    </v-btn>

    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="menuBtn"
          depressed
          color="primary"
          v-bind="attrs"
          v-on="on"
          @click="goanalytics"
        >
          <v-icon left small>{{ $t("analytics.action") }}</v-icon>
          {{ $t("analytics.title") }}
        </v-btn>
      </template>
      <v-list rounded>
        <v-list-item @click="goanalytics">
          <v-btn depressed text rounded>Methodologies</v-btn>
        </v-list-item>
        <v-list-item @click="Vcountry">
          <v-btn depressed text rounded>Grants Portfolio</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="menuBtn mx-2"
          depressed
          color="primary"
          v-bind="attrs"
          v-on="on"
          @click="policy"
        >
          <v-icon left small>{{ $t("policyStrategy.action") }}</v-icon>
          {{ $t("policyStrategy.title") }}
        </v-btn>
      </template>
      <v-list rounded>
        <v-list-item @click="policy">
          <v-btn depressed text rounded>{{ $t("policy.title") }}</v-btn>
        </v-list-item>
        <v-list-item @click="strategy">
          <v-btn depressed text rounded>{{ $t("strategy.title") }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      class="menuBtn"
      depressed
      color="primary"
      @click="gopubs"
    >
      <v-icon left small>{{ $t("publications.action") }}</v-icon>
      {{ $t("publications.title") }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "menulist",
  props: ["device"],

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
};
</script>

<style scoped>
.mobile {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
}

.computer :is(.menuBtn) {
  margin: auto;
  font-size: 11px;
}

.mobile :is(.menuBtn) {
  margin-bottom: 10px;
  min-width: 100%;
  text-align: left;
  margin-left: 10px;
}
</style>
