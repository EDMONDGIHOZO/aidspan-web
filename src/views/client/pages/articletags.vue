<template>
  <div class="tags">
    <v-row>
      <v-col cols="12" md="3" class="sidebar-tags">
        <v-card outlined flat>
          <v-card-title>
            <h3 class="text-center text-uppercase font-weight-bold">Article Tags</h3>
          </v-card-title>
          <v-card class="ma-3">
            <side-bar />
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="9" v-if="currentTag">
        <v-card flat outlined v-for="tag in currentTag" :key="tag.tid" class="pa-5">
          <v-card-title>
            <h3 class="text-uppercase">{{tag.name}}</h3>
            <v-spacer></v-spacer>
            <v-chip class="ma-2" color="secondary" text-color="white">
              <v-avatar left class="primary">{{tag.articles.length}}</v-avatar>Article(s)
            </v-chip>
          </v-card-title>
          <v-alert type="warning" v-if="tag.articles.length === 0">
            No Articles found for
            <b>{{tag.name}}</b>
          </v-alert>
          <div class="articles-container" v-else>
            <v-card
              flat
              class="mb-5"
              width="400"
              hover
              @click="viewarticle(article.nid)"
              v-for="article in tag.articles"
              :key="article.nid"
            >
              <v-card-title>{{article.title}}</v-card-title>
              <v-card-text>
                <span v-html="article.article_abstract.field_article_abstract_value" class="text"></span>
              </v-card-text>
              <v-card-actions>
                <span class="px-4">{{article.created | formatDate }}</span>
              </v-card-actions>
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideBar from "@/views/client/pages/tagssidebar.vue";
import Api from "@/services/Api";

export default {
  components: {
    "side-bar": SideBar
  },

  data() {
    return {
      currentTag: [],
      searchQuery: "",
      searchResults: [],
      showTitle: true,
      loadingTags: true,
      
    };
  },
  name: "articletags",
  props: ["tid"],
  created() {
    Api()
      .get(`article-tags/${this.tid}`)
      .then(response => {
        this.currentTag = response.data.data;
        //this.loading = false;
      })
      .catch(error => console.log(error));
  },

  methods: {
    viewarticle(artnid) {
      return this.$router.push({
        name: "article",
        params: { article_id: artnid }
      });
    },
    findTags() {
      Api()
        .get(`article-tags/search?query=${this.searchQuery}`)
        .then(response => {
          this.searchResults = response.data.data;
          //this.loading = false;
        })
        .catch(error => console.log(error));
    },
    showSearch() {
      this.showTitle = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  max-width: 97%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}
.sidebar-tags {
  height: 80rem;
  overflow-y: scroll;
  border-radius: 10px;
}

.articles-container {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: rgba(238, 138, 8, 0.26);
  padding: 20px;
  border-radius: 10px;
}
.customtagsearch {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
