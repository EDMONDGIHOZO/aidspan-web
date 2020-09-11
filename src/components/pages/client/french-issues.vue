<template>
  <div class="allissues">
    <h3>TOUT EDITIONS - OFM</h3>

    <v-row class="titlebar">
      <v-col cols="12" sm="4">
        <v-text-field
          dense
          label="rechercher une édition"
          v-model="search"
          append-icon="mdi-magnify"
          @click:append="searchIssue"
          @keyup.enter="searchIssue"
          hint="Appuyez sur Entrée pour rechercher"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="searchroom" v-if="!hideresults">
        <v-list-two-line subheader>
          <v-subheader>Search results {{results.length}}</v-subheader>
          <div class="results" v-if="results.length > 0">
            <v-list-item
              width="300"
              rounded
              v-for="issue in results"
              :key="issue.nid"
              @click="viewissue(issue.nid)"
            >
              <v-list-item-content>
                <v-list-item-title>{{issue.title}}</v-list-item-title>
                <v-list-item-subtitle>{{issue.issue_date.field_issue_date_value}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
          <h5 v-else class="text-center">No Issue Found</h5>
        </v-list-two-line>
      </v-col>
    </v-row>

    <v-row class="issueslist">
      <v-col cols="12" sm="3" v-for="edition in editions" :key="edition.nid">
        <v-card hover class="isscard" @click="viewissue(edition.nid)">
          <v-card-title class="edition-tit">{{edition.title}}</v-card-title>
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-title>{{edition.issue_date.field_issue_date_value | formatDateNormal }}</v-list-item-title>
              </v-list-item-content>
              <v-row align="center" justify="end">
                <span class="subheading mr-2">{{edition.__meta__.related_articles_count}} Articles</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <Pagination :statedata="ofmissues" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Pagination from "@/components/helpers/paginateofm.vue";
import Api from "@/services/Api";

export default {
  name: "ofm",
  data() {
    return {
      search: "",
      results: [],
      hideresults: true,
    };
  },
  components: {
    Pagination,
  },
  computed: {
    editions() {
      return this.$store.state.ofmissues.data;
    },
  },
  mounted() {
    return this.$store.dispatch("fetchofms");
  },
  methods: {
    viewissue(issuenid) {
      return this.$router.push({ name: "edition", params: { nid: issuenid } });
    },
    searchIssue() {
      const formdata = {
        title: this.search,
        lang: "fr",
      };
      Api()
        .post("/all-issues", formdata)
        .then((response) => {
          this.results = response.data;
          this.hideresults = false;
        })
        .catch();
    },
  },
};
</script>

<style lang="scss" scoped>
.allissues {
  max-width: 97%;
  margin: auto;
  padding: 20px;
}

.issueslist {
  background-color: #ff7a2b;
  border-radius: 10px;
}
.titlebar {
  color: #ff7a2b;
  margin-bottom: 20px;
}

.searchroom {
  border-radius: 10px;
  max-height: 320px;
  overflow-y: scroll;
  padding: 10px;
}
.isscard {
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.isscard:hover {
  box-shadow: 2px 4px 4px rgba(3, 140, 158, 0.247);
  border-radius: 10px;
  font-weight: bold;
  background-color: rgb(236, 248, 252);
  transform: scale(1.1);
}

.edition-tit {
  text-transform: uppercase;
}
</style>
