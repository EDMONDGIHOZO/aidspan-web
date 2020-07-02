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
          <div class="bottom-toolbar">
            <v-row justify="center">
              <v-dialog v-model="dialog" fullscreen hide-overlay transition="slide-x-transition">
                <template v-slot:activator="{ on }">
                  <v-btn color="success" v-if="language === 'fr'" text @click="ofm">TOUS LES NUMÉROS</v-btn>
                  <v-btn dark v-on="on" text color="primary" v-else>ALL GFO ISSUES</v-btn>
                  <v-btn
                    text
                    color="secondary"
                    href="#current-issue-editorial"
                  >{{$t('currentissue')}}</v-btn>
                </template>
                <v-card>
                  <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>GFO Newsletter</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <h1>All Issues</h1>
                  </v-toolbar>
                  <!--- view all issues component -->
                  <AllIssues></AllIssues>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!--
        <v-container>
      <v-layout row wrap id="live-articles">
        <v-flex md12>
          <div class="head pa-5">
            <h4>
              Live articles are the articles that are not yet published through
              newsletter
            </h4>
            <v-spacer></v-spacer>
            <h3>LIVE ARTICLES</h3>
          </div>
        </v-flex>
        <v-row no-gutters>
          <v-col v-for="n in 6" :key="n" cols="12" sm="4">
            <v-card class="pa-2 ma-3 article" outlined tile hover>
              <div class="title">Venezuela first to receive malaria funds</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, a
                officia! Voluptas odit recusandae, a doloremque iste, qui magnam
                illum adipisci beatae sed eveniet nihil porro reiciendis
                voluptatibus voluptate. Architecto?
              </p>
              <v-chip color="green lighten-2" text-color="white">Politics</v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
    -->

    <!--- end of the last live articles -->
    <!-- start the current isssue view -->
    <v-container id="current-issue-editorial">
      <v-row>
        <v-col cols="12" md="3" class="new-issue-side">
          <div class="issue-number">
            <h3 class="font-weight-black text-uppercase text-end">{{currentIssue.title}}</h3>
          </div>

          <p
            class="font-weight-regular white--text text-end"
          >{{currentIssue.changed | formatDate}}</p>
          <v-card class="pa-5 white--text" color="secondary">
            <p>{{$t('gfonote')}}</p>
            <hr />

            <p class="py-5">{{$t('contactgfo')}}</p>
            <v-card-actions>
              <v-btn
                text
                block
                outlined
                color="white"
                href="mailto:adele.sulcas@aidspan.org"
              >{{$t('sendemail')}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!--- current issue -->
        <v-col cols="12" md="9" class="current-issue-articles">
          <v-row>
            <v-col
              v-for="article in orderBy(currentIssue.related_articles, 'article_number.field_article_number_value')"
              :key="article.nid"
              cols="12"
              md="6"
            >
              <v-card
                flat
                class="mb-2 current-cards"
                hover
                router
                :to="{name: 'article', params: {article_id: article.nid}}"
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
                    Number
                    {{ article.article_number.field_article_number_value }}
                  </v-chip>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <!--- end of current issue -->
      </v-row>
    </v-container>
    <!--- end of the current issue articles view  -->
    <!---  start the list of all issues  -->
    <v-container id="all-issues"></v-container>
    <features />
  </div>
</template>

<script>
import AllIssues from "@/components/pages/client/all-issues.vue";
import Vue2Filters from "vue2-filters";
import features from '@/components/helpers/features.vue';

export default {
  name: "editorial",
  data() {
    return {
      gfoLinks: [
        {
          title: "GFO LIVE",
          route: "#live-articles"
        },
        {
          title: "CURRENT ISSUE",
          route: "#current-issue-editorial"
        },
        {
          title: "ALL ISSUE ",
          route: "#all-issues"
        }
      ],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
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
      return localStorage.getItem("lang");
    }
  },
  methods: {
    ofm() {
      this.$router.push({ name: "ofm" });
    }
  },
  components: {
    AllIssues,
    features
  },
  mixins: [Vue2Filters.mixin]
};
</script>

<style lang="scss" scoped>
#gfo-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2fbff;
  box-shadow: inset 1px 15px 27px rgba(0, 0, 0, 0.1);
  height: 322px;
  margin-bottom: 40px;
  border-radius: 20px;
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

#gfo-intro .bottom-toolbar {
  flex-direction: row;
  flex-grow: 3;
  align-self: center;
  background: #ffffff;
  box-shadow: 0px 1px 23px rgba(0, 0, 0, 0.1);
  border-radius: 31.5px;
  margin-bottom: -80px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  text-align: center;
  padding-top: 11px;
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
  margin-top: 30px;
  display: flex;
  overflow: hidden;
}
.current-issue-articles {
  background: #f2fbff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
#current-issue-editorial .new-issue-side {
  background: #ff7a2b;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
#current-issue-editorial .current-cards {
 box-shadow: 4px 5px 6px rgba(0, 0, 0, 0.144);
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  min-height: 150px;
  flex-grow: 2;
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
