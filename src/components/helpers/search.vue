<template>
  <div>
    <!-- start the searchbox overlay -->
    <v-btn icon color="white" @click.stop="dialog = true">
      <v-icon small>mdi-magnify</v-icon>
    </v-btn>
    <v-row justify-center>
      <v-dialog
        v-model="dialog"
        max-width="70%"
        transition="scale-transition"
        overlay-color="primary"
        overlay-opacity="0.4"
      >
        <v-card id="search-container">
          <v-card-title>
            <span class="title font-weight-black text-center">SEARCH AIDSPAN</span>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <ais-instant-search :search-client="searchClient" index-name="dev_articles">
                  <ais-configure :hits-per-page.camel="5" :query="searchQuery" />
                    <v-text-field
                        label="You can search an article, issue , etc .. "
                        required
                        outlined
                        rounded
                        height="30"
                        background-color="white"
                        prepend-inner-icon="mdi-magnify"
                        v-model="searchQuery"
                      ></v-text-field>
                  <v-list three-line>
                    <ais-hits>
                      <template slot="item" slot-scope="{ item }">
                        <v-card outlined class="ma-4 result-card" router :to="'/article/' + item.nid" hover @click="dialog = false">
                            <v-list-item class="hits">
                          <v-list-item-content>
                            <v-list-item-title v-text="item.title" class="title font-weight-black"></v-list-item-title>
                            <v-list-item-subtitle
                              class="text--primary"
                            >Published on {{item.changed |formatDate}}</v-list-item-subtitle>
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
  data() {
    return {
      dialog: false,
      searchQuery: "",
      searchClient: algoliasearch(
        "60L5IRZWVM",
        "f79c7704105112a8735d1d2dc871b99b"
      )
    };
  }
};
</script>


<style lang="scss" scoped>
.ais-InfiniteHits-item,
.ais-InfiniteResults-item,
.ais-Hits-item,
.ais-Results-item {
  background-color: cornflowerblue !important;
}

.hits{
    margin: 0;
}

.result-card{
    margin-left: auto;
    margin-right: auto;
}
</style>