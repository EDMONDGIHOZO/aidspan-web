<template>
    <nav class="d-flex d-sm-none">
        <v-app-bar fixed color="white" light flat>
            <img :src="appIcon" alt="aidspan-logo" width="40px"/>
            <p class="app-title aid-title">{{ $t("slogan") }}</p>
            <v-spacer></v-spacer>
            <Search :dialog="false" searchClass="mobile-search"/>
            <v-app-bar-nav-icon
                    @click.stop="mobMenu = !mobMenu"
                    color="#00AEEF"
            ></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-scroll-animation app v-model="mobMenu" right width="90%" color="primary" class="menu_container">
            <div class="py-6 px-6 d-flex justify-space-between align-center">
                <div class="d-flex justify-space-between align-center">
                    <div class="close_container mr-4" @click.stop="mobMenu = !mobMenu">
                        <v-icon color="white">mdi-close</v-icon>
                    </div>
                    <Search :dialog="false" searchClass="mobile-search"/>
                </div>
                <locale-switch/>
            </div>
            <v-divider></v-divider>
            <v-list
                    nav
                    class="mb-16"
            >
                <v-list-item-group
                        v-model="selected"
                        color="white"
                >
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            @click="navigateTo(item.path, i)"
                    >
                        <v-list-item-icon>
                            <v-icon color="white" v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="color: white !important;" v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                <v-divider/>
                <v-list-item class="mt-4">
                    <subscribe/>
                </v-list-item>
            </v-list>
            <div class="py-6 px-6 d-flex justify-space-between align-center">
                <strong class="white--text">Follow us on:</strong>
                <div>
                    <a href="https://www.facebook.com/Aidspan1/" target="_blank">
                        <v-icon size="30" class="mx-2" color="white">mdi-facebook</v-icon>
                    </a>
                    <a href="https://twitter.com/aidspan" target="_blank">
                        <v-icon size="30" class="mx-2" color="white">mdi-twitter</v-icon>
                    </a>
                    <a href="https://www.linkedin.com/company/aidspan" target="_blank">
                        <v-icon size="30" class="mx-2" color="white">mdi-linkedin</v-icon>
                    </a>
                </div>
            </div>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import localeSwitcher from "@/components/helpers/localeswitch.vue";
import Search from "@/components/helpers/search.vue";
import menuList from "@/components/layouts/client/Menu-list.vue";
import subscribe from "@/components/helpers/subscriptionForm";
import socials from "@/components/tools/sociallinks.vue";

export default {
    name: "Menubar",
    components: {
        socials,
        "locale-switch": localeSwitcher,
        "menu-list": menuList,
        subscribe,
        Search,
    },
    data() {
        return {
            mobMenu: false,
            selected: this.$route.path,
            items: [
                {text: this.$t('home.title'), icon: this.$t('home.action'), path: 'Homepage'},
                {text: this.$t('gfo.title'), icon: this.$t('gfo.action'), path: 'Editorial'},
                {text: this.$t('about.title'), icon: this.$t('about.action'), path: 'about'},
                {text: this.$t('analytics.title'), icon: this.$t('analytics.action'), path: 'Analytics'},
                {text: this.$t('policyStrategy.title'), icon: this.$t('policyStrategy.action'), path: 'strategy'},
                {text: this.$t('policy.title'), icon: 'mdi-seed', path: 'policy'},
                {text: this.$t('publications.title'), icon: 'mdi-folder', path: 'Publications'},
                {text: this.$t('watchdog.title'), icon: 'mdi-dog', path: 'watchdog'},
            ],
        };
    },
    methods: {
        navigateTo(pathName, i) {
            this.selected = i
            return this.$router.push({name: pathName});
        },
        gohome() {
            return this.$router.push({name: "Homepage"});
        },
        gogfo() {
            return this.$router.push({name: "Editorial"});
        },
        goabout() {
            return this.$router.push({name: "about"});
        },
        goanalytics() {
            return this.$router.push({name: "Analytics"});
        },
        gopubs() {
            return this.$router.push({name: "Publications"});
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
  margin-left: 0;
  margin-right: 0;
  display: flex;
  justify-content: center;
  background-color: #00aeef;
  padding: 10px 0px;
  border-radius: 10px;
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

.aid-title {
  font-size: 10px !important;
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

.mobmenu .menubtn {
  margin-top: 10px;
  text-align: left !important;
}

.close_container {
  border-radius: 50%;
  padding: 2px;
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
}

.close_container:hover {
  background: rgba(243, 243, 243, 0.76);
}

.menu_container {
  background: radial-gradient(73.22% 35.32% at 0% 0%, rgb(232, 149, 60) 0%, #00AEEF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
;
  border-radius: 32px 0 0 24px;
}


.logo_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.logo_container .logo {
  width: 120px;
  height: 120px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

</style>
