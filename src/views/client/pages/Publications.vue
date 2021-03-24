<template>
  <div class="container">
    <div class="titler my-5">
      <h3>Publications</h3>
    </div>

    <v-row>
      <v-col cols="12" md="9">
        <div class="pubs">
          <div class="plister">
            <v-text-field
              v-model="search"
              label="Search for guide or report, by keyword in title"
              outlined
              background-color="white"
              dense
            ></v-text-field>
          </div>
          <div class="publications-list">
            <pub-card v-if="loading" :data="filteredPubs" />
            <div class="lo" v-else>
              <loader type="card" />
              <loader type="card" />
              <loader type="card" />
              <loader type="card" />
              <loader type="card" />
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <v-card flat>
          <v-list subheader two-line color="primary" dark>
            <v-subheader inset class="titlep">categories</v-subheader>
            <v-list-item
              v-for="cat in categories"
              :key="cat.id"
              link
              @click="fetchMan(cat.name)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="cat.name"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <span class="font-weight-bold">{{ cat.total_pubs }}</span>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PubCard from "@/components/tools/PubCard.vue";
import Loader from "@/components/tools/Loader.vue";
import Api from "@/services/Api";

export default {
  name: "publications",
  data() {
    return {
      search: "",
      loading: false,
      selectedCat: "all",
      categories: [
        {
          id: 454,
          name: "all",
        },
        {
          id: 12,
          name: "guides",
        },
        {
          id: 32,
          name: "reports",
        },
      ],

      publications: [],
    };
  },

  components: {
    "pub-card": PubCard,
    loader: Loader,
  },

  created() {
    this.fetchMan("all");
  },

  methods: {
    fetchMan(cat) {
      Api()
        .get(`/publications`)
        .then((response) => {
          let allPubs = response.data.data;
          // remove those with no files
          let withFiles = allPubs.filter((f) => f.__meta__.files != 0);
          this.loading = true;
          switch (cat) {
            case "guides":
              this.publications = withFiles.filter(
                (p) => p.category === "guide"
              );
              break;
            case "reports":
              this.publications = withFiles.filter(
                (p) => p.category === "report"
              );
              break;
            default:
              this.publications = withFiles;
          }
        });
    },
  },

  computed: {
    filteredPubs: function() {
      return this.publications.filter((publication) => {
        let title = publication.title.toLowerCase();
        let keywork = this.search.toLowerCase();
        return title.match(keywork);
      });
    },
  },
};
</script>

<style scoped>
.titler {
  font-weight: bold;
  font-size: 35px;
  line-height: 60px;
  /* identical to box height */
  color: #a6acbe;
}

.pubs {
  background: rgba(196, 196, 196, 0.12);
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px;
}

.titlep {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
}
</style>
