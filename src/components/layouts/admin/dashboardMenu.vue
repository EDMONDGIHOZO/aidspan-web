<template>
  <div class="header">
    <!---start of the navbar -->
    <v-app-bar
      app
      clipped-left
      flat
      style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
              background-color: white;
        "
    >
      <v-app-bar-nav-icon @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Aidspan Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <img :src="logo" class="admin-logo" alt="aidspan-logo" />
      <v-spacer></v-spacer>
      <div class="user">
        <span v-text="currentUser.username" class="font-weight-black user-name"></span>
        <v-btn text @click="logoutUser">
          Logout
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!---end of the navbar -->
    <v-navigation-drawer v-model="sidebar" app clipped class="elevation-2" floating>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">AIDSPAN DEV</v-list-item-title>
          <v-list-item-subtitle>Super Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <action-menu> </action-menu>
      <v-divider></v-divider>
      <!--general menu -->
         <menu-items> </menu-items>
        <v-divider></v-divider>
        <!--- quick actions --> 
        <settings-menu> </settings-menu>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Menu from '@/components/layouts/admin/utils/menuItems.vue';
import actions from '@/components/layouts/admin/utils/actionsMenu.vue';
import settings from "@/components/layouts/admin/utils/settings-menu.vue"
export default {
  data: () => {
    return {
      sidebar: true
    };
  },
  components: {
      'menu-items': Menu,
      'action-menu': actions,
      'settings-menu': settings
  },
  computed: {
    logo() {
      return this.$store.state.adminlogo;
    },
    ...mapState(["currentUser"])
  },
  methods: {
    logoutUser() {
      localStorage.removeItem("staff-token");
      return this.$router.push("/admin/auth/login");
    }
  }
};
</script>


<style scoped>
.admin-logo {
  width: 90px;
}
#admin-navbar {
  border-bottom: solid 2px #f46618;
  background-color: red;
}

.user-name {
  color: "grey";
  text-transform: uppercase;
}
</style>
