<template>
  <div class="container">
    <div class="loader" v-if="loading">
      <v-skeleton-loader v-bind="attrs" type="article"></v-skeleton-loader>
    </div>
    <v-row wrap v-else>
      <v-col cols="12">
        <v-card outlined class="pa-2">
          <v-btn color="info" outlined rounded @click="back"
            >Back to Jobs</v-btn
          >
          <v-spacer></v-spacer>
          <v-card-title>
            <h1>{{ job.title }}</h1>
          </v-card-title>
          <v-card-text>
            <p v-html="job.body.body_value"></p>
          </v-card-text>
          {{ hashedId }}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Api from "@/services/Api";
import * as hash from "hashids";
export default {
  props: ["id"],
  name: "career",
  data() {
    return {
      job: {},
      loading: true,
      hashedId: "",
    };
  },
  mounted() {
    Api()
      .get(`/careers/${this.id}`)
      .then((response) => {
        this.job = response.data.data;
        this.loading = false;
      });

    //// hash id
    const hashids = new hash();
    const id = hashids.encode(348029348);
    this.hashedId = id;
  },
  methods: {
    back() {
      return this.$router.push({ name: "careers" });
    },
  },
};
</script>