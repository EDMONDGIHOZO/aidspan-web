<template>
  <v-container>
    <v-row class="top-intro">
      <v-col cols="12">
        <p class="top-intro-text">
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
          height="auto"
          fixed-header
          id="disease-table"
          dark
          class="elevation-15"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th colspan="3" class="text-center title">
                  Grants by Diseases
                </th>
              </tr>
              <tr>
                <th class="text-left">Disease</th>
                <th class="text-center">Total agreement amount</th>
                <th class="text-right">Total disbursed to date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="disease in diseases" :key="disease.dId">
                <td class="text-left">{{ disease.dName }}</td>
                <td>
                  $ {{ disease.dsignedAmount }}
                  <v-chip class="ma-2" color="success" outlined>
                    {{ disease.dSignedPercentage }}
                    <v-icon right small>mdi-percent</v-icon>
                  </v-chip>
                </td>
                <td class="text-right">
                  $ {{ disease.dDisbursedAmount }}
                  <v-chip class="ma-2" color="primary" outlined>
                    {{ disease.dDisbursedPercentage }}
                    <v-icon right small>mdi-percent</v-icon>
                  </v-chip>
                </td>
              </tr>
              <tr class="diseaseFooter">
                <td colspan="2">Total Agreement Amount | $ 120Bn</td>
                <td colspan="2">Total Disbursed Amount | $ 110Bn</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col cols="12" md="6">
        <v-simple-table height="auto" class="elevation-15" light>
          <template v-slot:default>
            <thead>
              <tr>
                <th colspan="3" class="text-center title">Grants by Regions</th>
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
          <v-card-title class="blue--text font-weight-black">
            GRANTS BY COUNTRY
          </v-card-title>
          <v-card-text class="body-1">
            The information provided here is based entirely on data obtained
            from the Global Fund, most of which is on the Fund's website. The
            Aidspan web server checks every three hours for possible new data at
            the Fund's website. Every few months, the Global Fund assigns each
            grant a rating that measures the performance of that grant over the
            past few months. These ratings are (“Exceeds expectations”), A2
            (“Meets expectations”), B1 (“Adequate”), B2 (“Inadequate but
            potential demonstrated”) or C (“Unacceptable”). In the map below, we
            show the average rating assigned by the Global Fund since January
            2010 for grants to each country. Where a country has had fewer than
            four ratings assigned, no average rating is shown.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <countriesMap> </countriesMap>
      </v-col>
    </v-row>
    <!-- end of the map -->
  </v-container>
</template>

<script>
//import GrantsByCountry from "@/components/pages/grantsOverview.vue";
//import Diseases from "@/components/pages/diseases.vue";
import GrantsCountry from "@/components/pages/client/grants-country.vue";
export default {
  //dummy data
  data() {
    return {
      //data for charts options//

      ///end of chart
      diseases: [
        {
          dName: "Malaria",
          dId: "234ftsg",
          dsignedAmount: 45066,
          dSignedPercentage: 40,
          dDisbursedAmount: 34000,
          dDisbursedPercentage: 30
        },
        {
          dName: "HIV/AIDS",
          dId: "234f43tsg",
          dsignedAmount: 55068,
          dSignedPercentage: 20,
          dDisbursedAmount: 24000,
          dDisbursedPercentage: 10
        },
        {
          dName: "Tuberclosis",
          dId: "234ftsg",
          dsignedAmount: 45778,
          dSignedPercentage: 30,
          dDisbursedAmount: 34000,
          dDisbursedPercentage: 40
        },
        {
          dName: "TB/HIV",
          dId: "234ftsg",
          dsignedAmount: 450778,
          dSignedPercentage: 10,
          dDisbursedAmount: 34000,
          dDisbursedPercentage: 60
        },
        {
          dName: "HIV",
          dId: "234ftsg",
          dsignedAmount: 45068,
          dSignedPercentage: 20,
          dDisbursedAmount: 44000,
          dDisbursedPercentage: 30
        },
        {
          dName: "RSSH",
          dId: "234ftsg",
          dsignedAmount: 45078,
          dSignedPercentage: 41,
          dDisbursedAmount: 36000,
          dDisbursedPercentage: 30
        }
      ],

      regions: [
        {
          rName: "High Impact Africa 2",
          TotalSignedAmount: 12000,
          rId: "fadsh23atht54",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "High Impact Asia",
          TotalSignedAmount: 123000,
          rId: "fadsh2afd43w34",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "High Impact Africa 1",
          TotalSignedAmount: 12300,
          rId: "fadsh2ders34",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "High Impact Africa 2",
          TotalSignedAmount: 123000,
          rId: "fadsh234esd3434",
          rPercentage: 34,
          rTotalDisbursedAmount: 3300000,
          rDisPercentage: 14
        },
        {
          rName: "Southern and Eastern Africa",
          TotalSignedAmount: 123000,
          rId: "fadsh2agrdeg34",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "Eastern Europe and Central Asia",
          TotalSignedAmount: 12300,
          rId: "fadsh2waefg34",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "Latin America and Caribbean",
          TotalSignedAmount: 12300,
          rId: "fadsh23afgd4",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "Central Africa",
          TotalSignedAmount: 123000,
          rId: "fadsh2asdva34",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "Western Africa",
          TotalSignedAmount: 123000,
          rId: "fadsh23r4",
          rPercentage: 34,
          rTotalDisbursedAmount: 330000,
          rDisPercentage: 14
        },
        {
          rName: "South East Africa",
          TotalSignedAmount: 123000,
          rId: "fadshh234",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        },
        {
          rName: "Middle East and North Africa",
          TotalSignedAmount: 123000,
          rId: "fasddsh234",
          rPercentage: 34,
          rTotalDisbursedAmount: 33000,
          rDisPercentage: 14
        }
      ]
    };
  },

   components: {
    "countriesMap": GrantsCountry,
  }
};
</script>

<style scoped>
/* chart style , now it workd */
</style>
