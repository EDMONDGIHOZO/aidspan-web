<template>
  <div class="tags">
    <div class="progress" v-if="loading">
      <v-container style="height: 400px;">
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="text-center" cols="12">Getting Tags</v-col>
          <v-col cols="6">
            <v-progress-linear color="deep-orange accent-4" indeterminate rounded height="6"></v-progress-linear>
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <v-list dense v-else>
      <v-list-item>
        <v-text-field
          label="Search in tags"
          type="text"
          ref="search"
          single-line
          hide-details
          background-color="white"
          prepend-inner-icon="mdi-magnify"
          dense
          v-model.trim="search"
        ></v-text-field>
      </v-list-item>
      <v-list-item-group color="secondary" rounded>
        <v-list-item v-for="artag in filteredtags" :key="artag.name" @click="viewtag(artag.tid)">
          <v-list-item-content>
            <v-list-item-title v-text="artag.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>


<script>
import Api from "@/services/Api";
export default {
  data() {
    return {
      search: "",
      tags: [],
      loading: true,
      maxNum: 2500,
    };
  },
  computed: {
    filteredtags() {
      return this.tags.filter((tag) => {
        return tag.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  created() {
    Api()
      .get(`article-tags/all/${this.maxNum}`)
      .then((response) => {
        this.tags = response.data;
        this.loading = false;
      });
  },
  methods: {
    viewtag(tid) {
      this.$router.push({
        name: "articleTags",
        params: { tid: tid },
      });
    },
    findMore() {
      this.maxNum = this.maxNum + 10;
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar-tags {
  max-height: 20%;
  overflow-x: scroll;
}

.search-results {
  width: 100%;
  margin: auto;
}

.progress {
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-panel__filters {
  display: flex;
  background-color: rgb(255, 255, 255);
  color: #3dc0fc;
  font-weight: bold;
  padding: 5px;
  border-bottom-left-radius: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: -2px 4px 5px rgba(43, 183, 255, 0.15);
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  z-index: 1;
  border-top: solid 4px #f46517;
}
</style>