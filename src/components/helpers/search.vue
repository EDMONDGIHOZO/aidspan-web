<template>
  <div>
    <!-- start the searchbox overlay -->
    <v-btn color="primary" class="white--text" @click.stop="dialog = true" depressed outlined rounded>
      SEARCH
      <v-icon medium right>mdi-magnify</v-icon>
    </v-btn>
    <v-row justify-center>
      <v-dialog
        v-model="dialog"
        max-width="90%"
        transition="scale-transition"
        overlay-color="primary"
        overlay-opacity="0.5"
      >
        <v-card id="search-container">
          <v-card-title>
            <span class="title font-weight-black text-center">SEARCH AIDSPAN</span>
          </v-card-title>
          <v-container>
            <v-row wrap>
              <v-col cols="12">
                <ais-instant-search :search-client="searchClient" index-name="dev_articles">
                  <ais-configure :hits-per-page.camel="12" :query="searchQuery" />
                  <v-text-field
                    label="You can search an article, issue , etc .. "
                    required
                    outlined
                    rounded
                    dense
                    background-color="white"
                    prepend-inner-icon="mdi-magnify"
                    v-model="searchQuery"
                  ></v-text-field>
                  <v-row>
                    <v-col cols="12" md="3">
                      <v-card outlined>
                        <v-card-title>
                          <h4>Filter by Authors</h4>
                        </v-card-title>
                        <v-card-text>
                          <div class="search-panel__filters">
                            <ais-refinement-list attribute="author.field_article_author_value" />
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-card outlined>
                        <v-card-title>
                          <h4>Filter by Years</h4>
                        </v-card-title>
                        <v-card-text>
                          <div class="search-panel__filters">
                            <ais-refinement-list attribute="created" />
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-card outlined>
                        <v-card-title>
                          <h4>Filter by Types</h4>
                        </v-card-title>
                        <v-card-text>
                          <div class="search-panel__filters">
                            <ais-refinement-list attribute="type.name" />
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-card outlined>
                        <v-card-title>
                          <h4>Filter by Tags</h4>
                        </v-card-title>
                        <v-card-text>
                          <div class="search-panel__filters">
                            <ais-refinement-list attribute="tag.name" />
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-list three-line>
                    <ais-hits>
                      <template slot="item" slot-scope="{ item }">
                        <v-card outlined class="ma-4 result-card" hover @click="goTo(item.nid)">
                          <v-list-item class="hits">
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item.title"
                                class="title font-weight-black"
                              ></v-list-item-title>
                              <v-list-item-subtitle
                                class="text--primary"
                              >Author | {{item.author.field_article_author_value}}   -   {{item.created}}</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </template>
                    </ais-hits>
                  </v-list>
                </ais-instant-search>
              </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--end of search -->
  </div>
</template>

<script>
import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/reset.css";
export default {
  props: ["dialog"],
  data() {
    return {
      searchQuery: "",
      searchClient: algoliasearch(
        "60L5IRZWVM",
        "f79c7704105112a8735d1d2dc871b99b"
      ),
    };
  },
  methods: {
    goTo(goToLink) {
      return this.$router.push({
        name: "article",
        params: { article_id: goToLink },
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.ais-InfiniteHits-item,
.ais-InfiniteResults-item,
.ais-Hits-item,
.ais-Results-item {
  background-color: cornflowerblue !important;
}

.hits {
  margin: 0;
}

.result-card {
  margin-left: auto;
  margin-right: auto;
}

.ais-RefinementList-count {
  background-color: rgb(204, 117, 4);
}
</style>