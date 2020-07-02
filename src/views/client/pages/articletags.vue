<template>
  <div class="tags">
    <v-row>
      <v-col cols="12" md="3" class="sidebar-tags">
       <v-card outlined flat>
            <h3>FEATURED TAGS</h3>
        <side-bar></side-bar>
       </v-card>
      </v-col>
      <v-col cols="9" v-if="loadedTag">
        <v-card flat outlined v-for="tag in loadedTag" :key="tag.tid" class="pa-5">
          <v-card-title>
            <h3>{{tag.name}}</h3>
          </v-card-title>
          <div class="articles-container">
            <v-card
              flat
              class="mb-5"
              shaped
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
import { mapGetters } from "vuex";
import SideBar from "@/views/client/pages/tagssidebar.vue";

export default {
  components: {
    "side-bar": SideBar
  },
  name: "articletags",
  props: ["tid"],
  computed: {
    ...mapGetters(["loadedTag"])
  },

  mounted() {
    return this.$store.dispatch("loadTag", this.tid);
  },
  methods: {
    viewarticle(artnid) {
      return this.$router.push({
        name: "article",
        params: { article_id: artnid }
      });
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
  height: 400px;
  overflow-y: scroll;
}
</style>
