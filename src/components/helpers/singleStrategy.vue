<template>
  <div class="container">
    <div class="text-center">
      <v-dialog v-model="dialog" max-width="800">
        <template v-slot:activator="{ on, attrs }">
          <div class="actions">
            <v-chip class="ma-2" color="secondary" outlined label>
              {{ date | formatDate }}
            </v-chip>
            <v-btn
              color="accent"
              class="ma-2"
              depressed
              v-bind="attrs"
              v-on="on"
            >
              {{ $t("readmore") }}
              <v-icon right>mdi-arrow-down-drop-circle-outline</v-icon>
            </v-btn>
          </div>
        </template>

        <v-card>
          <v-img
            :src="`https://gfo.aidspan.org/sites/default/files/strategic/${image}`"
          ></v-img>
          <v-card-title>
            <div class="tit-container">
              {{ title }}
            </div>
          </v-card-title>

          <v-card-text v-html="description"></v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> {{$t("close")}} </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date", "title", "description", "image"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.actions {
  width: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 6px;
}

.tit-container {
  padding: 10px;
  background: #00aeef;
  color: white;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  min-width: 100%;
}
</style>