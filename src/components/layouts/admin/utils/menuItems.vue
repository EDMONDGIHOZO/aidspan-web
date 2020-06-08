<template>
  <v-list dense nav>
    <v-list-item v-for="menu in adminMenus" :key="menu.title" link @click="goto(menu.route)">
      <v-list-item-icon>
        <v-icon color="primary">{{ menu.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content color="primary">
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  computed: {
    adminMenus() {
      return this.$store.state.adminMenus;
    }
  },
  methods: {
    goto(menuRoute) {
      return this.$router.push({ path: menuRoute });
    }
  }
};
</script>