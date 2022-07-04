<template>
  <v-container>
    <section>
      <v-data-iterator
        :items="countryData"
        :items-per-page="perPage"
        :search="search"
      >
        <template v-slot:default="{ items }">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
            </v-col>
            <v-col v-for="item in items" :key="item[0]" cols="12" md="4" lg="3">
              <v-card
                outlined
                class="clickable-card"
                @click="viewCountry(item[0])"
              >
                <v-card-title>
                  <h5>{{ item[0] | str_limit(10) }}</h5>
                  <v-spacer></v-spacer>
                  <v-avatar size="36">
                    <v-img :src="showFlag(item[0])" :alt="item[0]" />
                  </v-avatar>
                </v-card-title>
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-content class="caption"
                      >Signed:</v-list-item-content
                    >
                    <v-spacer></v-spacer>
                    <v-list-item-content class="caption"
                      >{{ sumValues(item[1], "totalSignedAmount") }}
                    </v-list-item-content>
                  </v-list-item>
                  <v-spacer></v-spacer>
                  <v-list-item>
                    <v-list-item-content class="caption"
                      >Disbursed:</v-list-item-content
                    >
                    <v-spacer></v-spacer>
                    <v-list-item-content class="caption"
                      >{{ sumValues(item[1], "totalDisbursedAmount") }}
                    </v-list-item-content>
                  </v-list-item>
                  <v-spacer></v-spacer>
                  <v-list-item>
                    <v-list-item-content class="caption"
                      >Committed:</v-list-item-content
                    >
                    <v-spacer></v-spacer>
                    <v-list-item-content class="caption"
                      >{{ sumValues(item[1], "totalCommittedAmount") }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </section>
  </v-container>
</template>

<script>
import sumValues from "@/mixins/grants-utils";
import showFlag from "@/mixins/grants-utils";

export default {
  props: ["countryData"],
  name: "GrantsCountry",
  data() {
    return {
      rows: [],
      perPage: 12,
      search: "",
      keys: ["geographicAreaName"],
    };
  },

  methods: {
    viewCountry(country_name) {
      return this.$router.push({
        name: "countryGrants",
        params: { countryName: country_name },
      });
    },
  },
  mixins: [sumValues, showFlag],
};
</script>
