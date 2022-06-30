/* eslint-disable */
<template>
  <v-container fluid>
    <div v-if="loaded">
      <section class="filter-section">
        <v-row class="pa-2">
          <v-col cols="12" md="4">
            <v-select
              :items="countries"
              item-text="geographicAreaName"
              item-value="geographicAreaName"
              v-model="selectedCountry"
              label="select country"
              hint="*Hint: Type a country name or to see all countries grants, select 'World'"
              persistent-hint
              outlined
              dense
            ></v-select>
          </v-col>
          <!--          <v-col cols="12" md="2">-->
          <!--            <v-select-->
          <!--                :items="ratings"-->
          <!--                item-value="performanceRatingCode"-->
          <!--                item-text="performanceRatingCode"-->
          <!--                label="Grant Rating"-->
          <!--                outlined-->
          <!--                dense-->
          <!--            ></v-select>-->
          <!--          </v-col>-->

          <!--          <v-col cols="12" md="2">-->
          <!--            <v-select-->
          <!--                :items="diseases"-->
          <!--                item-text="componentName"-->
          <!--                item-value="componentId"-->
          <!--                label="Disease"-->
          <!--                outlined-->
          <!--                dense-->
          <!--            ></v-select>-->
          <!--          </v-col>-->
          <!--          <v-col cols="12" md="2">-->
          <!--            <v-select-->
          <!--                :items="statuses"-->
          <!--                item-text="programStatusTypeName"-->
          <!--                item-value="programStatusTypeName"-->
          <!--                label="Status"-->
          <!--                outlined-->
          <!--                dense-->
          <!--            ></v-select>-->
          <!--          </v-col>-->
          <v-col cols="12" md="2">
            <v-btn color="primary" @click="updateCountry">Update</v-btn>
          </v-col>
        </v-row>
      </section>
      <v-row align="center">
        <v-col cols="12" md="4">
          <div class="intro-title my-4">
            <v-avatar size="60">
              <v-img
                :src="showFlag(this.countryName)"
                :alt="this.countryName"
              />
            </v-avatar>
            <h3>{{ this.countryName }}</h3>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="grants-box" v-if="grants && grants.length > 0">
            <div class="summaryData">
              <strong
                >Total Signed: $
                {{ sumValues(grants, "totalSignedAmount") }}</strong
              >
            </div>
            <v-divider vertical dark></v-divider>
            <div class="summaryData">
              <strong
                >Total Committed: $
                {{ sumValues(grants, "totalCommittedAmount") }}</strong
              >
            </div>
            <v-divider vertical dark></v-divider>
            <div class="summaryData">
              <strong
                >Total Disbursed: $
                {{ sumValues(grants, "totalDisbursedAmount") }}</strong
              >
            </div>
          </div>
          <div v-else>
            <h1 class="text--gray">no data</h1>
          </div>
        </v-col>
      </v-row>
      <v-divider inset class="my-4"></v-divider>
      <section>
        <v-data-table
          dense
          :headers="headers"
          :items="grants"
          item-key="grantAgreementId"
          class="elevation-1 grantsTable"
          :search="searchCountryGrants"
          :items-per-page="perPage"
          :dark="darkMode"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>GRANTS</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-text-field
                v-model="searchCountryGrants"
                clearable
                filled
                outlined
                dense
                prepend-inner-icon="mdi-magnify"
                label="Search for grant title , agreement number or disease"
                class="mt-6"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-switch v-model="darkMode" class="mt-6" label="Dark Mode"></v-switch>
            </v-toolbar>
          </template>
          <template v-slot:[`item.performanceRatingCode`]="{ item }">
            <v-chip
              :color="getColor(item.performanceRatingCode)"
              class="ma-2"
              label
              x-small
              dark
            >
              {{
                item.performanceRatingCode !== null
                  ? item.performanceRatingCode
                  : "N/A"
              }}
            </v-chip>
          </template>
          <template v-slot:[`item.programStartDate`]="{ item }">
            <span>
              {{ item.programStartDate | formatDateNormal }}
            </span>
          </template>
          <template v-slot:[`item.isActive`]="{ item }">
            <v-chip
              :color="item.isActive ? 'green' : 'red'"
              class="ma-2"
              label
              small
              dark
            >
              {{ item.isActive ? "Active" : "Inactive" }}
            </v-chip>
          </template>
          <template v-slot:[`item.totalCommittedAmount`]="{ item }">
            <span>{{ item.totalCommittedAmount | formatNumber }}</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn @click="viewMore(item)" small color="primary"
              >View More</v-btn
            >
          </template>
        </v-data-table>
        <v-dialog v-model="dialog" max-width="700" :dark="darkMode">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{
                viewItem.grantAgreementTitle
                  ? viewItem.grantAgreementTitle
                  : "No title found"
              }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-sheet>
                  <strong>Summary:</strong>
                  <p>
                    {{
                      viewItem.grantAgreementSummary
                        ? viewItem.grantAgreementSummary
                        : "No summary available"
                    }}
                  </p>
                </v-sheet>
                <v-simple-table fixed-header height="300px">
                  <template v-slot:default>
                    <tbody class="verticalTable">
                      <tr>
                        <td class="text-left rowTitle">
                          Area Name
                        </td>
                        <td class="row-text">
                          {{ viewItem.geographicAreaName }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Area Level
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.geographicAreaLevelName
                              ? viewItem.geographicAreaLevelName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Agreement Number
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.grantAgreementNumber
                              ? viewItem.grantAgreementNumber
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Disease
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.componentName
                              ? viewItem.componentName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Agreement Status Type
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.grantAgreementStatusTypeName
                              ? viewItem.grantAgreementStatusTypeName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Start Date
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.programStartDate
                              ? viewItem.programStartDate
                              : "Unknown" | formatDateNormal
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          End Date
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.programEndDate
                              ? viewItem.programEndDate
                              : "Unknown" | formatDateNormal
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Portfolio Manager
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.portfolioManager
                              ? viewItem.portfolioManager
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Portfolio Manager Address
                        </td>
                        <td class="row-text">
                          <a
                            :href="
                              `mailto:${viewItem.portfolioManagerEmailAddress}`
                            "
                            target="_blank"
                          >
                            {{
                              viewItem.portfolioManagerEmailAddress
                                ? viewItem.portfolioManagerEmailAddress
                                : "Unknown"
                            }}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Principal Recipient
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.principalRecipientName
                              ? viewItem.principalRecipientName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Principal Recipient Short Name
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.principalRecipientShortName
                              ? viewItem.principalRecipientShortName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Principal Recipient Classification
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.principalRecipientClassificationName
                              ? viewItem.principalRecipientClassificationName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Lead Implementer
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.leadImplementerName
                              ? viewItem.leadImplementerName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Lead Implementer Classification
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.leadImplementerClassificationName
                              ? viewItem.leadImplementerClassificationName
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Performance Rating
                        </td>
                        <td class="row-text">
                          {{
                            viewItem.performanceRatingDescription
                              ? viewItem.performanceRatingDescription
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Total Signed
                        </td>
                        <td class="row-text">
                          $
                          {{
                            viewItem.totalSignedAmount
                              ? viewItem.totalSignedAmount
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Total Committed
                        </td>
                        <td class="row-text">
                          $
                          {{
                            viewItem.totalCommittedAmount
                              ? viewItem.totalCommittedAmount
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-left rowTitle">
                          Total Disbursed
                        </td>
                        <td class="row-text">
                          $
                          {{
                            viewItem.totalDisbursedAmount
                              ? viewItem.totalDisbursedAmount
                              : "Unknown"
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDialog()">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </section>
      <section>
        <v-card class="mx-auto my-12 text--white" outlined :dark="darkMode">
          <v-card-title>Ratings Description:</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text">
              <v-chip
                v-for="rating in ratings"
                :key="rating.performanceRatingId"
                :color="getColor(rating.performanceRatingCode)"
                >{{ rating.performanceRatingCode }} :
                <strong>{{
                  rating.performanceRatingDescription
                }}</strong></v-chip
              >
            </v-chip-group>
          </v-card-text>
        </v-card>
      </section>
    </div>
    <div v-else>
      <v-skeleton-loader type="table"></v-skeleton-loader>
    </div>
  </v-container>
</template>

<script>
import GFAPI from "@/services/GlobalFundApi";
import showFlag from "@/mixins/grants-utils";
import _ from "lodash";

export default {
  props: ["countryName"],
  data: () => ({
    statuses: [],
    diseases: [],
    ratings: [],
    grants: [],
    countries: [],
    loaded: false,
    dialog: false,
    viewItem: {},
    selectedCountry: "",
    searchCountryGrants: "",
    perPage: 10,
    darkMode: false,
    headers: [
      { text: "Agreement Number", value: "grantAgreementNumber" },
      { text: "Disease", value: "componentName" },
      { text: "Recipient", value: "principalRecipientShortName" },
      { text: "Rating", value: "performanceRatingCode" },
      { text: "Signed", value: "totalSignedAmount" },
      { text: "Committed", value: "totalCommittedAmount" },
      { text: "Disbursed", value: "totalDisbursedAmount" },
      { text: "Start Date", value: "programStartDate" },
      { text: "Status", value: "isActive" },
      { text: "", value: "actions", sortable: false },
    ],
  }),

  methods: {
    getColor(rating) {
      if (rating === "A1") return "light-green";
      else if (rating === "A") return "lime darken-4";
      else if (rating === "A2") return "lime lighten-1";
      else if (rating === "B1") return "amber";
      else if (rating === "B2") return "orange lighten-1";
      else if (rating === "C") return "red";
      else return "grey darken-3";
    },
    getStatuses: async function() {
      try {
        await GFAPI()
          .get("/ProgramStatusTypes")
          .then((response) => {
            if (response.status === 200) {
              this.statuses = response.data.value;
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
    getRatings: async function() {
      try {
        await GFAPI()
          .get("/PerformanceRatings")
          .then((response) => {
            if (response.status === 200) {
              this.ratings = response.data.value;
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
    getCountries: async function() {
      try {
        await GFAPI()
          .get("/GeographicAreas")
          .then((response) => {
            if (response.status === 200) {
              this.countries = response.data.value;
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
    getDiseases: async function() {
      try {
        await GFAPI()
          .get("/Components")
          .then((response) => {
            if (response.status === 200) {
              this.diseases = response.data.value;
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
    addInitialGrantsForCountry: function(data) {
      if (this.countryName === "World") {
        this.grants = data;
        this.loaded = true;
      } else {
        this.grants = _.filter(data, { geographicAreaName: this.countryName });
        this.loaded = true;
      }
    },
    async fetchAllGrants() {
      try {
        await GFAPI()
          .get("/VGrantAgreements")
          .then((response) => {
            if (response.status === 200) {
              this.addInitialGrantsForCountry(response.data.value);
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
    updateCountry() {
      if (this.selectedCountry) {
        return this.$router.push({
          name: "countryGrants",
          params: { countryName: this.selectedCountry },
        });
      }
    },

    viewMore(item) {
      this.editedIndex = this.grants.indexOf(item);
      this.viewItem = Object.assign({}, item);
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
      this.viewItem = {};
    },
    viewAllGrants() {
      this.perPage = 30;
      this.selectedCountry = "World";
    },
  },

  mixins: [showFlag],

  created() {
    //  get the grants statuses types
    this.getStatuses();
    this.getRatings();
    this.getDiseases();
    this.fetchAllGrants();
    this.getCountries();
  },
};
</script>
