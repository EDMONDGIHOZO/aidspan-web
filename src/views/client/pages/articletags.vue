<template>
  <div class="tags">
    <v-row>
      <side-bar></side-bar>
      <v-col cols="9" v-if="loadedTag">
        <v-card flat outlined v-for="tag in loadedTag" :key="tag.tid" class="pa-5">
          <v-card-title>{{tag.name}}</v-card-title>
          <v-row class="articles-container">
            <v-col cols="6" v-for="article in tag.articles" :key="article.nid">
              <v-card flat class="mb-5" shaped hover router :to="'/article/' + article.nid">
                <v-card-title>{{article.title}}</v-card-title>
                <v-card-text>
                    <span v-html="article.article_abstract.field_article_abstract_value" class="text"></span>
                </v-card-text>
                <v-card-actions>
                    <span class="px-4">{{article.created | formatDate }}</span>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="9">
          <v-card>
              <h1>We can't find this Tag's related data,</h1>
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
    return this.$store.dispatch("loadTag", this.$route.params.tid);
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

.articles-container {
    background-color: rgba(205, 207, 207, 0.267);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    padding: 10px;

}
</style>