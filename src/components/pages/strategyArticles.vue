<template>
  <div class="container">
    <v-row justify="center">
      <v-col cols="12">
        <div class="mainTitle">
          <h2>ARTICLES</h2>
        </div>
      </v-col>
      <v-row dense class="art-container">
        <v-col
          v-for="article in articles"
          :key="article.nid"
          cols="12"
          md="6"
          class="colu"
        >
          <v-card class="cards" flat min-height="300" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="article-title"
                  v-text="article.title"
                ></v-card-title>
                <v-divider></v-divider>
                <v-card-text
                  class="contents"
                  v-html="
                    $options.filters.str_limit(
                      article.description.body_value,
                      300
                    )
                  "
                >
                </v-card-text>
                <v-card-actions>
                  <Single
                    :date="article.created"
                    :description="article.description.body_value"
                    :title="article.title"
                    :image="article.image !== null ? `${article.image.image.filename}` : 'd'"
                  />
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3 elevation-5"
                size="125"
                rounded
                v-if="article.image !== null"
              >
                <v-img
                  :src="`https://gfo.aidspan.org/sites/default/files/strategic/${article.image.image.filename}`"
                ></v-img>
              </v-avatar>
              <v-avatar
                class="ma-3 elevation-5"
                color="secondary"
                size="125"
                rounded
                v-else
              >
                <span class="defaultLetter">{{ article.title.charAt(0) }}</span>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import Api from "@/services/Api";
import Single from "@/components/helpers/singleStrategy.vue";
export default {
  name: "strategy-articles",
  components: {
    Single,
  },
  data() {
    return {
      articles: [],
      loaded: false,
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },

  created() {
    this.getArticles();
  },

  methods: {
    //   get the articles
    getArticles() {
      Api()
        .get("strategies")
        .then((response) => {
          console.log(response.status);
          if (response.status == "200") {
            this.articles = response.data;
            this.loaded = true;
          } else {
            alert("someting went wrong, please check your network");
          }
        });
    },
  },
};
</script>

<style scoped>
.article-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
}

.container :is(.mainTitle) {
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.contents :is(p, span) {
  color: white;
  font-family: "Raleway", sans-serif !important;
  font-weight: normal !important;
  font-size: 18px !important;
  font-style: normal !important;
}

.defaultLetter {
  font-size: 34px;
  font-weight: bolder;
}

.art-container {
  width: 100%;
  /* important */
  display: flex;
  /* important */
  align-items: stretch;
  flex-direction: row;
  justify-content: space-around;
}

.art-container :is(.colu) {
  padding: 0.5em;
}

.cards {
  background: rgba(13, 148, 201, 0.514);
  border: dotted 0.5px white;
}
</style>