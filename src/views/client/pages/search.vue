<template>
  <div class="search-results">
    <v-card class="pa-5" width="900" outlined flat>
      <v-progress-linear v-if="loading" height="10" color="secondary" indeterminate reverse></v-progress-linear>
      <v-card-title class="font-weight-bold">{{message}}</v-card-title>
      <v-card-text v-if="results.length > 1">
        <v-list three-line v-if="results.length > 0">
          <v-list-item v-for="result in results" :key="result.nid" link @click="goto(result.nid)">
            <v-list-item-content>
              <h3 class="mb-3">{{result.title}}</h3>
              <v-list-item-subtitle v-html="result.field_article_abstract_value"></v-list-item-subtitle>
              <v-list-item-subtitle>
                <p
                  class="pa-2 font-weight-bold"
                >{{result.created | formatDate}} - By : {{result.field_article_author_value}}</p>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <h2 v-else class="text-center"> please wait while we check into our database <v-icon>mdi-database</v-icon>  </h2>
    </v-card>
  </div>
</template>


<script>
import Api from "@/services/Api";
export default {
  props: ["query"],
  name: "search",

  data: () => ({
    results: [],
    message: "",
    loading: false,
  }),

  methods: {
    goto(nid) {
      return this.$router.push({
        name: "article",
        params: {
          article_id: nid,
        },
      });
    },
  },

  created() {
    const searchquery = this.query
      .slice(0, 8)
      .replace(/-/g, " ")
      .replace(/'/g, " ")
      .replace(/"/g, " ");
    const formdata = {
      query: searchquery,
    };
    this.loading = true;
    Api()
      .post(`searcher`, formdata)
      .then((response) => {
        this.loading = false;
        this.message = response.data.message;
        this.results = response.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.search-results {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>