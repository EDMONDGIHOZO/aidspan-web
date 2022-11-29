<template>
  <div class="key_docs">
    <p class="doc_title font-weight-bold text-center text-uppercase">
      Career and opportunities
    </p>
    <div class="doc_list_container">
      <div class="loader" v-if="noJob">
     <v-row>
         <v-col cols="6">
              <v-skeleton-loader v-bind="attrs" type="card-heading"></v-skeleton-loader>
         </v-col>
         <v-col cols="6">
              <v-skeleton-loader v-bind="attrs" type="card-heading"></v-skeleton-loader>
         </v-col>
     </v-row>
    </div>
      <div class="joblist">
        <v-row wrap>
          <v-col cols="12" md="6" v-for="job in jobs" :key="job.nid">
            <v-card class="pa-4" outlined>
              <h4 class="text-uppercase">{{
                job.title
              }}</h4>
              <v-card-text>
                <p v-html="job.body.body_summary"></p>
              </v-card-text>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-btn color="info" rounded depressed @click=" viewCareer(job.nid)">READ MORE</v-btn>
                  <v-row align="center" justify="end">
                    <span>{{ job.changed | formatDate }}</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "@/services/Api";
export default {
  data: () => ({
    noJob: true,
    dialog: false,
    jobs: [],
  }),
  mounted() {
    Api()
      .get("/careers")
      .then((response) => {
        this.jobs = response.data.data;
        this.noJob = false;
      });
  },

  methods: {
    viewCareer(id) {
      return this.$router.push({
        name: "career",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.key_docs {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.doc_title {
  font-size: 30px;
  line-height: 60px;
  /* identical to box height */
  color: #a6acbe;
}
.doc {
  max-width: 80%;
  margin: 10px auto 10px auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.doc:hover {
  background: #f6f8ff;
  cursor: pointer;
}
.doc_list_container {
  background: rgba(196, 196, 196, 0.12);
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 20px;
}

@media screen and (max-width: 520px) {
  .key_docs {
    padding: 0;
    margin-top: 50px;
  }
  .doc {
    max-width: 98%;
  }
  .doc_list_container {
    padding: 0;
    border-radius: 0;
  }
}
</style>
