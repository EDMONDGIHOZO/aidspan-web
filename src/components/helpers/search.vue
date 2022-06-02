<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" class="button-text" depressed dark v-bind="attrs" v-on="on">
          {{ $t("search") }}
        </v-btn>
      </template>
      <!-- contents -->
      <ais-instant-search
        :search-client="searchClient"
        index-name="dev_articles"
      >
        <ais-configure :hits-per-page.camel="20" :query="searchQuery" />
        <v-card>
          <v-toolbar dark color="primary" flat>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <div class="search-container-1">
            <!-- intro -->
            <v-row class="mb-6" no-gutters>
              <v-col cols="12" md="8" class="mb-4">
                <div class="search-result-section">
                  <v-card flat class="mr-auto mb-10">
                    <v-card-title class="font-weight-bold">
                      GFO Search
                    </v-card-title>
                    <v-card-text>
                      {{ $t("searchDescription") }}
                    </v-card-text>
                    <!-- <ais-hits>
                      <div class="ais-RangeInput">
                        <form class="ais-RangeInput-form">
                          <label class="ais-RangeInput-label">
                            <input
                              class="
                                ais-RangeInput-input ais-RangeInput-input--min
                              "
                              type="date"
                              placeholder=""
                              step="1"
                            />
                          </label>
                          <span class="ais-RangeInput-separator">to</span>
                          <label class="ais-RangeInput-label">
                            <input
                              class="
                                ais-RangeInput-input ais-RangeInput-input--max
                              "
                              type="date"
                              placeholder=""
                              step="1"
                            />
                          </label>
                          <v-btn class="ml-3 ais-RangeInput-submit" depressed color="primary" dark>Apply</v-btn>
                        </form>
                      </div>
                    </ais-hits> -->
                  </v-card>
                  <v-text-field
                    label="You can search an article, issue , etc .. "
                    required
                    outlined
                    rounded
                    dense
                    background-color="grey lighten-5"
                    prepend-inner-icon="mdi-magnify"
                    v-model="searchQuery"
                  ></v-text-field>

                  <!-- heading -->
                  <v-row class="header-row d-none d-lg-flex">
                    <v-col cols="12" md="5">
                      <span class="font-weight-bold">{{
                        $t("searchHeader.title")
                      }}</span>
                    </v-col>
                    <v-col cols="12" md="3">
                      <span class="font-weight-bold">{{
                        $t("searchHeader.author")
                      }}</span>
                    </v-col>
                    <v-col cols="12" md="2">
                      <span class="font-weight-bold">{{
                        $t("searchHeader.type")
                      }}</span>
                    </v-col>
                    <v-col cols="12" md="2">
                      <span class="font-weight-bold">{{
                        $t("searchHeader.posted")
                      }}</span>
                    </v-col>
                    <!-- <v-col cols="12" md="2">
                      <span class="font-weight-bold">Abstract</span>
                    </v-col> -->
                  </v-row>
                  <ais-hits>
                    <template slot="item" slot-scope="{ item }">
                      <v-row @click="goTo(item.nid)" class="result-card">
                        <v-col cols="12" md="5">
                          <span class="font-weight-bold">{{ item.title }}</span>
                        </v-col>
                        <v-col cols="12" md="3">
                          <p
                            v-text="item.author.field_article_author_value"
                          ></p>
                        </v-col>
                        <v-col cols="12" md="2">
                          <p v-text="item.type[0].name"></p>
                        </v-col>
                        <v-col cols="12" md="2">
                          <p v-text="item.created"></p>
                        </v-col>
                        <!-- <v-col cols="12" md="2">
                          <p
                            v-html="
                              $options.filters.capitalize(
                                item.abstract.field_article_abstract_value
                              )
                            "
                          ></p>
                        </v-col> -->
                      </v-row>
                    </template>
                  </ais-hits>
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
                        createURL,
                      }"
                    >
                      <li v-if="!isFirstPage">
                        <a :href="createURL(0)" @click.prevent="refine(0)"
                          >‹‹</a
                        >
                      </li>
                      <li v-if="!isFirstPage">
                        <a
                          :href="createURL(currentRefinement - 1)"
                          @click.prevent="refine(currentRefinement - 1)"
                          >‹</a
                        >
                      </li>
                      <li v-for="page in pages" :key="page">
                        <a
                          :href="createURL(page)"
                          :style="{
                            fontWeight:
                              page === currentRefinement ? 'bold' : '',
                          }"
                          @click.prevent="refine(page)"
                          >{{ page + 1 }}</a
                        >
                      </li>
                      <li v-if="!isLastPage">
                        <a
                          :href="createURL(currentRefinement + 1)"
                          @click.prevent="refine(currentRefinement + 1)"
                          >›</a
                        >
                      </li>
                      <li v-if="!isLastPage">
                        <a
                          :href="createURL(nbPages)"
                          @click.prevent="refine(nbPages)"
                          >››</a
                        >
                      </li>
                    </ul>
                  </ais-pagination>
                </div>
              </v-col>
              <v-col class="mx-3">
                <v-card flat max-width="500">
                  <v-card-title class="font-weight-bold"> Filter </v-card-title>
                  <v-card-text>
                    <strong>Filter by Language</strong>
                    <div class="search-panel__filters">
                      <ais-refinement-list attribute="language" />
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <strong>Filter by Author</strong>
                    <div class="search-panel__filters">
                      <ais-refinement-list
                        attribute="author.field_article_author_value"
                        show-more="true"
                        searchable="true"
                        searchable-placeholder="type an author name here"
                      />
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>
                    <strong>Filter by Type</strong>
                    <div class="search-panel__filters">
                      <ais-refinement-list
                        attribute="type.name"
                        show-more="true"
                        searchable="true"
                        searchable-placeholder="type an article type name here"
                        class-names="{
                            'ais-RefinementList-item': 'refitem'}"
                      />
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>
                    <strong>Filter by Author</strong>
                    <div class="search-panel__filters">
                      <ais-refinement-list
                        attribute="author.field_article_author_value"
                        show-more="true"
                        searchable="true"
                        searchable-placeholder="type an author name here"
                      />
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>
                    <strong>Filter by Date</strong>
                    <div class="search-panel__filters">
                      <ais-refinement-list
                        attribute="created"
                        :sort-by="['isRefined', 'name:desc']"
                        show-more="true"
                        searchable="true"
                        searchable-placeholder="type a date here"
                      />
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </ais-instant-search>
    </v-dialog>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/reset-min.css";
export default {
  props: ["dialog", "searchClass"],
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
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return (
        value.charAt(0).toUpperCase() + value.slice(1).substr(0, 220) + "..."
      );
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
.paginater {
  margin-top: 20px;
}
.paginater li {
  width: 35px;
  height: 35px;
  background: #0eaae7;
  margin-left: 5px;
  text-align: center;
  padding-top: 5px;
  list-style: none;
  border-radius: 10px;
}

.paginater li a {
  color: white;
  text-decoration: none;
}
.result-card {
  border-radius: 5px;
}

.result-card:hover {
  background-color: #f3f3f3;
  cursor: pointer;
}

.lister {
  max-height: 400px;
  margin-bottom: 10px;
}

.refitem {
  color: #0eaae7;
}

.search-container-1 {
  background-color: rgb(246, 246, 246);
  padding: 20px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
}

.search-result-section {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}
.header-row {
  padding: 10px 35px;
}
</style>
