<template>
  <div class="all-issue">
    <!-- title bar -->
    <v-sheet color="white" class="pa-3 loaders-container" v-if="loadingIssues">
      <v-row wrap>
        <v-col cols="12" md="3" v-for="(i, index) in 8" :key="index">
          <v-card flat>
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
    <div class="contents" v-else>
      <v-row wrap no-gutters justify-md="center">
        <v-col cols="12">
          <p class="text-center all-issues-title">ALL ISSUES - GFO</p>
        </v-col>
        <v-col cols="12">
          <div class="search-bar">
            <v-text-field
              label="search for issue"
              filled
              dense
              v-model="search"
              @keyup.enter="searchIssue"
              hint="hit enter to search"
              clearable
              append-icon="mdi-magnify"
              @click:clear="clearSearch"
            ></v-text-field>
            <!-- searching progress -->
            <v-progress-linear
              color="secondary accent-4"
              indeterminate
              rounded
              :active="searching"
              height="6"
            ></v-progress-linear>
            <!-- search results -->
            <v-card class="mx-auto" outlined hover flat v-if="!hideresults">
              <v-list-item
                two-line
                v-for="issue in results"
                :key="issue.nid"
                class="my-3"
                @click="viewissue(issue.nid)"
              >
                <v-list-item-content>
                  <v-list-item-title class="bold-text"
                    ><span class="result-title">{{
                      issue.title
                    }}</span></v-list-item-title
                  >
                  <v-list-item-subtitle>{{
                    issue.created | formatDate
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <v-row class="issueslist">
        <v-col cols="12" md="3" v-for="iss in allIssues" :key="iss.nid">
          <v-card flat hover class="issue" @click="viewissue(iss.nid)">
            <v-card-text>
              <p class="issue-title">{{ iss.title }}</p>
              <p class="subtitle" v-if="iss.issue_date !== null">
                {{ iss.issue_date.field_issue_date_value | formatDateNormal }}
              </p>
              <p class="subtitle" v-else>
                **
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <pagination />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api";
import pagination from "@/components/helpers/pagination.vue";

export default {
  name: "gfo",
  components: {
    pagination,
  },
  data() {
    return {
      search: "",
      results: [],
      hideresults: true,
      pageNumber: 1,
      searching: false,
      limit: 3,
    };
  },
  mounted() {
    this.$store.dispatch("fetchgfo");
  },

  computed: {
    allIssues() {
      return this.$store.state.issues.data;
    },
    loadingIssues() {
      return this.$store.state.loadingIssues;
    },
  },

  methods: {
    viewissue(issuenid) {
      return this.$router.push({ name: "edition", params: { nid: issuenid } });
    },
    pageit(pageNum) {
      this.pageNumber = pageNum;
    },

    clearSearch() {
      this.hideresults = true;
      this.searching = false;
    },

    searchIssue() {
      this.searching = true;
      const formdata = {
        title: this.search,
        lang: "en",
      };
      Api()
        .post("/all-issues", formdata)
        .then((response) => {
          const data = response.data;
          if (data.length > 0) {
            this.results = data.slice(0, 4);
          }
          this.hideresults = false;
          this.searching = false;
        })
        .catch();
    },
  },
};
</script>

<style scoped>
.all-issues-title {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}

.search-bar {
  padding: 10px;
  max-width: 50%;
  margin: auto;
}

.result-title {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.issueslist {
  padding: 10px;
  background: #f8fbfc;
}

.issue-title {
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
}

.issue {
  border-radius: 8px;
}
.issue:hover {
  box-shadow: 2px 4px 4px rgba(3, 140, 158, 0.74);
  border-radius: 10px;
  font-weight: bold;
  background-color: rgb(236, 248, 252);
}
.issue > .subtitle {
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */
  color: #9e9e9e;
}

.loaders-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
