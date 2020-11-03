<template>
  <div class="publication">
      <v-btn color="secondary" text outlined @click="$router.go(-1)">Back</v-btn>
    <v-card height="100" flat outlined class="my-5">
      <v-card-text>
        <v-row wrap>
          <v-col cols="12">
            <h2 class="text-center">{{publication.title}}</h2>

          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-row wrap>
      <v-col cols="12" md="3" class="files px-4 mx-3">
        <v-list dense>
          <v-list-item>
            <h4>Files</h4>
          </v-list-item>
          <v-list-item v-for="file in files" :key="file.fid">
            <v-list-item-content>
              <v-tooltip v-model="show" top color="secondary">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title v-text="file.file.filename" v-bind="attrs" v-on="on"></v-list-item-title>
                </template>
                <span>{{file.file.filename}}</span>
              </v-tooltip>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="downloadPublication(file.file.filename)">
                <v-icon color="grey lighten-1">mdi-download</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="5" class="description mx-3">
        <h4>Description</h4>
        <p v-html="publication.field_publication_description_value" class="my-5"></p>
      </v-col>
      <v-col cols="12" md="3" class="details mx-3">
        <h4 class="orange--text">Author | {{publication.field_publication_author_value}}</h4>
        <h5 class="mt-4">{{publication.created | formatDate}}</h5>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Api from "@/services/Api";
import Vue2Filters from "vue2-filters";
import DownloadPublication from "@/mixins/downloadPublication";
export default {
  name: "publication",
  props: ["pub_id"],
  data: () => ({
    publication: {},
    files: []
  }),
  mixins: [Vue2Filters.mixin, DownloadPublication],
  mounted() {
    Api()
      .get(`/publications/${this.pub_id}`)
      .then((response) => {
          this.publication = response.data.publication;
          this.files = response.data.files;
      })
      .catch();
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  height: 80px;
  padding: 10px;
}
.publication {
  margin: auto;
  max-width: 98%;
  padding: 10px;
}

.publication .files {
  height: 492px;
  left: 33px;
  top: 360px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  overflow-y: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.files::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.publication {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.publication .description {
  padding: 20px;
  background: #f464171a;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  border-top: solid 3px #ee8a07;
}

.publication .details {
  max-height: 130px;
  left: 1067px;
  top: 360px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}
</style>