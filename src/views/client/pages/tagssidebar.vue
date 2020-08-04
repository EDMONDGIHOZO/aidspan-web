<template>
  <div class="tags">
    <div class="progress" v-if="loading">
      <v-progress-circular :size="50" color="primary" :indeterminate="true"></v-progress-circular>
    </div>
    <ais-instant-search :search-client="searchClient" index-name="article_tags">
      <ais-configure :hits-per-page.camel="20" :query="searchQuery" />
      <v-list one-line>
        <v-list-item>
          <v-text-field
            label="type a tag name , "
            required
            single-line
            dense
            background-color="white"
            prepend-inner-icon="mdi-magnify"
            v-model="searchQuery"
          ></v-text-field>
        </v-list-item>
        <v-list-item-group mandatory>
          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <v-list-item @click="gototag(item.tid)">
                <v-chip class="ma-2" color="primary" small text-color="white">{{item.language}}</v-chip>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </ais-hits>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <div class="search-panel__filters">
        <ais-refinement-list
          :class-names="{
            'ais-RefinementList': 'langlist',
            'ais-RefinementList-item': 'langItem',
        }"
          attribute="language"
        />
      </div>
    </ais-instant-search>
  </div>
</template>


<script>
import algoliasearch from "algoliasearch";
export default {
  data() {
    return {
      search: "",
      tags: [],
      loading: false,
      maxNum: 40,
      en: "warning",
      fr: "primary",
      searchQuery: "",
      searchClient: algoliasearch(
        "60L5IRZWVM",
        "f79c7704105112a8735d1d2dc871b99b"
      )
    };
  },
  computed: {
    filteredtags() {
      return this.tags.filter(tag => {
        return tag.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    gototag(tid) {
      this.$router.push({
        name: "articletags",
        params: { tid: tid }
      });
    },
    findMore() {
      this.maxNum = this.maxNum + 10;
      console.log(this.maxNum);
    }
  }
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