<template>
  <div>
    <!-- start latest issue section -->
    <v-row class="current-issue-home">
      <v-col cols="12" class="introduction-ofm-gfo">
        <h1>GFO & OFM</h1>
        <p>{{$t('desc-gfo')}}</p>
      </v-col>
      <v-col cols="12" md="4" class="current-issue-home-title">
        <h3 class="blue--text lighten-4">{{$t('currentissue')}}</h3>
      </v-col>
      <v-col cols="12" md="8" class="titlebar">
        <h3>{{ currentIssue.title }}</h3>
      </v-col>
      <v-col cols="12" class="articles">
        <Carousel3d
          :controls-visible="true"
          :perspective="0"
          :space="400"
          :display="7"
          :height="400"
          :autoplay="true"
          :autoplayTimeout="2100"
          :count="7"
          
        >
          <Slide v-for="(article, i) in currentIssue.related_articles" :key="i" :index="i">
            <v-card @click="goTo(article.nid)" class="current-article-home mx-3" max-width="410" outlined>
              <v-card-title>
                <h5 class="text-left blue--text darken-1">{{ article.title | str_limit(70) }}</h5>
              </v-card-title>
              <v-list-item class="grow">
                <v-list-item-avatar color="primary" small>
                  <v-icon color="white">mdi-feather</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <div class="author_name">
                    <small>{{ article.article_author.field_article_author_value}}</small>
                  </div>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon class="mr-1" small>mdi-history</v-icon>
                  <span class="subheading mr-2 article_date">
                    <small>{{ article.changed | formatDate}}</small>
                  </span>
                </v-row>
              </v-list-item>
              <v-card-text>
                <p
                  v-html="$options.filters.capitalize(article.article_abstract.field_article_abstract_value)"
                  class="abstract-text text-left"
                ></p>
              </v-card-text>
            </v-card>
          </Slide>
        </Carousel3d>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import DownloadIssue from "@/mixins/downloadIssue";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
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
        params: { article_id: goToLink },
      });
    },
  },

  data() {
    return {
      downloader: "",
      model: null,
    };
  },

  computed: {
    currentIssue() {
      return this.$store.state.currentIssueArticles.data || {};
    },
  },
  mixins: [Vue2Filters.mixin, DownloadIssue],
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return (
        value.charAt(0).toUpperCase() + value.slice(1).substr(0, 320) + "..."
      );
    },
  },
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
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: top;
  border: #f46517 1px dotted;
}

.articles-container {
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
  margin: auto;
  scroll-behavior: smooth;
  justify-content: start;
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
    width: 340px;
    margin: 0;
  }

  .articles-container {
    padding: 0;
    margin-top: 20px;
  }
  .current-issue-articles-home {
    padding: 0;
  }

  .titlebar {
    border-radius: 0px;
  }
}

.carousel-3d-container {
  .carousel-3d-slide {
    padding: 1px;
    background-color: white;
    border: none;

    .title {
      font-size: 22px;
    }
  }
}
</style>
