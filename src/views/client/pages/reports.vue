<template>
  <div class="reports">
    <v-card class="ma-4" color="#FAFDFF" flat>
      <v-card-title>
        <h2 class="text-uppercase">{{$t('reports.title')}} - {{reports.length}}</h2>
      </v-card-title>
      <v-card-text>
        <p>{{$t('reports.description')}}</p>
        <v-row wrap class="contai">
          <v-col cols="12" md="6" lg="6" v-for="report in reports" :key="report.nid">
            <v-card
              min-height="140"
              outlined
              hover
              class="report-card px-5"
              @click="go_to_pub(report.nid)"
            >
              <v-card-text>
                <h4>{{report.title}}</h4>
              </v-card-text>
              <v-card-actions>
                <v-row>
                  <v-col cols="4">
                    <p class="text-left">{{report.created | formatDate }}</p>
                  </v-col>
                  <v-col cols="8">
                    <p class="text-right">{{report.field_publication_author_value}}</p>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12">
            <h2 class="text-center">end</h2>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Api from "@/services/Api";
export default {
  data: () => ({
    reports: [],
  }),

  mounted() {
    Api()
      .get("/reports")
      .then((response) => {
        this.reports = response.data;
      });
  },
  methods: {
    go_to_pub(pub_id) {
      return this.$router.push({
        name: "publication",
        params: { pub_id: pub_id },
      });
    },
  },
};
</script>





<style lang="scss" scoped>
.reports {
  max-width: 98%;
  margin: 10px auto 20px auto;
}

.contai {
  height: 700px;
  overflow-y: scroll;
}

.contai::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
.report-card {
  box-shadow: 0px 4px 15px rgba(194, 195, 196, 0.44);
  border-radius: 5px;
}

.report-card:hover {
  box-shadow: 0px 1px 23px rgba(0, 0, 0, 0.288);
}
</style>