<template>
  <div class="menubar hidden-xs-only" id="menubar">
    <Header class="d-none d-sm-flex"></Header>
    <v-app-bar min-width="100%" color="primary" flat class="menucontainer">
      <!--- menubar list -->
      <v-btn rounded class="mx-0" depressed color="primary" @click="gohome">
        <v-icon left small>{{$t('home.action')}}</v-icon>
        {{$t('home.title')}}
      </v-btn>
      <v-btn rounded class="mx-0" depressed color="primary" @click="gogfo">
        <v-icon left small>{{$t('gfo.action')}}</v-icon>
        {{$t('gfo.title')}}
      </v-btn>
      <v-btn rounded class="mx-0" depressed color="primary" @click="goabout">
        <v-icon left small>{{$t('about.action')}}</v-icon>
        {{$t('about.title')}}
      </v-btn>

      

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            rounded
            class="mx-1"
            depressed
            color="primary"
            v-bind="attrs"
            v-on="on"
            @click="goanalytics"
          >
            <v-icon left small>{{$t('analytics.action')}}</v-icon>
            {{$t('analytics.title')}}
          </v-btn>
        </template>
        <v-list rounded>
          <v-list-item @click="goanalytics">
            <v-btn depressed text rounded>Methodologies</v-btn>
          </v-list-item>
          <v-list-item @click="Vcountry">
            <v-btn depressed text rounded>Grants By Country</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            rounded
            class="mx-1"
            depressed
            color="primary"
            v-bind="attrs"
            v-on="on"
            @click="policy"
          >
            <v-icon left small>{{$t('policy.action')}}</v-icon>
            {{$t('policy.title')}}
          </v-btn>
        </template>
        <v-list rounded>
          <v-list-item @click="policy">
            <v-btn depressed text rounded>{{$t('policy.title')}}</v-btn>
          </v-list-item>
          <v-list-item @click="strategy">
            <v-btn depressed text rounded>{{$t('strategy.title')}}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn rounded class="mx-1" depressed color="primary" @click="gopubs">
        <v-icon left small>{{$t('publications.action')}}</v-icon>
        {{$t('publications.title')}}
      </v-btn>

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
