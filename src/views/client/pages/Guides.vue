<template>
  <div class="guides">
    <v-card class="ma-4" color="#FFF4ED" flat>
      <v-card-title>
        <h2 class="text-uppercase">{{$t('guides.title')}} - {{guides.length}}</h2>
      </v-card-title>
      <v-card-text>
        <p>{{$t('guides.description')}}</p>
        <v-row wrap class="contai">
          <v-col cols="12" md="6" v-for="guide in guides" :key="guide.nid">
            <v-card outlined hover  @click="go_to_pub(guide.nid)">
              <v-card-text>
                <h4>{{guide.title }}</h4>
              </v-card-text>
              <v-card-actions>
                <v-row>
                  <v-col cols="6">
                    <p class="text-left">{{guide.created | formatDate }}</p>
                  </v-col>
                  <v-col cols="6">
                    <p class="text-right">{{guide.field_publication_author_value}}</p>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
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
    guides: [],
  }),
  methods: {
    go_to_pub(pub_id) {
      return this.$router.push({
        name: "publication",
        params: { pub_id: pub_id },
      });
    },
  },

  mounted() {
    Api()
      .get("/guides")
      .then((response) => {
        this.guides = response.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.guides {
  max-width: 98%;
  margin: 90px auto 80px auto;
}

.contai {
  height: 700px;
  overflow-y: scroll;
  border-bottom: 4px solid #00adef;
}
@media only screen and (max-width: 600px) {
  .guides {
    max-width: 100%;
  }
}
</style>