<template>
  <div class="container">
    <div class="single-strategy" v-if="loaded">
      <v-btn color="primary" class="ma-4" depressed rounded @click="back"
        ><v-icon left>mdi-arrow-left</v-icon> Retour</v-btn
      >
      <!-- thumbnail full image -->
      <div class="image-container">
        <v-parallax
          v-if="strategy.image !== null"
          :src="
            `https://gfo.aidspan.org/sites/default/files/strategic/${strategy.image.image.filename}`
          "
        ></v-parallax>
        <v-parallax
          v-else
          height="300"
          rounded
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        ></v-parallax>
      </div>

      <div class="title-container">
        <h1>{{ strategy.title }}</h1>
        <v-chip color="secondary" class="my-4">
          {{ strategy.created | formatDate }}
        </v-chip>
        <v-btn
          color="primary"
          small
          v-if="strategy.documents.length > 0"
          rounded
          depressed
          class="ma-2"
          :href="strategy.documents[0].field_document_link_url"
          target="_blank"
          >Télécharger</v-btn
        >
      </div>

      <div class="content">
        <span v-html="strategy.description.body_value"></span>
      </div>

      <div class="commentContainer">
        <v-badge
          color="blue"
          class="title mb-5 mt-5"
          :content="comments.length === 0 ? '0' : comments.length"
        >
          commentaires
          <v-icon right color="primary">mdi-comment</v-icon>
        </v-badge>
        <div class="commentsView">
          <v-card
            v-for="comment in comments"
            :key="comment.id"
            class="mb-5"
            max-width="700"
            shaped
            outlined
            color="#f8f9fa"
          >
            <v-card-title>{{ comment.name }}</v-card-title>
            <v-card-text>{{ comment.body }}</v-card-text>
            <v-card-actions>
              <span class="px-3">{{
                comment.created_at | formatDateWords
              }}</span>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <comments :id="strategy.nid" />
    </div>

    <div class="contents" v-else>
      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
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
import Comments from "./Comments.vue";
export default {
  name: "strategy",
  props: ["id"],
  data() {
    return {
      strategy: null,
      loaded: false,
      comments: [],
    };
  },

  components: {
    comments: Comments,
  },

  mounted() {
    this.getAsingle();
  },

  created() {
    this.$root.$refs.A = this;
  },

  methods: {
    back() {
      return this.$router.go(-1);
    },
    // fetch the strategy

    getAsingle() {
      Api()
        .get(`strategies/${this.id}`)
        .then((response) => {
          console.log(response.status);
          if (response.status == "200") {
            this.strategy = response.data;
            this.comments = response.data.comments;
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
.single-strategy {
  width: 98%;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.single-strategy :is(.image-container, .title-container, .contents) {
  width: 100%;
  padding: 10px;
}

.title-container h1 {
  color: #00aeef;
}

.commentsView {
  max-height: 350px;
  overflow-x: scroll;
  max-width: 700px;
}
</style>
