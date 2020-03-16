<template>
  <div class="menubar hidden-xs-only">
    <v-toolbar flat>
      <v-btn
        text
        v-for="(menu,i) in menus"
        :key="i"
        router
        :to="menu.route"
        depressed
        class="ma-2"
        color="primary"
      >
        <v-icon left>{{menu.icon}}</v-icon>
        {{menu.title}}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon color="primary">
        <v-icon small>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon color="primary">
          en
      </v-btn>
    </v-toolbar>
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
      items: [
        {
          text: "English"
        },
        {
          text: "French"
        }
      ],
      langs: ["English", "French"]
    };
  }
};
</script>

<style lang="scss">
#menubar {
  margin-right: auto;
  margin-left: auto;
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

ul li {
  float: left;
}
</style>
