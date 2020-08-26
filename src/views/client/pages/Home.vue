<template>
  <div class="all">
    <!-- bring the header -->
    <landing-image />
    <!--end of corousel -->
    <!-- intro section -->
    <v-row row wrap id="web-intro">
      <v-col cols="12" md="5" sm="4" lg="4" class="aidspan">
        <div class="header">
          <h3>{{$t('whatweare.title')}}</h3>
        </div>
        <p v-scrollAnimation>{{ $t('mission.content') }}</p>
      </v-col>
      <v-col cols="12" md="7" sm="6" lg="8" class="mission" v-scrollAnimation>
        <div class="mission-header" transition="scale-transition">
          <h3>{{$t('mission.title')}}</h3>
          <p>{{$t('mission.subtitle')}}</p>
        </div>
        <div class="mission-content">
          <v-card hover class="epidemic-card" v-for="epidemic in epidemics" :key="epidemic.ep_id">
            <v-card-text>
              <v-img :src="epidemic.ep_icon" width="140" class="disease-img d-none d-sm-flex"></v-img>
              <p :class="epidemic.color">{{ epidemic.ep_name }}</p>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- end of intro section -->
    <!-- start latest issue section -->
    <current-issue></current-issue>

    <v-row class="publication-row">
      <v-col cols="12" md="8">
        <v-card class="px-3" id="publications-intro" flat>
          <v-card-title class="font-weight-bold">{{$t('publications.intro_title')}}</v-card-title>
          <v-row>
            <v-col cols="12" md="6" class="guides">
              <span class="sub-title">GUIDES</span>
              <p>{{$t('define_guides')}}</p>
            </v-col>
            <v-col cols="12" md="6" class="reports">
              <span class="sub-title">{{$t('report_title')}}</span>
              <p>{{$t('report_intro')}}</p>
            </v-col>
            <v-btn block text color="primary" router to="publications">{{$t('viewall')}}</v-btn>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="apw-home-intro">
        <v-card class="pa-1" hover id="apw-card" flat href="https://data.aidspan.org">
          <v-card-title>
            <v-icon left small>mdi-post</v-icon>AIDSPAN PORTAL WORKBENCH
          </v-card-title>
          <v-card-text class="pa-4 font-weight-bold">{{$t('apwintro')}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- our awesome donors -->
    <v-layout row wrap id="donors">
      <v-flex md2 xs12>
        <h2 class="blue--text lighten-1">{{$t('donors')}}</h2>
      </v-flex>
      <v-flex md10 xs12>
        <div class="logos">
          <v-sheet class="mx-auto">
            <v-slide-group multiple show-arrows light>
              <v-slide-item v-for="logo in donorsLogos" :key="logo.id">
                <v-card flat class="ma-2 pa-3" outlined :href="logo.web" target="_blank">
                  <img :src="logo.img" alt="donor logo" height="50px" />
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </div>
      </v-flex>
    </v-layout>
    <!--- end donors -->
  </div>
</template>

<script>
// @ is an alias to /src
//import the header,footer,mobile menu
import { mapState } from "vuex";
import currentIssue from "@/components/helpers/currentIssue.vue";
import Landing from "@/components/tools/landingimage.vue";


export default {
  computed: {
    ...mapState(["slides", "articles", "publications", "epidemics"]),
  },
  components: {
    "current-issue": currentIssue,
    "landing-image": Landing,
   
  },

  data() {
    return {
      //donors logos //
      donorsLogos: [
        {
          img: require("@/assets/images/common/donors/giz.jpg"),
          web: "https://www.giz.de/en/",
          id: 1,
        },
        {
          img: require("@/assets/images/common/donors/norad.png"),
          web: "https://norad.no/en/front/",
          id: 2,
        },
        {
          img: require("@/assets/images/common/donors/Ahf.jpg"),
          web: "https://www.aidshealth.org",
          id: 3,
        },
        {
          img: require("@/assets/images/common/donors/irishAid.jpg"),
          web: "https://www.irishaid.ie/",
          id: 4,
        },
        {
          img: require("@/assets/images/common/donors/governmentNetherland.png"),
          web: "https://www.giz.de/en/worldwide",
          id: 5,
        },
        {
          img: require("@/assets/images/common/donors/opensociety.png"),
          web: "https://www.opensocietyfoundations.org/",
          id: 6,
        },

        {
          img: require("@/assets/images/common/donors/initiative5.png"),
          web: "https://www.initiative5pour100.fr/",
          id: 7,
        },
      ],

      //end of donors logos
      //subscribe form
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
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
          subtitle: "Jan 9, 2014",
        },
        {
          icon: "folder",
          iconClass: "orange lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014",
        },
        {
          icon: "folder",
          iconClass: "orange lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014",
        },
      ],
      items2: [
        {
          icon: "assignment",
          iconClass: "blue white--text",
          title: "Vacation itinerary",
          subtitle: "Jan 20, 2014",
        },
        {
          icon: "call_to_action",
          iconClass: "amber white--text",
          title: "Kitchen remodel",
          subtitle: "Jan 10, 2014",
        },
      ],
      //sampled data
      model: false,
      quickhomelinks: [
        {
          icon: "mdi-google-analytics",
          title: "DATA ANALYTICS",
          language: "en",
          link: "/data-analyics",
        },
        {
          icon: "mdi-email-newsletter",
          title: "EDITORIAL",
          language: "en",
          link: "/gfo-newsletter",
        },
        {
          icon: "mdi-parachute",
          title: "POLICY ANALYSIS",
          language: "en",
          link: "policy-analysis",
        },
      ],
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      cycle: false,
    };
  },
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

.current-issue-number {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  overflow: hidden;
}

@media screen and (max-width: 520px) {
  .all {
    padding: 0;
  }
  #web-intro {
    border-radius: 0;
    border: none;
  }
  #web-intro .aidspan {
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    background-image: url("~@/assets/images/common/whatweare-03.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 460px;
    border: none;
  }
  #web-intro .mission .mission-content .epidemic-card {
    width: 100px;
    height: 100px;
  }

  .disease-img {
    width: 100px;
    border-radius: 50%;
  }
}

.publication-row {
  background-color: #f8f8fb;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
