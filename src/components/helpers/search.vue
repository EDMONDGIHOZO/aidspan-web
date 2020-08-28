<template>
  <div>
    <!-- start the searchbox overlay -->
    <v-btn
      color="primary"
      class="white--text"
      @click.stop="dialog = true"
      depressed
      outlined
      rounded
    >
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
          <v-card-title class="text-center">
            <span>SEARCH AIDSPAN</span>
          </v-card-title>
          <v-container>
            <ais-instant-search :search-client="searchClient" index-name="dev_articles">
              <ais-configure :hits-per-page.camel="12" :query="searchQuery" />
              <v-row wrap justify-center>
                <v-col cols="12" md="3">
                  <v-card outlined class="attribox" color="grey lighten-4">
                    <v-card-title>
                      <h4>Filter by Years</h4>
                    </v-card-title>
                    <v-card-text>
                      <div class="search-panel__filters">
                        <ais-refinement-list
                          attribute="created"
                          :sort-by="['isRefined', 'name:desc']"
                          show-more="true"
                        />
                      </div>
                    </v-card-text>
                  </v-card>
                  <v-card outlined class="my-5 attribox" color="grey lighten-4">
                    <v-card-title>
                      <h4>Filter by Author</h4>
                    </v-card-title>
                    <v-card-text>
                      <div class="search-panel__filters">
                        <ais-refinement-list
                          attribute="author.field_article_author_value"
                          show-more="true"
                        />
                      </div>
                    </v-card-text>
                  </v-card>
                  <v-spacer></v-spacer>
                  <v-card outlined class="my-5 attribox" color="grey lighten-4">
                    <v-card-title>
                      <h4>Filter by Types</h4>
                    </v-card-title>
                    <v-card-text>
                      <div class="search-panel__filters">
                        <ais-refinement-list attribute="type.name" show-more="true" />
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="9">
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
                  <ais-stats>
                    <p slot-scope="{ nbHits, processingTimeMS, query }" class="grey--text font-italic">
                      {{ nbHits }} Articles retrieved in {{ processingTimeMS }}ms for
                      <q>{{ query }}</q>
                    </p>
                  </ais-stats>

                  <v-card outlined class="lister">
                    <v-card-text>
                      <ais-hits>
                        <template slot="item" slot-scope="{ item }">
                          <v-list three-line>
                            <v-list-item link @click="goTo(item.nid)">
                              <v-list-item-content>
                                <v-list-item-title v-text="item.title" class="font-weight-bold"></v-list-item-title>
                                <v-list-item-subtitle
                                  class="blue--text font-weight-bold"
                                >{{item.created}} - {{item.language}}</v-list-item-subtitle>
                                <v-list-item-subtitle
                                  v-text="item.author.field_article_author_value"
                                  class="orange--text font-weight-bold"
                                ></v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </template>
                      </ais-hits>
                    </v-card-text>
                  </v-card>
                  <ais-pagination>
                    <ul
                      class="paginater"
                      slot-scope="{
      currentRefinement,
      nbPages,
      pages,
      isFirstPage,
      isLastPage,
      refine,
      createURL
    }"
                    >
                      <li v-if="!isFirstPage">
                        <a :href="createURL(0)" @click.prevent="refine(0)">‹‹</a>
                      </li>
                      <li v-if="!isFirstPage">
                        <a
                          :href="createURL(currentRefinement - 1)"
                          @click.prevent="refine(currentRefinement - 1)"
                        >‹</a>
                      </li>
                      <li v-for="page in pages" :key="page">
                        <a
                          :href="createURL(page)"
                          :style="{ fontWeight: page === currentRefinement ? 'bold' : '' }"
                          @click.prevent="refine(page)"
                        >{{ page + 1 }}</a>
                      </li>
                      <li v-if="!isLastPage">
                        <a
                          :href="createURL(currentRefinement + 1)"
                          @click.prevent="refine(currentRefinement + 1)"
                        >›</a>
                      </li>
                      <li v-if="!isLastPage">
                        <a :href="createURL(nbPages)" @click.prevent="refine(nbPages)">››</a>
                      </li>
                    </ul>
                  </ais-pagination>
                </v-col>
              </v-row>
            </ais-instant-search>
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
import "instantsearch.css/themes/reset-min.css";
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
.paginater {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 5px;
}

.attribox {
  max-height: 400px;
  overflow-y: scroll;
}

.paginater li {
  width: 35px;
  height: 35px;
  background: #0eaae7;
  margin-left: 5px;
  text-align: center;
  padding-top: 5px;
}

.paginater li a {
  color: white;
  margin-top: 12px;
}

.ais-RefinementList-count {
  background-color: rgb(204, 117, 4);
}

.lister {
  max-height: 700px;
  overflow-y: scroll;
  margin-bottom: 10px;
}
</style>