<template>
  <div class="menubar hidden-xs-only" id="menubar">
    <v-toolbar min-width="100%" color="primary" class="menucontainer">
      <!--- menubar list -->
      <v-btn rounded class="mx-4" depressed color="primary" @click="gohome">
        <v-icon left small>{{$t('home.action')}}</v-icon>
        {{$t('home.title')}}
      </v-btn>
      <v-btn rounded class="mx-4" depressed color="primary" @click="gogfo">
        <v-icon left small>{{$t('gfo.action')}}</v-icon>
        {{$t('gfo.title')}}
      </v-btn>
      <v-btn rounded class="mx-4" depressed color="primary" @click="goabout">
        <v-icon left small>{{$t('about.action')}}</v-icon>
        {{$t('about.title')}}
      </v-btn>
      <v-btn rounded class="mx-4" depressed color="primary" @click="goanalytics">
        <v-icon left small>{{$t('analytics.action')}}</v-icon>
        {{$t('analytics.title')}}
      </v-btn>
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn rounded class="mx-4" depressed color="primary" v-on="on" v-bind="attrs" @click="gopubs">
            <v-icon left small>{{$t('publications.action')}}</v-icon>
            {{$t('publications.title')}}
          </v-btn>
        </template>
        <v-list shaped>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-title>{{$t('publications.submenus[0].title')}}</v-list-title>
            </v-list-item>
            <v-list-item>
              <v-list-title>{{$t('publications.submenus[1].title')}}</v-list-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <!---menu end -->
      <v-spacer></v-spacer>
      <Search />
      <locale-switch></locale-switch>
    </v-toolbar>
  </div>
</template>

<script>
import Search from "@/components/helpers/search.vue";
import localSwitcher from "@/components/helpers/localeswitch.vue";
export default {
  computed: {
    menus() {
      return this.$store.state.menus.data;
    }
  },
  methods: {
    gohome() {
      return this.$router.push({ name: "Homepage" });
    },
    gogfo() {
      return this.$router.push({ name: "Editorial" });
    },
    goabout(){
         return this.$router.push({ name: "about" });
    },
    goanalytics(){
         return this.$router.push({ name: "Analytics" });
    },
    gopubs(){
         return this.$router.push({ name: "Publications" });
    }
  },
  mounted() {
    const lang = "en";
    return this.$store.dispatch("loadMenu", lang);
  },
  components: {
    Search,
    "locale-switch": localSwitcher
  }
};
</script>

<style lang="scss">
#menubar {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}

.menucontainer {
  border-radius: 40px;
}

nav {
  -webkit-box-shadow: -1px 4px 5px 0px rgba(64, 186, 247, 0.53);
  -moz-box-shadow: -1px 4px 5px 0px rgba(64, 186, 247, 0.53);
  box-shadow: -1px 4px 5px 0px rgba(64, 186, 247, 0.53);
}

.right-icons .btn {
  float: right;
  margin-right: 10px;
}

.emptyList {
  display: none;
}
</style>
