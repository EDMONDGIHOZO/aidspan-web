<template>
  <nav class="d-flex d-sm-none">
    <v-app-bar fixed>
      <img :src="appIcon" alt="aidspan-logo" width="40px" />
      <p class="app-title">{{$t('slogan')}}</p>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="mobMenu = !mobMenu" color="#00AEEF"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="mobMenu" right width="70%">
      <v-row>
        <v-col cols="12" class="pa-3">
          <div class="sticks">
            <div class="menutop">
              <img :src="logo" alt="aidspan-logo" width="80%" />
            </div>
            <div class="lang-switch">
              <locale-switch />
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <v-card flat class="mobmenu">
            <v-card-text>
              <v-btn  block depressed  class="menubtn" @click="gohome">{{$t('home.title')}}</v-btn>
              <v-btn block depressed  class="menubtn" @click="gogfo">{{$t('gfo.title')}}</v-btn>
              <v-btn
                depressed
                block
                 class="menubtn"
                @click="goabout"
              >{{$t('about.title')}}</v-btn>
              <v-btn
                
                block
                depressed
                 class="menubtn"
                @click="goanalytics"
              >{{$t('analytics.title')}}</v-btn>
              <v-btn
                
                depressed
                block
                class="menubtn"
                @click="gopubs"
              >{{$t('publications.title')}}</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import localeSwitcher from "@/components/helpers/localeswitch.vue";
export default {
  name: "Menubar",
  components: {
    "locale-switch": localeSwitcher,
  },
  data() {
    return {
      mobMenu: false,
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
    },
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
    },
  },
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

.mobmenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.mobmenu .menubtn{
    margin-top: 10px;
    text-align: left !important;
}
</style>
