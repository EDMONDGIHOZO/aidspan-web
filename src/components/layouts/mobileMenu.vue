<template>
  <nav class="d-flex d-sm-none">
    <v-app-bar fixed>
      <v-app-bar-nav-icon @click.stop="mobMenu = !mobMenu" color="#00AEEF">
      </v-app-bar-nav-icon>
      <v-toolbar-title
        v-for="title in appTitle"
        :key="title.lang"
        style="font-family: Open Sans; font-style: normal;font-weight: bold; font-size: 14px; color: #808E95;"
        class="mx-4"
      >
        {{ title.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <img :src="appIcon" alt="aidspan-logo" width="40px" />
    </v-app-bar>
    <v-navigation-drawer app v-model="mobMenu" right width="60%">
      <v-layout row wrap class="pa-4">
        <v-flex>
          <div class="menutop">
            <img :src="logo" alt="aidspan-logo" width="80%" />
          </div>

          <v-divider class="my-4" dark />
          <v-text-field
            color="success"
            outlined
            rounded
            dense
            flat
            label="Search aidspan"
            prepend-inner-icon="mdi-magnify"
          />
          
              
            <v-list>
                <v-list-item v-for="menu in menus" :key="menu.id">
                    <v-btn router :to="menu.route" color="primary" dark>
                {{menu.title}}
              </v-btn>
                </v-list-item>
            </v-list>
         
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobMenu: false
    };
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
    menus() {
      return this.$store.state.menus;
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

.menutop img {
  width: 200px;
}
</style>
