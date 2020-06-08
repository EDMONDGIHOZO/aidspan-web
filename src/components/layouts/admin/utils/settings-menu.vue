<template>
    <div class="settings">
        <v-list dense nav>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>SETTINGS</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    <v-list-item v-for="menu in settingsMenu" :key="menu.title" link @click="goto(menu.route)">
        <v-list-item-icon>
        <v-icon color="primary">{{ menu.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content color="primary">
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
    </div>
</template>

<script>
export default {
    computed: {
        settingsMenu(){
            return this.$store.state.settingsMenu;
        }
    }
}
</script>