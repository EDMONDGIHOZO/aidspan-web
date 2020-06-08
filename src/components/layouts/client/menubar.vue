<template>
  <div class="menubar hidden-xs-only" id="menubar">
    <v-toolbar min-width="100%" color="primary">
      <!--- menubar list -->
      <v-btn router to="/" text color="white" depressed class="ma-2">Home</v-btn>
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
      <Search />
      <v-btn icon color="white">en</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import Search from "@/components/helpers/search.vue";
export default {
  computed: {
    menus() {
      return this.$store.state.menus;
    }
  },
  data() {
    return {
      // for search overlay //
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
  },
  components: {
    Search
  }
};
</script>

<style lang="scss">
#menubar {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
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
