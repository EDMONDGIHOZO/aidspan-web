<template>

  <nav class="d-flex d-sm-none">
    <v-app-bar fixed>
      <img :src="appIcon" alt="aidspan-logo" width="40px" />
      <p class="app-title">{{$t('slogan')}}</p>
      <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="mobMenu = !mobMenu" color="#00AEEF"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="mobMenu" left width="80%">
      <v-layout row wrap class="pa-4">
        <v-flex>
          <div class="menutop">
            <img :src="logo" alt="aidspan-logo" width="80%" />
          </div>
            <div class="lang-switch">
              <locale-switch />
            </div>
          <v-divider class="my-4" dark />
          <v-list id="menu">
            <v-list-group no-action>
              <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title @click="gohome">
                      <v-icon left small>{{$t('home.action')}}</v-icon>
                      {{$t('home.title')}}
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
            </v-list-group>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>

</template>

<script>

import localeSwitcher from "@/components/helpers/localeswitch.vue"

  export default {
    name: 'Menu bar',
    components: {
      "locale-switch": localeSwitcher
    },
    data() {
      return {
        mobMenu: false
      }
    },
    methods: {
      gohome() {
        return this.$router.push({ name: 'Homepage' })
      },
      gogfo() {
        return this.$router.push({ name: 'Editorial' })
      },
      goabout() {
        return this.$router.push({ name: 'about' })
      },
      goanalytics() {
        return this.$router.push({ name: 'Analytics' })
      },
      gopubs() {
        return this.$router.push({ name: 'Publications' })
      }
    },
    computed: {
      logo() {
        return this.$store.state.logo
      },
      appTitle() {
        return this.$store.state.appTitle
      },
      appIcon() {
        return this.$store.state.appIcon
      },
      icons() {
        return this.$store.state.icons
      }
    }
  }

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
