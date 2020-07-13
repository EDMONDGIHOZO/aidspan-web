<template>
  <nav class="d-flex d-sm-none">
    <v-app-bar fixed>
      <img :src="appIcon" alt="aidspan-logo" width="40px" />
      <p class="app-title">{{$t('slogan')}}</p>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="mobMenu = !mobMenu" color="#00AEEF"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer height="60%" app v-model="mobMenu" right hide-overlay width="100%">
      <v-layout row wrap class="pa-4">
        <v-flex>
          <div class="sticks">
            <div class="menutop">
              <img :src="logo" alt="aidspan-logo" width="80%" />
            </div>
            <div class="lang-switch">
              <locale-switch />
            </div>
            <v-divider class="my-4" dark />
          </div>
          <v-list id="menu" class="mx-5">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title @click="gohome">
                  <v-icon left small>{{$t('home.action')}}</v-icon>
                  {{$t('home.title')}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title @click="gogfo">
                  <v-icon left small>{{$t('gfo.action')}}</v-icon>
                  {{$t('gfo.title')}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title @click="goabout">
                  <v-icon left small>{{$t('about.action')}}</v-icon>
                  {{$t('about.title')}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title @click="goanalytics">
                  <v-icon left small>{{$t('analytics.action')}}</v-icon>
                  {{$t('analytics.title')}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title @click="goabout">
                  <v-icon left small>{{$t('publications.action')}}</v-icon>
                  {{$t('publications.title')}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <Header />
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import localeSwitcher from "@/components/helpers/localeswitch.vue";
import Header from "@/components/layouts/client/Header.vue";

export default {
  name: "Menubar",
  components: {
    "locale-switch": localeSwitcher,
    Header
  },
  data() {
    return {
      mobMenu: false
    };
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
    }
  },
  computed: {
    logo() {
      return this.$store.state.logo;
    },
    appTitle() {
      return this.$store.state.appTitle;
    },
    appIcon() {
      return this.$store.state.appIcon;
    },
    icons() {
      return this.$store.state.icons;
    }
  }
};
</script>

<style lang="scss" scoped>
.menutop {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.lang-switch {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
.menutop img {
  width: 200px;
}

.app-title {
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
}

#menu .submenu {
  cursor: pointer;
  background-color: orange;
}
</style>
