<template>
  <div class="issue">
    <v-col cols="12" id="article-container">
      <v-col cols="12" class="mx-3">
        <h1>issue 345</h1>
      </v-col>
      <v-card
        v-for="article in issueArticles"
        :key="article.art_id"
        class="ma-3 title-card"
        height="90px"
        href="/article"
      >
        <v-card-text>
          {{ article.title }}
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      issueArticles: [
        {
          title: "the title of an article in selected issue from the side bar",
          art_id: "safdafa",
          art_issue_id: 230
        },
        {
          title: "the title of an article in selected issue from the side bar",
          art_id: "saf",
          art_issue_id: 230
        },
        {
          title: "the title of an article in selected issue from the side bar",
          art_id: "dafa",
          art_issue_id: 230
        },
        {
          title: "the title of an article in selected issue from the side bar",
          art_id: "sadafa",
          art_issue_id: 230
        },
        {
          title: "the title of an article in selected issue from the side bar",
          art_id: "safdfa",
          art_issue_id: 230
        },
        {
          title: "the title of an article in selected issue from the side bar",
          art_id: "afdafa",
          art_issue_id: 230
        }
      ]
    };
  }
};
</script>

