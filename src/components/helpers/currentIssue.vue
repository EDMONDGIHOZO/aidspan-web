<template>
  <div>
    <!--- current issue -->
    <v-col cols="12" md="9" class="current-issue-articles">
        <h1>Current Issue </h1>
      <v-row>
        <v-col v-for="article in currentIssue.related_articles" :key="article.nid" cols="12" md="6">
          <v-card flat class="mb-2 current-cards" hover>
            <v-card-text class="headline font-weight-bold">
              <p class="title blue--text">{{ article.title }}</p>
            </v-card-text>
            <v-card-actions>
              <v-row class="px-5">
                <v-col cols="6">
                  <div class="caption grey--text">Type</div>
                  <div class="orange--text">{{ article.type }}</div>
                </v-col>
                <v-col cols="6">
                  <div class="caption grey--text text-right">Number</div>
                  <div class="text-right orange--text">{{ article.created }}</div>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <!--- end of current issue -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("loadCurrentIssue");
  },
  computed: {
    currentIssue(){
        return this.$store.state.currentIssueArticles.data;
    }
  },
};
</script>