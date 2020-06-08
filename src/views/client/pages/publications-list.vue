<template>
  <div>
    <v-hover v-for="pub in publications" :key="pub.nid">
      <template v-slot:default="{ hover }">
        <v-card class="ma-5" max-width="600">
          <v-chip
            v-for="pubtype in pub.publicationType"
            :key="pubtype.id"
            class="ma-5"
          >{{pubtype.name}}</v-chip>
          <v-card-text>
            <h2 class="title primary--text">{{pub.title}}</h2>
            <v-card-subtitle>
              <p
                color="secondary"
                class="orange--text font-weight-bold"
              >Published by {{pub.pub_author.field_publication_author_value}}</p>
              <v-spacer></v-spacer>
              <p>On {{pub.changed |formatDate}}</p>
            </v-card-subtitle>
            <span v-html="pub.pub_description.field_publication_description_value"></span>
          </v-card-text>

          <v-fade-transition>
            <v-overlay v-if="hover" absolute>
              <v-list dense class="downloads" v-if="pub.pub_file">
                <v-subheader v-if="pub.pub_file.length > 0">Available Downloads</v-subheader>
                <v-subheader v-else>No file available</v-subheader>
                <v-list-item-group color="primary" class="files">
                  <v-list-item v-for="file in pub.pub_file" :key="file.fid">
                    <v-list-item-content>
                      <v-list-item-title v-text="file.filename"></v-list-item-title>
                    </v-list-item-content>

                    <v-btn :href="file.filepath" icon right>
                      <v-icon small>mdi-download</v-icon>
                    </v-btn>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: ["publications" , 'pub_type'],

  methods: {
    sortBy(prop) {
      this.publications.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  data: () => ({
    overlay: false
  })
};
</script>

<style lang="scss" scoped>
.publication-card {
  background: #fcfcfc;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.07);
  border-radius: 35px;
  overflow: scroll;
  overflow-x: hidden;
  padding: 10px;
}
.downloads {
  padding: 20px;
  background-color: rgb(18, 68, 88);
  margin: 10px;
  border-radius: 10px;
}

.files {
  overflow-y: scroll;
  max-height: 300px;
}
#pubs-container {
  display: flex;
  justify-content: center;
  background-color: aqua;
}
</style>