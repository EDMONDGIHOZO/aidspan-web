<template>
  <v-container fluid>
    <!--- top bar for search and sorting 0-->
    <v-row id="topbar">
      <v-col class="d-flex" md4 sm6 xs6>
        <v-text-field
          placeholder="search issue"
          rounded
          background-color="white"
          height="50px"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="d-flex" md3 sm4 xs4>
        <v-select
          :items="issueSort"
          background-color="white"
          rounded
          height="50px"
          width="40px"
          placeholder="sort"
        ></v-select>
      </v-col>
    </v-row>
    <!-- end of search and sorting -->
    <v-layout row wrap class="issue-row">
      <v-flex md8 sm8 xs12>
        <SingleIssue></SingleIssue>
      </v-flex>
      <v-flex class="pa-5" id="issues" md4>
        <v-data-table
          :headers="headers"
          :items="issues"
          :items-per-page="5"
          item-key="number"
          class="elevation-3"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus'
          }"
        ></v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SingleIssue from "@/components/pages/client/SingleIssue.vue";
export default {
  data() {
    return {
      issueSort: [
        "latest", "older"
      ],
      headers: [
        {
          text: "issue Number",
          align: "start",
          value: "number"
        },
        { text: "date", value: "date"}
      ],
      issues: [
        { date: "12 jul 2020", number: 125, iss_id: 136 },
        { date: "12 jan 2020", number: 130, iss_id: 141 },
         { date: "16 jan 2020", number: 130, iss_id: 145 },
        { date: "12 jun 2020", number: 126, iss_id: 137 },
        { date: "12 apr 2020", number: 127, iss_id: 138 },
        { date: "12 mar 2020", number: 128, iss_id: 139 },
        { date: "12 feb 2020", number: 129, iss_id: 140 },

      ]
    };
  },
  components: {
    SingleIssue
  }
};
</script>
