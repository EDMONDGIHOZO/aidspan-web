<template>
  <div>
    <div v-if="loading">
      <v-progress-linear
        color="deep-orange accent-4"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
    </div>
    <div class="issue">
      <div flat class="issue-header">
        <div>
          <p>
            {{ issuedetails.title }}
          </p>
        </div>
        <div>
          <v-btn
            rounded
            :loading="btnLoader"
            :disabled="btnLoader"
            color="secondary"
            depressed
            small
            class="mx-4"
            @click="
              loader = 'btnLoader';
              downloadIssue(issuedetails.title, issuedetails.language);
            "
          >
            Download
            <v-icon right> mdi-cloud-download </v-icon>
          </v-btn>
          <v-chip color="secondary" class="large">
            {{ issuedetails.related_articles.length }} Articles
          </v-chip>
        </div>
      </div>

      <v-row wrap class="articles-container">
        <v-col
          cols="12"
          md="4"
          class="single-card"
          v-for="article in issuedetails.related_articles"
          :key="article.article_number.field_article_number_value"
        >
          <v-card
            height="350"
            hover
            outlined
            class="ma-auto pa-4"
            @click="viewArticle(article.nid)"
          >
            <p class="font-weight-bold">{{ article.title | str_limit(200) }}</p>
            <v-row wrap class="mx-auto">
              <v-col cols="6" v-if="article.article_author !== null">
                <small>{{
                  article.article_author.field_article_author_value
                }}</small>
              </v-col>
              <v-col cols="6">
                <p class="text-right">{{ article.created | formatDate }}</p>
              </v-col>
            </v-row>
            <v-card-text>
              <p
                v-html="
                  $options.filters.capitalize(
                    article.article_abstract.field_article_abstract_value
                  )
                "
                class="abstract-text text-left"
              ></p>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="6">
                  <template v-slot:extension>
                    <v-fab-transition>
                      <v-btn color="pink" dark small left>{{
                        article.article_number.field_article_number_value
                      }}</v-btn>
                    </v-fab-transition>
                  </template>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <!--

            <v-col cols="12">
          <WebViewer
            :path="`${publicPath}lib`"
            :url="`${current_web}/sites/default/files/gfo/104/French/OFM EDITION 104.pdf`"
          />
        </v-col>
         -->
      </v-row>
    </div>
  </div>
</template>

<script>
import DownloadIssue from "@/mixins/downloadIssue";
import Api from "@/services/Api";
//import WebViewer from "@/views/client/pages/WebViewer.vue";
export default {
  name: "edition",
  props: ["nid"],
  data: () => ({
    issuedetails: [],
    link: "",
    loading: true,
    btnLoader: false,
    loader: null,
    publicPath: process.env.BASE_URL,
    current_web: window.location.origin,
  }),
  //   components: {
  //     WebViewer,
  //   },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 4000);

      this.loader = null;
    },
  },
  created() {
    Api()
      .get(`/all-issues/${this.nid}`)
      .then((response) => {
        this.issuedetails = response.data.issue_data;
        this.loading = false;
      });
  },
  mixins: [DownloadIssue],

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
        value.charAt(0).toUpperCase() + value.slice(1).substr(0, 300) + "..."
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.issue {
  padding: 20px;
  max-width: 95%;
  margin: auto;
  background-color: #eeeeee4b;
  border-radius: 15px;
  grid-column: span 4;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  background-color: var(--white);
  color: #000;
  color: var(--black);
  padding: 24px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: -webkit-box-shadow 0.2s ease-in-out;
  transition: -webkit-box-shadow 0.2s ease-in-out;
  transition: box-shadow 0.2s ease-in-out;
  transition: box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
}

.issue-header {
  border-bottom: solid 1px #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 0px 10px 0px;
}

.issue-header p {
  font-weight: bold;
  font-size: 18px;
}

.single-card {
  padding: 10px;
  margin: 12px auto 2px auto;
}
.issue-header h4 {
  font-size: 20px;
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
