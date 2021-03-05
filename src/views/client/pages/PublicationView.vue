<template>
  <div class="container">
    <div class="publication" v-if="loaded">
      <v-btn color="secondary" text outlined @click="$router.go(-1)"
        >back</v-btn
      >

      <div class="title-bar">
        <h2>{{ publication.title }}</h2>
      </div>

      <v-row wrap>
        <!-- <v-col cols="12" md="3" class="files px-4 mx-3">
          <v-list dense v-if="!nofiles">
            <v-list-item>
              <h4>Files</h4>
            </v-list-item>
            <v-list-item v-for="file in files" :key="file.fid">
              <v-list-item-content>
                <v-tooltip v-model="show" top color="secondary">
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item-title
                      v-text="file.file.filename"
                      v-bind="attrs"
                      v-on="on"
                    ></v-list-item-title>
                  </template>
                  <span>{{ file.file.filename }}</span>
                </v-tooltip>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="downloadPublication(file.file.filename)">
                  <v-icon color="grey lighten-1">mdi-download</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col> -->

        <v-col cols="12" md="8">
          <div class="description">
            <h4>Description</h4>
            <p
              v-html="
                publication.description.field_publication_description_value
              "
              class="my-5"
            ></p>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <info
            title="Author"
            :data="publication.author.field_publication_author_value"
          />
          <info
            title="Date Published"
            :data="publication.created | formatDate"
          />
          <info
            title="Category"
            :data="publication.pubType.field_publication_type_id_value === '2' ? 'GUIDE' : 'REPORT'"
          />
          <info
            :title="publication.publication_files.length + ' ' + 'file(s)' "
            :files="publication.publication_files"
            :isFiles="true"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api";
import Info from "@/components/tools/InfoBox.vue";
export default {
  name: "publication",
  props: ["pub_id"],
  data: () => ({
    publication: {},
    files: [],
    loaded: false,
    nofiles: true,
  }),

  mounted() {
    this.getPublication();
  },
  components: {
    info: Info,
  },

  methods: {
    getPublication() {
      Api()
        .get(`/publications/${this.pub_id}`)
        .then((response) => {
          this.publication = response.data.data;
          // check if files are greater than zero
          this.loaded = true;
          this.nofiles = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title-bar {
  height: 80px;
  padding: 10px;
  margin-top: 20px;
  border-bottom: #ee8a07 dotted 1px;
}
.publication {
  margin: auto;
  padding: 10px;
}

.publication .files {
  height: 492px;
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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  border-top: solid 3px #ee8a07;
}

.publication .details {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}
</style>