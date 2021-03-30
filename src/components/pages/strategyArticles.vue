<template>
  <div class="container">
    <v-row justify="center" v-if="loaded">
      <v-col cols="12">
        <div class="mainTitle">
          <h2>CONTENU</h2>
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
          <v-card
            class="cards"
            min-height="150"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="article-title"
                  v-text="$options.filters.str_limit(article.title, 130)"
                  @click="open(article.nid)"
                ></v-card-title>
                <v-card-subtitle class="date">
                  {{ article.created | formatDate }}
                </v-card-subtitle>
                 <v-btn color="white" small v-if="article.documents.length > 0" rounded class="ma-2 black--text" :href="article.documents[0].field_document_link_url" target="_blank">Télécharger</v-btn>
                <!-- <v-card-text
                  class="contents"
                  v-html="
                    $options.filters.str_limit(
                      article.description.body_value,
                      300
                    )
                  "
                >
                </v-card-text> -->
              </div>
              <v-avatar
                class="ma-3 elevation-5"
                size="125"
                rounded
                v-if="article.image !== null"
              >
                <v-img
                  :src="
                    `https://gfo.aidspan.org/sites/default/files/strategic/${article.image.image.filename}`
                  "
                  @click="open(article.nid)"
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
    <div class="contents" v-else>
      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar, divider, actions"
      ></v-skeleton-loader>

      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar-three-line, image, article"
      ></v-skeleton-loader>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api";
export default {
  name: "strategy-articles",
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
    open(nid) {
      this.$router.push({ name: "strategyContent", params: { id: nid } });
    },
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
  cursor: pointer;
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

.cards:hover {
  background: rgb(13, 148, 201);
}
</style>
