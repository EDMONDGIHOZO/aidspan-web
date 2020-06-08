<template>
    <div>
    <v-list dense nav>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>Quick Actions</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    <v-list-item v-for="menu in actionMenus" :key="menu.title" link router :to="menu.route">
      <v-list-item-content color="primary">
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item-content>
        <v-btn icon outlined color='primary' small> <v-icon color="primary">mdi-plus</v-icon></v-btn>
    </v-list-item>
  </v-list>
    </div>
</template>

<script>
export default {
    computed: {
        actionMenus(){
            return this.$store.state.actionMenus;
        }
    },
}
</script>