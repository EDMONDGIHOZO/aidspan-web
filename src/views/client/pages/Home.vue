<template>
    <div class="all">
        <!-- bring the header -->
        <main-slider/>
        <!-- intro section -->
        <v-row row wrap id="web-intro" v-if="wwaFound">
            <v-col cols="12" md="5" sm="4" lg="4" class="aidspan">
                <div class="header title display-2">
                    <h3>{{ $t("whatweare.title") }}</h3>
                </div>
                <p v-scrollAnimation class="black--text">{{ wwa }}</p>
            </v-col>
            <v-col cols="12" md="7" sm="6" lg="8" class="mission" v-scrollAnimation>
                <div class="mission-header" transition="scale-transition">
                    <h3>{{ $t("mission.title") }}</h3>
                    <p>{{ $t("mission.subtitle") }}</p>
                </div>
                <div class="mission-content">
                    <v-card hover class="epidemic-card">
                        <v-card-text>
                            <v-img
                                    :src="hiv.ep_icon"
                                    width="140"
                                    class="disease-img d-none d-sm-flex"
                            ></v-img>
                            <p :class="hiv.color">{{ $t("hiv") }}</p>
                        </v-card-text>
                    </v-card>
                    <v-card hover class="epidemic-card">
                        <v-card-text>
                            <v-img
                                    :src="tuber.ep_icon"
                                    width="140"
                                    class="disease-img d-none d-sm-flex"
                            ></v-img>
                            <p :class="tuber.color">{{ $t("tuber") }}</p>
                        </v-card-text>
                    </v-card>
                    <v-card hover class="epidemic-card">
                        <v-card-text>
                            <v-img
                                    :src="malaria.ep_icon"
                                    width="140"
                                    class="disease-img d-none d-sm-flex"
                            ></v-img>
                            <p :class="malaria.color">{{ $t("malaria") }}</p>
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
                    <v-card-title class="font-weight-bold">{{
                        $t("publications.intro_title")
                        }}
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" md="6" class="guides">
                            <span class="sub-title">GUIDES</span>
                            <p>{{ $t("define_guides") }}</p>
                        </v-col>
                        <v-col cols="12" md="6" class="reports">
                            <span class="sub-title">{{ $t("report_title") }}</span>
                            <p>{{ $t("report_intro") }}</p>
                        </v-col>
                        <v-col cols="12" class="my-4">
                            <v-btn block text color="secondary" outlined @click="viewpubs">{{
                                $t("viewall")
                                }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" class="apw-home-intro">
                <v-card
                        class="pa-1"
                        hover
                        id="apw-card"
                        flat
                        href="https://data.aidspan.org"
                >
                    <div class="font-weight-bold title-bar-intro">
                        <v-icon left small>mdi-merge</v-icon>
                        <span>AIDSPAN PORTAL WORKBENCH</span>
                    </div>
                    <v-card-text class="pa-4 font-weight-bold">{{
                        $t("apwintro")
                        }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- our awesome donors -->
        <v-layout row wrap id="donors">
            <v-flex md2 xs12>
                <h2 class="blue--text lighten-1">{{ $t("donors") }}</h2>
            </v-flex>
            <div class="logos pa-5">
                <v-sheet class="mx-auto" max-width="700">
                    <v-slide-group multiple show-arrows>
                        <v-slide-item
                                v-for="logo in donorsLogos"
                                :key="logo.id"
                                v-slot="{ active, toggle }"
                        >
                            <v-img
                                    :src="logo.img"
                                    :input-value="active"
                                    @click="toggle"
                                    max-width="150"
                                    max-height="50"
                                    class="mx-4"
                            />
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </div>
            <v-row align-content="stretch" class="endorsers mt-15 mb-16" md="px-10">
                <v-col cols="12">
                    <h3>What our endorsers have to say</h3>
                    <v-divider></v-divider>
                </v-col>
                <v-col cols="12" md="4">
                    <user-card
                            name="Ade Fakoya"
                            position="Senior Specialist HIV"
                            quote="“When I joined the Global Fund, I avidly read back issues of the GFO to get me up to speed on what is an incredibly complex organisation. I have always found the GFO clear, honest, and saying the things that many of the staff in the Fund wish we had the space (or courage) to say.”"
                            :image-url="require('@/assets/images/people/fakoya.jpeg')"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <user-card
                            name="Stephen Lewis"
                            position="Former Special Envoy for HIV/AIDS in Africa of the UN Secretary-General"
                            quote="“Global Fund Observer is lucid, intelligent and definitive. It makes a huge contribution to everyone's understanding of the processes and realities of the Global Fund.”"
                            :image-url="require('@/assets/images/people/2.jpeg')"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <user-card
                            name="Rosemeire Munhoz"
                            position="UNAIDS Country Coordinator, Burundi"
                            quote="Congratulations for your work on watchdogging, it will help all of us to deliver good results in Global Fund implementation of proposals.”"
                            :image-url="require('@/assets/images/people/unaids.jpeg')"
                    />
                </v-col>
            </v-row>
        </v-layout>
        <!--- end donors -->
    </div>

</template>

<script>
// @ is an alias to /src
//import the header,footer,mobile menu
import {mapState} from "vuex";
import currentIssue from "@/components/helpers/currentIssue.vue";
import Api from "@/services/Api";
import IntroSlider from "@/components/sliders/introSlider.vue";
import MainSlider from "@/components/sliders/main.vue";
import UserCard from "@/components/helpers/userCard.vue";

export default {
    computed: {
        ...mapState(["slides", "articles", "publications", "epidemics"]),
    },
    components: {
        UserCard,
        MainSlider,
        IntroSlider,
        "current-issue": currentIssue,
    },

    methods: {
        viewpubs() {
            this.$router.push({name: "Publications"});
        },

        fetchStaticData() {
            const lang = this.$i18n.locale;
            Api()
                .get(`/wwa/${lang}`)
                .then((response) => {
                    let data = response.data.data;
                    console.log(data);
                    this.wwa = data.field_visible_text_value;
                    this.wwaFound = true;
                });
        },
    },

    created() {
        this.fetchStaticData();
    },

    data() {
        return {
            corauselModel: 0,
            corauselColors: [
                "primary",
                "secondary",
                "yellow darken-2",
                "red",
                "orange",
            ],
            wwa: "",
            wwaFound: false,
            hiv: {
                ep_name: "HIV/AIDS",
                ep_icon: require("@/assets/images/common/aids.png"),
                ep_id: "adfawe",
                class: "A",
                color: "red--text text-center font-weight-bold",
            },
            tuber: {
                ep_name: "TUBERCULOSIS",
                ep_icon: require("@/assets/images/common/tuberclosis.png"),
                ep_id: "safda3",
                class: "T",
                color: "blue--text text-center font-weight-bold",
            },
            malaria: {
                ep_name: "MALARIA",
                ep_icon: require("@/assets/images/common/maralia.png"),
                ep_id: "213fjdsl",
                class: "M",
                color: "amber--text text-center font-weight-bold",
            },

            sliderImages: [
                {
                    id: "1",
                    alt: "ida",
                    url: "https://res.cloudinary.com/yebalabs-com/image/upload/v1654104228/aidspan/_cmc1102_49213252167_o_de0itr.jpg",
                },
                {
                    id: "2",
                    alt: "team",
                    url: "https://res.cloudinary.com/yebalabs-com/image/upload/v1654104190/aidspan/27_49213112362_o_w1ucfz.jpg",
                },
                {
                    id: "3",
                    alt: "team",
                    url: "https://res.cloudinary.com/yebalabs-com/image/upload/v1654104185/aidspan/_cmc1302_49212892776_o_qwwdm9.jpg",
                },
                {
                    id: "4",
                    alt: "aidspan",
                    url: "https://res.cloudinary.com/yebalabs-com/image/upload/v1654104179/aidspan/_cmc1091_49212550163_o_g8pvpv.jpg",
                },
                {
                    id: "6",
                    alt: "aidspan",
                    url: "https://res.cloudinary.com/yebalabs-com/image/upload/v1654104167/aidspan/24_49212615763_o_vgkfi1.jpg",
                },
                {
                    id: "7",
                    alt: "aidspan",
                    url: "https://res.cloudinary.com/yebalabs-com/image/upload/v1654098325/aidspan/ida_kaxddr.jpg",
                },
                {
                    id: "8",
                    alt: "aidspan",
                    url: "https://res.cloudinary.com/yebalabs-com/image/upload/v1654097303/aidspan/team-photo_v5oe3t.jpg",
                },
            ],

            //donors logos //
            donorsLogos: [
                {
                    img: require("@/assets/images/common/donors/giz.jpg"),
                    web: "https://www.giz.de/en/",
                    id: 1,
                },
                {
                    img: require("@/assets/images/common/donors/governmentNetherland.png"),
                    web: "https://www.giz.de/en/worldwide",
                    id: 2,
                },
                {
                    img: require("@/assets/images/common/donors/norad.png"),
                    web: "https://norad.no/en/front/",
                    id: 3,
                },
                {
                    img: require("@/assets/images/common/donors/initiative5.png"),
                    web: "https://www.initiative5pour100.fr/",
                    id: 4,
                },
                {
                    img: require("@/assets/images/common/donors/irishAid.jpg"),
                    web: "https://www.irishaid.ie/",
                    id: 5,
                },
                {
                    img: require("@/assets/images/common/donors/Ahf.jpg"),
                    web: "https://www.aidshealth.org",
                    id: 6,
                },
                {
                    img: require("@/assets/images/common/donors/opensociety.png"),
                    web: "https://www.opensocietyfoundations.org/",
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
  .endorsers {
    padding: 40px 150px;
  }
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
    color: red;
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

.endorsers {
  margin-top: 30px;
  padding: 10px 30px;
}

.endorsers h3 {
  font-size: 2rem;
  text-align: center;
  color: #0eaae7;

}
</style>
