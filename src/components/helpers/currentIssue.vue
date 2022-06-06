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
        <h5 class="current-issue-title">{{ currentIssue.title }}</h5>
        <v-spacer></v-spacer>
        <v-btn color="white" icon @click="moveleft">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn color="white" icon @click="moveright">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        class="articles-container"
        @mousedown="changedown"
        @mouseleave="leave"
        @mouseup="up"
        @mousemove="move"
        ref="articles"
      >
        <v-card
          @click="goTo(article.nid)"
          class="current-article-home mx-3"
          max-width="420"
          min-height="400"
          outlined
          v-for="(article, i) in currentIssue.related_articles"
          :key="i"
        >
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
                <small>{{ article.created | formatDate}}</small>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import DownloadIssue from "@/mixins/downloadIssue";

export default {
  mounted() {
    this.$store.dispatch("loadCurrentIssue", this.$i18n.locale);
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", this.$i18n.locale);
    }
  },

  methods: {
    goTo(goToLink) {
      return this.$router.push({
        name: "article",
        params: { article_id: goToLink },
      });
    },

    changedown(e) {
      this.isDown = true;
      this.startX = e.pageX - this.$refs.articles.offsetLeft;
      this.scrollLeft = this.$refs.articles.scrollLeft;
    },

    leave() {
      this.isDown = false;
    },

    up() {
      this.isDown = false;
    },

    move(e) {
      if (!this.isDown) return;
      e.preventDefault();

      const x = e.pageX - this.$refs.articles.offsetLeft;
      const walk = (x - this.startX) * 3;
      this.$refs.articles.scrollLeft = this.scrollLeft - walk;
    },

    moveleft(e) {
      const x = e.pageX - this.$refs.articles.offsetLeft;
      const walk = (x - this.startX) * 2;
      this.$refs.articles.scrollLeft = this.scrollLeft - walk;
      this.scrollRight = this.$refs.articles.scrollRight;
    },
    moveright() {
      this.$refs.articles.scrollLeft += 450;
    },
  },

  data() {
    return {
      downloader: "",
      model: null,
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      scrollRight: 100,
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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #3dc0fc;
  color: white;
  border-radius: 0px 50px 50px 0px;
}

.current-article-home {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: top;
  border: #f46517 1px dotted;
}

.articles-container::-webkit-scrollbar {
  display: none;
}

.articles-container {
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
  margin: auto;
  scroll-behavior: smooth;
  justify-content: start;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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

  .current-issue-title {
    font-size: 0.7em;
    text-transform: uppercase;
  }

  .articles-container {
    padding: 0;
    margin-top: 20px;
  }
  .titlebar {
    border-radius: 0px;
  }
}
</style>
