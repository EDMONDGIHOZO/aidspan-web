<template>
  <v-container>
    <v-row class="top-intro">
      <v-col cols="12">
        <p class="top-intro-text text-left">
          The information provided here is based entirely on data obtained from
          the Global Fund, most of which is on the Fund's website. The Aidspan
          web server checks every three hours for possible new data at the
          Fund's website.
        </p>
      </v-col>
    </v-row>

    <v-row id="grants-tables" width="100%">
      <v-col cols="12" md="6">
        <v-simple-table
          height="450"
          fixed-header
          id="disease-table"
          class="elevation-15"
        >
          <template v-slot:default v-if="diseaseLoaded">
            <thead>
              <tr>
                <th colspan="3" class="text-center">
                  <h4 class="text-uppercase text--primary">
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
                <td class="text-left">{{disease[0]}}</td>
                <td>
                  <div class="row-box">
                    <p>$ {{ sumValues(disease[1], "totalCommittedAmount") }}</p>
                    <v-chip class="percentage-chip align-left" color="success" outlined>
                      {{percentageFinder(sumValues(disease[1], "totalCommittedAmount"),sumValues(disease[1], "totalSignedAmount") )}}
                      <v-icon right small>mdi-percent</v-icon>
                    </v-chip>
                  </div>
                </td>
                <td class="text-right">
                  <div class="row-box">
                    <p>$ {{ sumValues(disease[1], "totalDisbursedAmount") }}</p>
                    <v-chip class="percentage-chip" color="primary" outlined>
                      {{percentageFinder(sumValues(disease[1], "totalDisbursedAmount"),sumValues(disease[1], "totalSignedAmount") )}}
                      <v-icon right small>mdi-percent</v-icon>
                    </v-chip>
                  </div>
                </td>
              </tr>
              <tr class="diseaseFooter">
                <td colspan="2">
                  <small>Total Agreement Amount:</small>
                  <br />
                  {{ sumValues(allGrants, 'totalSignedAmount')}}
                </td>
                <td colspan="2">
                  <small>Total Disbursed Amount:</small>
                  <br />
                  {{ sumValues(allGrants, 'totalDisbursedAmount') }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="12" md="6">
        <v-simple-table height="450" class="elevation-15" light>
          <template v-slot:default>
            <thead>
              <tr>
                <th colspan="3" class="text-center">
                  <h4 class="text-uppercase text--primary">
                    Grants by Regions
                  </h4>
                </th>
              </tr>
              <tr>
                <th class="text-left">Region</th>
                <th class="text-left">Total agreement amount</th>
                <th class="text-left">Total disbursed to date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="region in regions" :key="region.rId">
                <td>{{ region.rName }}</td>
                <td>
                  $ {{ region.TotalSignedAmount }}
                  <v-chip class="ma-1" color="secondary" small outlined>
                    {{ region.rPercentage }}
                    <v-icon right small>mdi-percent</v-icon>
                  </v-chip>
                </td>
                <td>
                  {{ region.rTotalDisbursedAmount }}
                  <v-chip class="ma-1" color="success" small outlined>
                    {{ region.rDisPercentage }}
                    <v-icon right small>mdi-percent</v-icon>
                  </v-chip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <!-- start the grants by country map presentation using D3 -->
    <v-row class="py-5">
      <v-col class="gbc-intro" cols="12">
        <v-card light hover class="elevation-15">
          <v-card-title class="blue--text font-weight-black"
            >GRANTS BY COUNTRY</v-card-title
          >
          <v-card-text>
            <p>
              The information provided here is based entirely on data obtained
              from the Global Fund, most of which is on the Fund's website. The
              Aidspan web server checks every three hours for possible new data
              at the Fund's website. Every few months, the Global Fund assigns
              each grant a rating that measures the performance of that grant
              over the past few months. These ratings are (“Exceeds
              expectations”), A2 (“Meets expectations”), B1 (“Adequate”), B2
              (“Inadequate but potential demonstrated”) or C (“Unacceptable”).
              In the map below, we show the average rating assigned by the
              Global Fund since January 2010 for grants to each country. Where a
              country has had fewer than four ratings assigned, no average
              rating is shown.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <countriesMap />
      </v-col>
    </v-row>
    <!-- end of the map -->
  </v-container>
</template>

<script>
import GrantsCountry from "@/components/pages/client/grants-country.vue";
import sumValues from "@/mixins/grants-utils";
import GFAPI from "@/services/GlobalFundApi";

export default {
  //dummy data
  data() {
    return {
      totalDisbursementAmount: 0,
      totalAgreementAmount: 0,
      diseaseComponents: [],
      diseaseLoaded: false,
      allGrants: [],
      //data for charts options//

      ///end of chart
      diseases:[],
      regions: [],
    };
  },

  components: {
    countriesMap: GrantsCountry,
  },

  methods: {
    async fetchAllGrantsData () {
      const results = await  GFAPI().get('/VGrantAgreements');
      if (results.statusText === 'OK') {
        const grants = results.data.value
        this.allGrants = grants;
        // eslint-disable-next-line no-undef
        const groupedByDisease = grants.reduce((acc, value) => {
          // Group initialization
          if (!acc[value.componentName]) {
            acc[value.componentName] = [];
          }
          // Grouping
          acc[value.componentName].push(value);
          return acc;
        }, {});
        this.diseaseComponents = Object.entries(groupedByDisease);
        this.diseaseLoaded = true
        // eslint-disable-next-line no-undef
      }
    }
  },

  mounted: function () {
    this.fetchAllGrantsData();
  },

  mixins: [sumValues]
};
</script>
