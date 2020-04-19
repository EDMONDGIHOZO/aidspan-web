<template>
  <div class="menubar hidden-xs-only" id="menubar">
    <v-toolbar min-width="100%" color="primary">
      <!--- menubar list -->
      <v-btn router to="/" flat color="white" text depressed class="ma-2">Home</v-btn>
      <v-menu
        open-on-hover
        bottom
        transition="scale-transition"
        offset-y
        v-for="(menu, i) in menus"
        :key="i"
      >
        <template v-slot:activator="{ on }">
          <v-btn text router :to="menu.route" depressed class="ma-2" color="white" v-on="on">
            <v-icon left>{{ menu.action }}</v-icon>
            {{ menu.title }}
          </v-btn>
        </template>
        <v-list v-if="!menu.submenus.length !== 0">
          <v-list-item v-for="(submenu, index) in menu.submenus" :key="index">
            <v-btn text router :to="submenu.route" color="secondary">
              {{
              submenu.title
              }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn icon color="white" @click.stop="dialog = true">
        <v-icon small>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon color="white">en</v-btn>
    </v-toolbar>
    <!-- start the searchbox overlay -->
    <v-row justify-center>
      <v-dialog
        v-model="dialog"
        max-width="70%"
        transition="scale-transition"
        overlay-color="primary"
        overlay-opacity="0.4"
      >
        <v-card id="search-container">
          <v-card-title>
            <span class="headline">Search Aidspan</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="You can search an article, issue , etc .. "
                    required
                    outlined
                    rounded
                    background-color="white"
                    prepend-inner-icon="mdi-magnify"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-2" text @click="dialog = false">Search now</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!--end of search -->
  </div>
</template>

<script>
export default {
  computed: {
    menus() {
      return this.$store.state.menus;
    }
  },
  data() {
    return {
      // for search overlay //
      dialog: false,
      subscribeDialog: true,
      items: [
        {
          text: "English"
        },
        {
          text: "French"
        }
      ],
      langs: ["English", "French"],
      submenus: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ]
    };
  }
};
</script>

<style lang="scss">
#menubar {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  background-color: aqua;
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
