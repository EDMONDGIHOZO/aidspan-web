<template>
  <div>
    <!-- start latest issue section -->
    <v-row class="current-issue-home">
      <v-col cols="12" class="introduction-ofm-gfo">
        <h1>GFO & OFM</h1>
        <p>Aidspan Release Issues with articles every month, in French and English</p>
      </v-col>
      <v-col cols="12" md="4" class="current-issue-home-title">
        <h3>{{$t('currentissue')}}</h3>
      </v-col>
      <v-col cols="12" md="8" class="titlebar">
        <h3>{{ currentIssue.title }}</h3>
        <v-btn
          depressed
          small
          rounded
          color="white"
          @click.prevent="downloadIssue(currentIssue.title)"
        >
          <v-icon left small>mdi-download</v-icon>download
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-sheet class="mx-auto current-issue-articles-home">
          <v-slide-group v-model="model" multiple show-arrows>
            <v-slide-item
              v-for="article in currentIssue.related_articles"
              :key="article.nid"
              v-slot:default="{ active, toggle }"
            >
              <v-card class="current-article-home" shaped @click="toggle; goTo(article.nid)">
                <v-card-title>
                  <h4>{{ article.title | str_limit(70) }}</h4>
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
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
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
      downloader: "",
      model: []
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

.current-issue-home {
  margin-top: 80px;
  margin-bottom: 80px;
}

.current-issue-home h3 {
  font-weight: bold;
  text-transform: uppercase;
}

.current-issue-home-title {
  background-color: white;
  border: solid 1px #3dc0fc;
  border-radius: 50px 0px 0px 50px;
}

.introduction-ofm-gfo {
  padding: 30px;
  color: #f46517;
}

.titlebar {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #3dc0fc;
  color: white;
  border-radius: 0px 50px 50px 0px;
}

.current-issue-articles-home {
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin: 0;
  list-style: none;
  -ms-box-orient: horizontal;
  padding: 10px;
  border-radius: 20px;
}

.current-article-home {
  max-width: 400px;
  margin: 10px;
  border-radius: 10px;
}

.current-article-home:hover {
  box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #3dc0fc;
  color: white;
}

@media screen and (max-width: 520px) {
  .current-issue-home-title {
    border-radius: 0px;
    margin-bottom: 10px;
  }
  .current-article-home {
    padding: 0;
    width: 320px;
    margin: 0;
  }

  .current-issue-articles-home {
    padding: 0;
  }

  .titlebar {
    border-radius: 0px;
  }
}
</style>
