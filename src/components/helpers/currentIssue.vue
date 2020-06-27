<template>
  <div>
    <!-- start latest issue section -->
    <v-row class="current-issue-home">
      <v-col cols="12" md="4">
        <p class="display-1">{{$t('currentissue')}}</p>
      </v-col>
      <v-col cols="6" md="4">
        <p class="title">{{ currentIssue.title }}</p>
      </v-col>
      <v-col cols="6" md="4" class="text-right">
        <v-btn
          text
          small
          color="primary"
          outlined
          @click.prevent="downloadIssue(currentIssue.title)"
        >
          <v-icon left>mdi-download</v-icon>download
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters wrap>
      <v-col class="xs12 md6 issue-date-container">
        <div class="issue-date"></div>
      </v-col>
    </v-row>
    <v-layout row wrap v-scrollAnimation>
      <v-slide-group class="pa-2" multiple show-arrows>
        <v-slide-item
          v-for="article in currentIssue.related_articles"
          :key="article.nid"
          v-slot:default="{ active, toggle }"
        >
          <v-flex xs12 sm4 md4 lg3>
            <v-card
              class="text-xs-center ma-3"
              id="current-article"
              hover
              flat
              height="400"
              width="400"
              outlined
              @click="toggle; goTo(article.nid)"
            >
              <v-card-title>
                <div class="title">{{ article.title | str_limit(70) }}</div>
              </v-card-title>
              <v-list-item class="grow">
                <v-list-item-avatar>
                  <v-icon>mdi-feather</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="author_name">{{ article.article_author.field_article_author_value}}</div>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon class="mr-1" small>mdi-history</v-icon>
                  <span class="subheading mr-2 article_date">{{ article.changed | formatDate}}</span>
                </v-row>
              </v-list-item>
              <v-card-text>
                <p
                  v-html="$options.filters.capitalize(article.article_abstract.field_article_abstract_value)"
                  class="abstract-text"
                ></p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-slide-item>
      </v-slide-group>
    </v-layout>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import DownloadIssue from "@/mixins/downloadIssue";

export default {
  mounted() {
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", this.$i18n.locale);
    }
    this.$store.dispatch("loadCurrentIssue", this.$i18n.locale);
  },

  methods: {
    goTo(goToLink) {
      return this.$router.push({
        name: "article",
        params: { article_id: goToLink }
      });
    }
  },

  data() {
    return {
      downloader: ""
    };
  },

  computed: {
    currentIssue() {
      return this.$store.state.currentIssueArticles.data || {};
    }
  },
  mixins: [Vue2Filters.mixin, DownloadIssue],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return (
        value.charAt(0).toUpperCase() + value.slice(1).substr(0, 320) + "..."
      );
    }
  }
};
</script>


<style lang="scss" scoped>
.abstract-text {
  overflow: hidden;
}
</style>
