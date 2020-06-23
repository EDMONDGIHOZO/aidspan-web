<template>
  <div class="allissues">
    <v-row class="titlebar">
      <v-col cols="12" sm="6">
        <p class="display-1 font-weight-bold">TOUT EDITIONS - OFM</p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          dense
          label="search for issue"
          v-model="search"
          placeholder="example: EDITION 95"
          outlined
          rounded
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="issueslist">
      <v-col cols="12" sm="3" v-for="edition in editions" :key="edition.nid">
        <v-card hover class="isscard" @click="viewissue(edition.nid)">
          <v-card-title class="edition-tit">{{edition.title}}</v-card-title>
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-title>{{edition.changed | formatDate}}</v-list-item-title>
              </v-list-item-content>
              <v-row align="center" justify="end">
                <span class="subheading mr-2">{{edition.__meta__.related_articles_count}} Articles</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <Pagination :statedata="ofmissues" />
      </v-col>
    </v-row>
  </div>
</template> 

<script>
import Pagination from "@/components/helpers/paginateofm.vue";

export default {
  name: "ofm",
  data() {
    return {
      search: ""
    };
  },
  components: {
    Pagination
  },
  computed: {
    editions() {
      return this.$store.state.ofmissues.data;
    }
  },
  mounted() {
    return this.$store.dispatch("fetchofms");
  },
  methods: {
    viewissue(issuenid) {
      return this.$router.push({ name: "edition", params: { nid: issuenid } });
    }
  }
};
</script>

<style lang="scss" scoped>
.allissues {
  max-width: 97%;
  margin: auto;
  padding: 20px;
}
.titlebar {
  color: #ff7a2b;
  margin-bottom: 20px;
}

.isscard {
  background: #ffffff;
  border: 0.5px solid #00aeef;
  box-sizing: border-box;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.isscard:hover {
  box-shadow: 2px 4px 4px rgba(3, 140, 158, 0.247);
  border-radius: 10px;
  font-weight: bold;
  background-color: rgb(236, 248, 252);
  transform: scale(1.1);
}

.edition-tit {
  text-transform: uppercase;
}
</style>