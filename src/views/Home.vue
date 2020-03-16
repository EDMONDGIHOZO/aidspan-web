<template>
  <div row wrap>
    <v-carousel hide-delimiters class="home-slides" flat cycle>
      <v-carousel-item
        v-for="(slide, i) in homeSlides"
        :key="i"
        :src="slide.imageUrl"
      >
        <div class="caption-card"></div>
      </v-carousel-item>
    </v-carousel>
    <v-container fluid class="my-1">
      <v-layout row wrap>
        <v-flex xs12 md6 id="whatwe">
          <v-card flat class="inner-card">
            <v-card-title class="text-center">
              <p class="display-1" id="inner-title">What we are</p>
            </v-card-title>
            <v-card-text>
              <p class="intro-text">
                Aidspan is a non-profit organization based in Kenyawhose mission
                is to reinforce the effectiveness of the Global Fund to Fight
                AIDS, Tuberculosis and Malariaby serving as an independent
                watchdog of the Fund and its grant implementers.
              </p>
            </v-card-text>
            <v-flex
              style="display: flex; justify-content: center; content-align: center; font-weight: bold;"
            >
              <v-card-actions>
                <v-btn
                  v-for="link in quickhomelinks"
                  :key="link.icon"
                  color="green"
                  depressed
                  text
                  class="d-none d-sm-flex"
                >
                  {{ link.title }}
                </v-btn>
                <v-btn
                  v-for="link in quickhomelinks"
                  :key="link.title"
                  color="green"
                  icon
                  class="d-flex d-sm-none"
                >
                  <v-icon x-large class="mx-5">{{ link.icon }}</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          md6
          style="display: flex; align-items: center;justify-content: center"
        >
          <v-card class="pa-5 wedo">
            <div class="title">
              <h2>What we do</h2>
            </div>
            <v-card-text>
              <p>
                Aidspan is a non-profit organization based in Kenyawhose mission
                is to reinforce the effectiveness of the Global Fund to Fight
                AIDS, Tuberculosis and Malariaby serving as an independent
                watchdog of the Fund and its grant implementers.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- start latest issue section -->
    </v-container>
    <v-container fluid id="current-issue">
      <v-layout row>
        <v-flex md12 ma-2>
          <v-card flat>
            <v-card-actions>
              <v-card-title>
                Current issue {{ currentIssue.iss_number }}
              </v-card-title>
              <v-spacer></v-spacer>
              <v-btn text>Share</v-btn>
              <v-btn color="purple" text>
                <v-icon left>mdi-file-download</v-icon>
                Download
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-row no-gutters wrap>
        <v-spacer></v-spacer>
        <v-col class="xs12 md6 issue-date-container">
          <div class="issue-date"></div>
        </v-col>
      </v-row>
      <v-layout row wrap>
        <v-slide-group v-model="model" class="pa-2" multiple show-arrows>
          <v-slide-item
            v-for="article in articles"
            :key="article.art_id"
            v-slot:default="{ active, toggle }"
          >
            <v-flex xs12 sm4 md4 lg3>
              <v-card
                height="auto"
                width="400"
                class="text-xs-center ma-2"
                id="current-article"
                hover
                raised
                @click="toggle"
              >
                <v-card-title>
                  <div class="title">{{ article.art_title }}</div>
                </v-card-title>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      :src="article.art_author.author_img"
                      width="10px"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <div class="author_name">{{ article.art_author.name }}</div>
                  </v-list-item-content>
                  <v-row align="center" justify="end">
                    <v-icon class="mr-1" small>mdi-history</v-icon>
                    <span class="subheading mr-2 article_date"
                      >{{ article.art_date }}
                    </span>
                  </v-row>
                </v-list-item>
                <v-card-text>
                  <div class="text">{{ article.art_abstract }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-list-item class="grow">
                    <v-row align="left" justify="end">
                      <v-icon small left>mdi-eye</v-icon>
                      <span class="subheading mr-2"
                        >{{ article.views }} views</span
                      >
                      <v-spacer></v-spacer>
                      <v-icon class="ma-1" color="primary" small
                        >mdi-comment</v-icon
                      >
                      <span class="subheading mr-2">{{
                        article.comments
                      }}</span>
                      <v-icon class="ma-1" color="secondary" small
                        >mdi-share-variant</v-icon
                      >
                      <span class="subheading">{{ article.shares }}</span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-slide-item>
        </v-slide-group>
      </v-layout>
      <!-- end of current articles -->
    </v-container>
    <v-container fluid>
      <v-layout row wrap id="pubsContainer">
        <v-flex xs12 md12>
          <v-card max-width="800" class="mx-auto">
            <v-list>
              <v-header inset>Publications </v-header>
              <v-list-item v-for="item in items2" :key="item.title">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    homeSlides() {
      return this.$store.state.slides;
    },
    companyInfo() {
      return this.$store.state.info;
    },
    publications() {
      return this.$store.state.homePublications;
    }
  },
  data() {
    return {
      items: [
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
      ],
      items2: [
        { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
      ],
      //sampled data
      model: null,
      quickhomelinks: [
        {
          icon: "mdi-google-analytics",
          title: "DATA ANALYTICS",
          language: "en",
          link: "/data-analyics"
        },
        {
          icon: "mdi-email-newsletter",
          title: "EDITORIAL",
          language: "en",
          link: "/gfo-newsletter"
        },
        {
          icon: "mdi-parachute",
          title: "POLICY ANALYSIS",
          language: "en",
          link: "policy-analysis"
        }
      ],
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1"
      ],
      cycle: false,
      currentIssue: {
        iss_id: 3431,
        iss_number: 341,
        iss_date: "12 march 2020",
        iss_desc:
          "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",

        lang: "en",
        timestamp: "1580733020"
      },
      articles: [
        {
          art_title:
            "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
          art_issue: 321,
          art_date: "12 feb 2020",
          art_id: "dswe12",
          art_abstract:
            "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
          art_author: {
            name: "Ida Hakiza",
            author_url: "/Michel",
            author_img: require("@/assets/images/common/author_default.svg")
          },
          comments: 23,
          views: 2340,
          shares: 120
        },
        {
          art_title:
            "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
          art_issue: 431,
          art_date: "02 feb 2020",
          art_id: "dswe1322",
          art_abstract:
            "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
          art_author: {
            name: "Adele Sulcas",
            author_url: "/Michel",
            author_img: require("@/assets/images/common/author_default.svg")
          },
          comments: 3,
          views: 230,
          shares: 20
        },
        {
          art_title:
            "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
          art_issue: 431,
          art_date: "02 feb 2020",
          art_id: "dswe1322",
          art_abstract:
            "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
          art_author: {
            name: "Adele Sulcas",
            author_url: "/Michel",
            author_img: require("@/assets/images/common/author_default.svg")
          },
          comments: 25,
          views: 210,
          shares: 320
        },
        {
          art_title:
            "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
          art_issue: 431,
          art_date: "02 feb 2020",
          art_id: "dswe1322",
          art_abstract:
            "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
          art_author: {
            name: "Adele Sulcas",
            author_url: "/Michel",
            author_img: require("@/assets/images/common/author_default.svg")
          },
          comments: 23,
          views: 2340,
          shares: 120
        },
        {
          art_title:
            "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
          art_issue: 431,
          art_date: "02 feb 2020",
          art_id: "dswe1322",
          art_abstract:
            "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
          art_author: {
            name: "Adele Sulcas",
            author_url: "/Michel",
            author_img: require("@/assets/images/common/author_default.svg")
          },
          comments: 23,
          views: 2340,
          shares: 120
        },
        {
          art_title:
            "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
          art_issue: 531,
          art_date: "12 feb 2020",
          art_id: "dswe1fg2",
          art_abstract:
            "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
          art_author: {
            name: "Staff Ange",
            author_url: "/Michel",
            author_img: require("@/assets/images/common/author_default.svg")
          },
          comments: 23,
          views: 2340,
          shares: 120
        },
        {
          art_title:
            "GLOBAL FUND BOARD APPROVES $135.7M AND €25.7M OF PORTFOLIO-OPTIMIZATION AWARDS FOR 23 COUNTRIES",
          art_issue: 321,
          art_date: "12 feb 2020",
          art_id: "dswtr12",
          art_abstract:
            "This edition’s ‘Of Interest’ focuses on value-for-money resources for applicants to the Global Fund, the Global Fund and Friends of the Global Fund/Japan’s participation in the torch relay for the Tokyo Olympics, and the plenary lineup for AIDS 2020, announced by the International AIDS Society.",
          art_author: {
            name: "Michel Ange",
            author_url: "/Michel",
            author_img: require("@/assets/images/common/author_default.svg")
          },
          comments: 23,
          views: 2340,
          shares: 120
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$lighblue: rgba(43, 183, 255, 0.54);
$less-lightblue: #00adef;
$lightgrey: rgb(69, 69, 70);

#top-intro {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
}

#inner-title {
  color: #ff7a2b;
  text-align: center;
}

.intro-text {
  text-transform: capitalize;
  font-size: 18px;
  letter-spacing: 1px;
  color: #000000;
}

.wedo h2 {
  text-align: center;
  margin-top: 15px;
  color: #ff7a2b;
}

.wedo p {
  font-size: 20px;
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 1px;
  color: #000000;
}

#whatwe {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
  flex-shrink: 0.6;
}

#whatwe .inner-card {
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: auto;
}

#quicklinks-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}

#quicklinks-bottom .button {
  margin-right: 4px;
}

#current-issue {
  background-color: $lighblue;
}

#current-issue .title {
  color: $lightgrey;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
}

.issue-date-container {
  text-align: right;
  display: flex;
  justify-content: flex-end;
}

.issue-number {
  color: black;
}
</style>
