<template>
  <div>
    <v-col cols="12" v-if="!edition">
      <v-progress-linear color="deep-orange accent-4" indeterminate rounded height="6"></v-progress-linear>
    </v-col>
    <div class="single-edition" v-for="details in edition" :key="details.nid">
      <v-row class="titlebar">
        <v-col cols="6">
          <v-btn rounded color="primary" depressed @click="back()">
            <v-icon left>mdi-backburger</v-icon>Tout Editions
          </v-btn>
        </v-col>
        <v-col cols="6">
          <p class="display-1 text-right text-uppercase">{{details.title}}</p>
        </v-col>
      </v-row>

      <v-row class="artis">
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="article in details.related_articles"
          :key="article.nid"
        >
          <v-card class="artcard" max-height="340" @click="viewArticle(article.nid)">
            <v-card-title>{{article.title | str_limit(70)}}</v-card-title>
            <v-card-text>
              <p
                v-html="$options.filters.capitalize(article.article_abstract.field_article_abstract_value)"
                class="abstract-text"
              ></p>
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-subtitle>{{article.article_author.field_article_author_value}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <span
                    class="subheading mr-2"
                  >{{article.article_number.field_article_number_value}}</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "edition",
  created() {
    return this.$store.dispatch("fetchedition", this.$route.params.nid);
  },
  computed: {
    edition() {
      return this.$store.state.edition.data;
    }
  },
  methods: {
    back() {
      return this.$router.go(-1);
    },
    viewArticle(artnid) {
      return this.$router.push({
        name: "article",
        params: { article_id: artnid }
      });
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return (
        value.charAt(0).toUpperCase() + value.slice(1).substr(0, 400) + "..."
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.single-edition {
  margin: auto;
  max-width: 96%;
}
.artis {
  background: rgba(206, 238, 254, 0.45);
  border: 1px solid #00adef;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.artcard {
  background: #ffffff;
  border: 0.5px solid #00aeef;
  box-sizing: border-box;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;
}
.titlebar {
  margin-top: 35px;
}

.artcard:hover {
  box-shadow: 2px 4px 4px rgba(3, 140, 158, 0.247);
  border-radius: 10px;
  font-weight: bold;
  background-color: rgb(236, 248, 252);
  cursor: pointer;
}
</style>