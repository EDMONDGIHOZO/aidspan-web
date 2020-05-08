<template>
  <v-container fluid>
    <div class="all">
      <v-col cols="12" class="mb-3">
        <v-btn small text color="primary" depressed @click="sortBy('title')">
          <v-icon left small>mdi-folder</v-icon>
          <span class="caption text-lowercase">By Issue Number</span>
        </v-btn>
        <v-btn small flat color="secondary" depressed @click="sortBy('date')" class="mx-2">
          <v-icon left small>mdi-calendar</v-icon>
          <span class="caption text-lowercase">By Issue Date</span>
        </v-btn>
      </v-col>
      <v-row wrap>
        <v-col cols="12">
          <v-expansion-panels focusable popout hover>
            <v-expansion-panel v-for="issue in issues" :key="issue.nid">
              <v-expansion-panel-header>
                <span class="title issue-title">
                  {{issue.title}}
                  <v-chip class="ma-2" color="primary" label text-color="white">
                    <v-icon left>mdi-label</v-icon>
                    {{issue.__meta__.related_articles_count}} Articles
                  </v-chip>
                </span>
                <v-spacer></v-spacer>
                <span class="text-right">
                  <v-icon right color="secondary" small>mdi-calendar</v-icon>
                  {{issue.created | formatDate }}
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    v-for="article in issue.related_articles"
                    :key="article.nid"
                  >
                    <v-card class="ma-1" hover>
                      <v-card-title class="blue--text">{{article.title}}</v-card-title>
                    </v-card>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <paginate collection="issues" />
    </div>
  </v-container>
</template>

<script>
import paginate from "@/components/helpers/pagination.vue";

export default {
  mounted() {
    this.$store.dispatch("loadIssues");
  },

  computed: {
    issues() {
      return this.$store.state.issues.data;
    }
  },
  components: {
    paginate
  },
};
</script>

<style lang="scss" scoped>
.all {
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.issue-title {
  text-transform: uppercase;
}

.single-issue-card {
  border-left: solid #4cd2f3 2px;
  margin: 12px;
}
</style>
