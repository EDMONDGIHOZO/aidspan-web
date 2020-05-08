<template>

  <div class="header">
    <!---start of the navbar -->
    <v-app-bar app clipped-left flat
        style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
              background-color: white;
        ">
      <v-app-bar-nav-icon @click.stop="adminDraw = !adminDraw"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Aidspan Dashboard</span>
      </v-toolbar-title>
      <v-spacer> </v-spacer>
      <img :src="logo" class="admin-logo" alt="aidspan-logo" />
      <v-spacer></v-spacer>
      <v-avatar  color="secondary" size="36">
        <span class="white--text body">AD</span>
      </v-avatar>
      <v-btn text> Logout <v-icon right>mdi-logout</v-icon></v-btn>
    </v-app-bar>
    <!---end of the navbar -->
    <!-- start the side menu -->
    <v-navigation-drawer v-model="adminDraw" app clipped class="elevation-10" floating>
      <v-list dense>
          <v-list-item>
                <h1>Testing menu</h1>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>

</template>

<script>

  export default {
    data: () => ({
      adminDraw: true
    }),

    computed: {
      logo() {
        return this.$store.state.adminlogo
      }
    }
  }

</script>


<style scoped>

  .admin-logo {
    width: 90px;
  }
  #admin-navbar {
    border-bottom: solid 2px #f46618;
    background-color: red;
  }

</style>
