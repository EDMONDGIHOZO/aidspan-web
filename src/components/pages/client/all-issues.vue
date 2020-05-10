<template>
  <v-container fluid>
    <div class="all">
      <v-col cols="12" class="mb-3">
        <v-btn small text color="primary" depressed @click="sortBy('title')">
          <v-icon left small>mdi-folder</v-icon>
          <span class="caption text-lowercase">By Issue Number</span>
        </v-btn>
        <v-btn small flat color="secondary" depressed @click="sortBy('date')" class="mx-2">
          <v-icon left small>mdi-calendar</v-icon>
          <span class="caption text-lowercase">By Issue Date</span>
        </v-btn>
      </v-col>
      <v-row wrap>
        <v-col cols="12">
          <v-expansion-panels focusable popout hover>
            <v-expansion-panel v-for="issue in issues" :key="issue.nid">
              <v-expansion-panel-header>
                <span class="title issue-title">
                  {{issue.title}}
                  <v-chip class="ma-2" color="primary" label text-color="white">
                    <v-icon left>mdi-label</v-icon>
                    {{issue.__meta__.related_articles_count}} Articles
                  </v-chip>
                  <v-btn text>
                    <v-icon left>mdi-download</v-icon>Download
                  </v-btn>
                </span>
                <v-spacer></v-spacer>
                <span class="text-right">
                  <v-icon right color="secondary" small>mdi-calendar</v-icon>
                  {{issue.created | formatDate }}
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    v-for="article in orderBy(issue.related_articles, 'article_number.field_article_number_value')"
                    :key="article.nid"
                  >
                    <v-card class="ma-1 article-card" hover min-height="200" flat router :to="{name: 'article', params: {article_id: article.nid}}">
                      <v-list-item>
                        <v-list-item-avatar color="primary">
                          <span
                            class="white--text headline"
                          >{{article.article_number.field_article_number_value}}</span>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="headline blue--text">{{ article.title }}</v-list-item-title>
                          <v-list-item-subtitle>By {{article.article_author.field_article_author_value}}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-card-text
                        class="black--text"
                        v-html="article.article_abstract.field_article_abstract_value"
                      ></v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <paginate collection="issues" />
    </div>
  </v-container>
</template>

<script>
import paginate from "@/components/helpers/pagination.vue";
import Vue2Filters from "vue2-filters";
export default {
  mounted() {
    this.$store.dispatch("loadIssues");
  },

  computed: {
    issues() {
      return this.$store.state.issues.data;
    }
  },
  components: {
    paginate
  },
  mixins: [Vue2Filters.mixin]
};
</script>

<style lang="scss" scoped>
.all {
  margin-left: auto;
  margin-right: auto;
}

.issue-title {
  text-transform: uppercase;
}

.single-issue-card {
  border-left: solid #4cd2f3 2px;
  margin: 12px;
}
.article-card {
  border-top: solid #44ccdd 3px;
}
</style>
