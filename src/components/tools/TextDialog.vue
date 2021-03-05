<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="info lighten-2" text dark v-bind="attrs" v-on="on">
          read more
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="font-weight-black info lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text class="pa-4 black--text">
          {{ description }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            rounded
            depressed
            small
            :href="'mailto:?Subject=' + title + '&body=' + description"
            target="_blank"
          >
            <v-icon left small>mdi-share-variant-outline</v-icon> share to
            email</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["description", "title"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>