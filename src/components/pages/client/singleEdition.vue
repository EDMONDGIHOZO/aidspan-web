<template>
  <div>
    <div v-if="loading">
      <v-progress-linear color="deep-orange accent-4" indeterminate rounded height="6"></v-progress-linear>
    </div>
    <div class="issue">
      <div class="header">
        <h4 class="text-uppercase">{{issuedetails.title }}</h4>
        <h4>{{issuedetails.related_articles.length}} Articles</h4>
      </div>
      <div class="articles">
        <v-card
          hover
          class="ma-3 single"
          v-for="article in issuedetails.related_articles"
          :key="article.article_number.field_article_number_value"
          @click="viewArticle(article.nid)"
        >
          <v-card-title class="font-weight-bold">{{article.title | str_limit(200)}}</v-card-title>
          <v-row wrap class="mx-auto">
            <v-col cols="6">
              <small>{{article.article_author.field_article_author_value}}</small>
            </v-col>
            <v-col cols="6">
              <p class="text-right">{{article.created | formatDate }}</p>
            </v-col>
          </v-row>
          <v-card-text>
            <p
              v-html="$options.filters.capitalize(article.article_abstract.field_article_abstract_value)"
              class="abstract-text text-left"
            ></p>
            <v-row>
              <v-col cols="6">
                <v-chip class="ma-2" color="primary">{{article.article_number.field_article_number_value}}</v-chip>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api";
export default {
  name: "edition",
  props: ["nid"],
  data: () => ({
    issuedetails: [],
    loading: true,
  }),
  created() {
    Api()
      .get(`/all-issues/${this.nid}`)
      .then((response) => {
        this.issuedetails = response.data;
        this.loading = false;
      });
  },

  methods: {
    back() {
      return this.$router.go(-1);
    },
    viewArticle(artnid) {
      return this.$router.push({
        name: "article",
        params: { article_id: artnid },
      });
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return (
        value.charAt(0).toUpperCase() + value.slice(1).substr(0, 800) + "..."
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.issue {
  padding: 20px;
  max-width: 90%;
  margin: auto;
}

.articles {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

@media only screen and (max-width: 520px) {
  .issue {
    margin-top: 30px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .articles .single {
    max-width: 100%;
  }
}
</style>