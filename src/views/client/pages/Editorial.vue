<template>
  <div id="editorial">
    <v-container id="gfo-intro">
      <v-row>
        <v-col cols="12">
          <div class="text-center gfotitle">
            <h3 class="font-weight-black">{{$t('gfo_intro.title')}}</h3>
          </div>
          <div class="content" v-scrollAnimation>
            <p class="ma-10">{{$t('gfo_intro.description')}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="bottom-toolbar">
      <v-btn color="success" v-if="language === 'fr'" text @click="ofm" rounded>TOUS LES NUMÉROS</v-btn>
      <v-btn dark @click="gfo" text color="primary" v-else rounded>ALL GFO ISSUES</v-btn>
      <v-btn text color="secondary" href="#current-issue-editorial" rounded>{{$t('currentissue')}}</v-btn>
    </div>
    <!--- end of the last live articles -->
    <!-- start the current isssue view -->
    <v-container id="current-issue-editorial">
      <v-row v-if="currentIssue">
        <!--- current issue -->

        <v-col cols="12">
          <h1 class="text-center text-uppercase" color="primary">{{$t('currentissue')}}</h1>
          <h3 class="ma-5">
            <span class="orange--text">{{currentIssue.title}}</span>
            | {{currentIssue.changed | formatDate }}
          </h3>
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="article in orderBy(currentIssue.related_articles, 'article_number.field_article_number_value')"
              :key="article.nid"
            >
              <v-card
                flat
                class="mb-2"
                outlined
                hover
                router
                :to="{name: 'article', params: {article_id: article.nid}}"
                min-height="120"
              >
                <v-card-text class="font-weight-bold">
                  <p class>{{ article.title | str_limit(320) }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-chip
                    class="ma-2"
                    color="success"
                    outlined
                    v-for="type in article.article_types"
                    :key="type.id"
                  >
                    <v-icon left>mdi-note-text-outline</v-icon>
                    {{ type.name }}
                  </v-chip>
                  <v-spacer></v-spacer>
                  <v-chip class="ma-2" color="primary" label text-color="white">
                    <v-icon left>mdi-label</v-icon>
                    Article
                    {{ article.article_number.field_article_number_value }}
                  </v-chip>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!--- end of current issue -->
        <v-col cols="12">
          <p class="font-weight-regular white--text text-end">{{currentIssue.changed | formatDate}}</p>
          <v-card class="pa-5 text-center" flat>
            <p>{{$t('gfonote')}}</p>
            <v-divider></v-divider>
            <p class="py-3 font-weight-bold">{{$t('contactgfo')}}</p>
            <v-card-actions>
              <v-btn
                color="primary"
                rounded
                block
                depressed
                href="mailto:adele.sulcas@aidspan.org"
              >{{$t('sendemail')}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <div v-else>
        <h1>lOADING</h1>
      </div>
    </v-container>
    <!--- end of the current issue articles view  -->
    <!---  start the list of all issues  -->
    <v-container id="all-issues"></v-container>
    <features />
  </div>
</template>

<script>
import Vue2Filters from "vue2-filters";
import features from "@/components/helpers/features.vue";

export default {
  name: "editorial",
  data() {
    return {
      gfoLinks: [
        {
          title: "GFO LIVE",
          route: "#live-articles",
        },
        {
          title: "CURRENT ISSUE",
          route: "#current-issue-editorial",
        },
        {
          title: "ALL ISSUE ",
          route: "#all-issues",
        },
      ],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  mounted() {
    const lang = localStorage.getItem("lang");
    this.$store.dispatch("loadCurrentIssue", lang);
  },
  computed: {
    currentIssue() {
      return this.$store.state.currentIssueArticles.data;
    },
    language() {
      return this.$i18n.locale;
    },
  },
  methods: {
    ofm() {
      this.$router.push({
        name: "ofm",
      });
    },
    gfo() {
      this.$router.push({
        name: "gfo",
      });
    },
  },
  components: {
    features,
  },
  mixins: [Vue2Filters.mixin],
};
</script>

<style lang="scss" scoped>
#gfo-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2fbff;
  height: 322px;
  margin-bottom: 40px;
  border-radius: 20px;
  top: 50px;
}

#articles-current-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

@media only screen and (max-width: 768px) {
  #gfo-intro {
    height: auto;
    position: relative;
    margin-top: 12%;
  }

  #live-articles {
    height: auto;
  }

  #gfo-intro .bottom-toolbar {
    min-width: 100%;
  }
}

#gfo-intro .title {
  color: rgba(71, 71, 71, 0.75);
  text-align: center;
}

#gfo-intro .content {
  line-height: 200%;
  text-align: center;
  color: #000000;
  width: 98%;
}

.bottom-toolbar {
  box-shadow: 0px 1px 23px rgba(0, 0, 0, 0.1);
  border-radius: 31.5px;
  text-align: center;
  height: 40px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
}

#live-articles {
  height: auto;
  left: 69px;
  top: 568px;
  background: #ffffff;
  box-shadow: 2px 5px 31px rgba(0, 0, 0, 0.12);

  display: flex;
  padding: 10px;
}

#live-articles .head {
  display: flex;
  flex-direction: row;
}

#live-articles .head h4 {
  color: #474747;
}

#live-articles .head h3 {
  color: #ff7a2b;
}

#live-articles .article {
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 14px;
}

#live-articles .article .gfotitle {
  font-size: 12px;
  font-weight: bold;
  color: #00adef;
}

#current-issue-editorial {
  height: auto;
  overflow: hidden;
  padding: 20px;
  box-shadow: 2px 5px 31px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.current-issue-articles {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

#current-issue-editorial .new-issue-side {
  padding: 10px;
  display: flex;
  height: 500px;
  border-radius: 10px;
  flex-direction: column;
  align-content: center;
}

#current-issue-editorial .current-cards {
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  min-height: 150px;
  flex-grow: 2;
  width: 30%;
}

#current-issue-editorial .current-cards:hover {
  background: #ffffff;
  box-shadow: 0px 4px 19px rgba(43, 183, 255, 0.46);
  transform: scale(1.01);
}

#current-issue-editorial .new-issue-side .issue-number {
  color: white;
}

#article-cards {
  background: rgb(212, 16, 16);
  box-shadow: 0px 4px 19px rgba(43, 183, 255, 0.46);
  border-radius: 5px;
  height: 98px;
}

#article-card .title {
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #00adef;
}
</style>
