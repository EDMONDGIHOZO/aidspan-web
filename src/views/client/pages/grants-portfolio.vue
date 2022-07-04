/* eslint-disable no-undef */
<template>
  <v-container>
    <div class="intro-title my-4">
      <h3>Grants Portfolio</h3>
    </div>
    <section>
      <div class="intro-box">
        <p>
          The information provided here is based entirely on data obtained from
          the Global Fund, most of which is on the Fund's website. The Aidspan
          web server checks every three hours for possible new data at the
          Fund's website. Every few months, the Global Fund assigns each grant a
          rating that measures the performance of that grant over the past few
          months. These ratings are (“Exceeds expectations”), A2 (“Meets
          expectations”), B1 (“Adequate”), B2 (“Inadequate but potential
          demonstrated”) or C (“Unacceptable”). In the map below, we show the
          average rating assigned by the Global Fund since January 2010 for
          grants to each country. Where a country has had fewer than four
          ratings assigned, no average rating is shown.
        </p>
      </div>
    </section>
    <v-row id="grants-tables" width="100%">
      <v-col cols="12">
        <div v-if="allLoaded">
          <div class="grants-summary">
            <div>
              <h3>Total Agreement Amount:</h3>
              <h1>{{ sumValues(allGrants, "totalSignedAmount") }}</h1>
            </div>
            <div>
              <h3>Total Disbursed Amount:</h3>
              <h1>{{ sumValues(allGrants, "totalDisbursedAmount") }}</h1>
            </div>
          </div>
          <v-simple-table fixed-header id="disease-table" dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th colspan="3" class="text-center">
                    <h4 class="text-uppercase text--white">
                      Grants by Regions
                    </h4>
                  </th>
                </tr>
                <tr>
                  <th class="text-left">Region</th>
                  <th class="text-center">Total agreement amount</th>
                  <th class="text-right">Total disbursed to date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(region, index) in grantsByRegion" :key="index">
                  <td class="text-left">{{ region[0] }}</td>
                  <td>
                    <div class="row-box">
                      <p>
                        {{ sumValues(region[1], "totalCommittedAmount") }}
                      </p>
                      <v-chip
                        class="percentage-chip align-left"
                        color="success"
                        outlined
                      >
                        {{
                          percentageFinder(
                            sumValues(region[1], "totalCommittedAmount"),
                            sumValues(region[1], "totalSignedAmount")
                          )
                        }}
                        <v-icon right small>mdi-percent</v-icon>
                      </v-chip>
                    </div>
                  </td>
                  <td class="text-right">
                    <div class="row-box">
                      <p>
                        $ {{ sumValues(region[1], "totalDisbursedAmount") }}
                      </p>
                      <v-chip class="percentage-chip" color="primary" outlined>
                        {{
                          percentageFinder(
                            sumValues(region[1], "totalDisbursedAmount"),
                            sumValues(region[1], "totalSignedAmount")
                          )
                        }}
                        <v-icon right small>mdi-percent</v-icon>
                      </v-chip>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table
            fixed-header
            id="disease-table"
            dark
            class="mt-6 rounded"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th colspan="3" class="text-center">
                    <h4 class="text-uppercase text--white">
                      Grants by Diseases
                    </h4>
                  </th>
                </tr>
                <tr>
                  <th class="text-left">Disease</th>
                  <th class="text-center">Total agreement amount</th>
                  <th class="text-right">Total disbursed to date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(disease, index) in diseaseComponents" :key="index">
                  <td class="text-left">{{ disease[0] }}</td>
                  <td>
                    <div class="row-box">
                      <p>
                        $ {{ sumValues(disease[1], "totalCommittedAmount") }}
                      </p>
                      <v-chip
                        class="percentage-chip align-left"
                        color="success"
                        outlined
                      >
                        {{
                          percentageFinder(
                            sumValues(disease[1], "totalCommittedAmount"),
                            sumValues(disease[1], "totalSignedAmount")
                          )
                        }}
                        <v-icon right small>mdi-percent</v-icon>
                      </v-chip>
                    </div>
                  </td>
                  <td class="text-right">
                    <div class="row-box">
                      <p>
                        $ {{ sumValues(disease[1], "totalDisbursedAmount") }}
                      </p>
                      <v-chip class="percentage-chip" color="primary" outlined>
                        {{
                          percentageFinder(
                            sumValues(disease[1], "totalDisbursedAmount"),
                            sumValues(disease[1], "totalSignedAmount")
                          )
                        }}
                        <v-icon right small>mdi-percent</v-icon>
                      </v-chip>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="map-section">
            <h4 class="text-uppercase text--white text-center my-6">
              Grants by Country
            </h4>
            <div>
              <GrantsCountry :country-data="grantsByCountry" />
            </div>
          </div>
        </div>
        <div v-else class="shadow">
          <v-skeleton-loader class="mx-auto" type="table" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GrantsCountry from "@/components/pages/client/grants-country.vue";
import sumValues from "@/mixins/grants-utils";
import mergeArrays from "@/mixins/grants-utils";
import groupObjects from "@/mixins/grants-utils";
import GFAPI from "@/services/GlobalFundApi";
import worldData from "../../../assets/dummies/world.json";

export default {
  //dummy data
  data() {
    return {
      totalDisbursementAmount: 0,
      totalAgreementAmount: 0,
      diseaseComponents: [],
      grantsByRegion: [],
      grantsByCountry: [],
      allLoaded: false,
      allGrants: [],
      diseases: [],
    };
  },

  components: {
    GrantsCountry,
  },

  methods: {
    manageFetchedData(data) {
      // eslint-disable-next-line no-undef
      this.diseaseComponents = this.groupObjects(data, "componentName");
      // merge data
      const onlyCountries = data.filter(
        (c) => c.geographicAreaCode_ISO2 !== null
      );
      const merged = this.mergeArrays(
        onlyCountries,
        worldData,
        "geographicAreaCode_ISO3",
        "iso_alpha3_code"
      );
      // grouping
      this.grantsByRegion = this.groupObjects(merged, "Sub_region_name");
      this.grantsByCountry = this.groupObjects(merged, "geographicAreaName");
      this.allGrants = merged;
      this.allLoaded = true;
    },
    async fetchAllGrantsData() {
      try {
        await GFAPI()
          .get("/VGrantAgreements")
          .then((response) => {
            if (response.status === 200) {
              // eslint-disable-next-line no-undef
              const sorted = _.sortBy(response.data.value , function (item) {
                return item.geographicAreaName
              })
              this.manageFetchedData(sorted);
            }
          });
      } catch (e) {
        console.log(e);
      }
    },
  },

  mounted: function() {
    this.fetchAllGrantsData();
  },

  mixins: [sumValues, mergeArrays, groupObjects],
};
</script>
