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
    <!--end of corousel -->

    <!-- intro section -->
    <v-container fluid>
      <v-layout row wrap id="web-intro">
        <v-flex xs12 md5 sm4 lg4 class="aidspan">
          <div class="header">
            <h1 display-2>AIDSPAN</h1>
          </div>
          <p v-scrollAnimation v-if="mission.lang === 'en'">
            {{ mission.content }}
          </p>
        </v-flex>
        <v-flex xs12 md7 sm6 lg8 class="mission" v-scrollAnimation>
          <div class="mission-header" transition="scale-transition">
            <h1>OUR MISSION</h1>
            <h3>Our world without Epidemics of :</h3>
          </div>
          <div class="mission-content">
            <v-card
              class="ma-2 pa-4"
              v-for="epidemic in epidemics"
              :key="epidemic.ep_id"
              hover
              shaped
            >
              <v-card-item id="epidemic-card">
                <v-img
                  :src="epidemic.ep_icon"
                  width="187"
                  class="d-none d-sm-flex"
                ></v-img>
                <v-btn text color="red" block style="color:red">{{
                  epidemic.ep_name
                }}</v-btn>
              </v-card-item>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- end of intro section -->
    <!-- start latest issue section -->
    <v-container fluid id="current-issue">
      <v-layout row>
        <v-flex md12 ma-2>
          <v-card flat>
            <v-card-actions>
              <v-card-title>
                GFO Current Issue {{ currentIssue.iss_number }}
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
      <v-layout row wrap v-scrollAnimation>
        <v-slide-group v-model="model" class="pa-2" multiple show-arrows>
          <v-slide-item
            v-for="article in newArticles"
            :key="article.art_id"
            v-slot:default="{ active, toggle }"
          >
            <v-flex xs12 sm4 md4 lg3>
              <v-card
                class="text-xs-center ma-2"
                id="current-article"
                hover
                raised
                @click="toggle"
                href="/article"
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
        <v-flex xs12 md8>
          <v-card class="mx-auto pa-5 ma-1" flat>
            <v-list>
              <v-list-title class="title">Publications</v-list-title>
              <v-list-item
                v-for="publication in publications"
                :key="publication.pub_id"
              >
                <v-list-item-content>
                  <v-list-item-title
                    v-text="publication.pub_title"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="publication.pub_date"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon outlined small fab color="primary">
                    <v-icon color="lighten-1">mdi-download</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-btn rounded block color="secondary" router to="/publications"
              >View All Publications</v-btn
            >
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card class="mx-auto pa-5 ma-1" hover shaped id="apw-card">
            <v-card-title>
              <v-icon>mdi-settings</v-icon>
              AIDSPAN PORTAL WORKBENCH
            </v-card-title>
            <v-card-text>
              Aidspan Portal Workbench™ is a flexible and powerful web-based
              application which retrieves grant portfolio data from the web
              services provided by the Global Fund and then makes the data
              available in a user-friendly way.
              <v-btn
                v-scrollAnimation
                absolute
                dark
                fab
                bottom
                right
                color="secondary"
                href="https://data.aidspan.org"
                target="_blank"
              >
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row wrap id="subscribe-section" v-scrollAnimation>
        <v-flex xs12 md12 class="pa-5 title">
          <div class="ma-3">
            <div class="heading display-1 orange--text">
              SUBSCRIBE FOR NEWSLETTER
            </div>
            <div class="subHeading font-weight-light">
              for newsletter in English choose GFO or OFM for french
            </div>
          </div>
        </v-flex>
        <v-flex class="pa-2 content">
          <v-col cols="12" md="12">
            <v-form ref="form" v-model="valid" lazy-validation justify-center>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                outlined
                rounded
                color="secondary"
                background-color="white"
              ></v-text-field>
              <v-select
                v-model="select"
                :items="newsletters"
                :rules="[v => !!v || 'Item is required']"
                label="GFO or OFM ?"
                required
                class="white--text"
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                rounded
              ></v-checkbox>
              <v-btn
                :disabled="!valid"
                color="secondary"
                class="mr-8"
                rounded
                outlined
                block
                large
              >
                Subscribe
              </v-btn>
            </v-form>
          </v-col>
        </v-flex>
      </v-layout>
      <!-- our awesome donors -->
      <v-layout row wrap id="donors" >
        <v-flex md2 xs12>
          <h2>OUR DONORS</h2>
        </v-flex>
        <v-flex md10 xs12>
          <div class="logos">
            <v-sheet class="mx-auto">
              <v-slide-group multiple show-arrows light>
                <v-slide-item v-for="logo in donorsLogos" :key="logo.web">
                  <v-card flat class="mx-4" hover :href="logo.web" target="_blank">
                    <v-card-image
                      ><img :src="logo.img" alt="donor logo" height="73px"/></v-card-image>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>
        </v-flex>
      </v-layout>
      <!--- end donors -->
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
    newArticles() {
      return this.$store.state.articles;
    },
    publications() {
      return this.$store.state.homePublications;
    },
    epidemics() {
      return this.$store.state.epidemics;
    }
  },
  data() {
    return {
      //donors logos //
      donorsLogos: [
        {
          img: require("@/assets/images/common/donors/Ahf.jpg"),
          web: "https://www.aidshealth.org"
        },
        {
          img: require("@/assets/images/common/donors/governmentNetherland.png"),
          web: "https://www.giz.de/en/worldwide"
        },
        {
          img: require("@/assets/images/common/donors/initiative5.png"),
          web: "https://www.initiative5pour100.fr/"
        },
        {
          img: require("@/assets/images/common/donors/irishAid.jpg"),
          web: "https://www.irishaid.ie/"
        },
        {
          img: require("@/assets/images/common/donors/norad.png"),
          web: "https://norad.no/en/front/"
        },
        {
          img: require("@/assets/images/common/donors/opensociety.png"),
          web: "https://www.opensocietyfoundations.org/"
        }
      ],

      //end of donors logos

      mission: {
        lang: "en",
        content:
          "Aidspan Is An International Non-Governmental Organization (NGO) Created In 2002 As An Independent Observer Of The Global Fund To Figh AIDS, TB, And Malaria. Aidspan Provides The Global Fund To Fight AIDS, Tuberculosis And Malaria (The “Global Fund”) Stakeholders Information And Analysis To Understand And Evaluate The Global Fund Progress. Aidspan Aims To Influence The Transparency And Effectiveness Of The Global Fund At The Global And Country-Level"
      },
      //subscribe form
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      valid: false,
      select: null,
      newsletters: ["OFM", "GFO", "Both"],
      checkbox: false,
      //end of subscribe form

      items: [
        {
          icon: "folder",
          iconClass: "orange lighten-1 white--text",
          title: "Photos",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "orange lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "orange lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014"
        }
      ],
      items2: [
        {
          icon: "assignment",
          iconClass: "blue white--text",
          title: "Vacation itinerary",
          subtitle: "Jan 20, 2014"
        },
        {
          icon: "call_to_action",
          iconClass: "amber white--text",
          title: "Kitchen remodel",
          subtitle: "Jan 10, 2014"
        }
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
      }
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

#donors {
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: solid 4px #00adef;
}
</style>
