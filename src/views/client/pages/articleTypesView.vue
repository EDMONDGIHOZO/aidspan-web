<template>
  <div class="types">
    <v-row>
      <v-col cols="12" md="3" class="sidebar-types">
        <v-card outlined flat>
          <v-card-title>
            <h3 class="text-center text-uppercase font-weight-bold">Article Types</h3>
          </v-card-title>
          <v-card class="ma-3">
            <side-types />
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="9" class="type-articles-view">
        <div v-for="type in currentType" :key="type.id">
          <v-card class="mb-4" flat outlined color="primary">
            <v-card-title>
              <h3 class="text-uppercase white--text">{{type.name}}</h3>
              <v-spacer></v-spacer>
              <v-chip class="ma-2" color="secondary" text-color="white">
                <v-avatar left class="primary">{{type.related.length}}</v-avatar>Article(s)
              </v-chip>
            </v-card-title>
          </v-card>
          <v-row>
            <v-col cols="12" v-if="type.related.length === 0" class="no-data"></v-col>
            <v-col cols="12" md="6" v-for="article in type.related" :key="article.nid">
              <div id="type-contents">
                <v-card class="my-4 articard" outlined @click="viewarticle(article.nid)">
                  <v-card-title>
                    <p>{{article.title}}</p>
                  </v-card-title>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Api from "@/services/Api";
import ArticleTypes from "@/components/helpers/articletypes.vue";
export default {
  props: ["type_id"],
  components: {
    "side-types": ArticleTypes
  },
  data: () => ({
    currentType: []
  }),

  created() {
    Api()
      .get(`articletypes/${this.type_id}`)
      .then(response => {
        this.currentType = response.data;
        //this.loading = false;
      })
      .catch(error => console.log(error));
  },
  methods: {
    viewarticle(artnid) {
      return this.$router.push({
        name: "article",
        params: { article_id: artnid }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.types {
  margin: auto;
  max-width: 98%;
}
#type-contents {
  margin: auto;
  display: flex;
  justify-content: space-evenly;
}

.no-data {
  height: 600px;
  width: 600px;
  background: url("~@/assets/images/common/nodata.svg") no-repeat center;
}

.sidebar-types {
  height: 90rem;
  overflow-y: scroll;
}

.type-articles-view {
  background-color: rgba(0, 0, 0, 0.041);
  border-radius: 10px;
}
.articard {
    display: flex;
    justify-content: center;
    align-items: center;
  min-width: 100%;
  height: 140px;
  box-sizing: inherit;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 4px rgba(1, 14, 40, 0.05);
  box-shadow: 0 2px 4px rgba(1, 14, 40, 0.05);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-flex: 0 0 270px;
  flex: 0 0 270px;
  transition: border 0.25s linear, box-shadow 0.25s linear,
    -webkit-box-shadow 0.25s linear;
}

.articard p {
    text-transform: capitalize;
    font-weight: 500;
}
.articard p:hover {
    font-weight: bold;
     transition: border 0.25s linear, text-shadow 0.25s linear,
    -webkit-box-shadow 0.25s linear;
}

.articard:hover {
  color: #0e81b6;
  border-top: #0e81b6 10px solid;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
}
</style>