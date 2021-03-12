<template>
  <v-container class="pa-5">
    <!-- Start aidspan about us test -->
    <v-row class="my-5">
      <v-col cols="12" id="aboutus-container">
        <v-card class="abt">
          <v-card-title class="text-uppercase font-weight-bold">{{
            $t("whatwedo.title")
          }}</v-card-title>
          <v-card-text>{{ $t("whatwedo.content") }}</v-card-text>
        </v-card>
        <v-card class="my-5 abt">
          <v-card-title class="font-weight-bold">{{
            $t("whatweare.title")
          }}</v-card-title>
          <v-card-text>
            <p>{{ $t("whatweare.content") }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--- starting the tabs of core values and mission and vision section -->
    <v-row wrap class="justify-1">
      <v-col cols="12" md="8" class="cores">
        <h4 class="px-5 my-4 text-uppercase my-1">{{ $t("core.title") }}</h4>
        <core-values />
      </v-col>

      <!-- end of core values-->
      <!-- start of the mission and vision -->
      <v-col cols="12" md="4" class="mission-vision">
        <v-card flat class="miscard" shaped>
          <v-card-title class="white-text font-weight-bold">{{
            $t("mission.title")
          }}</v-card-title>
          <v-card-text>{{ $t("mission.short") }}</v-card-text>
        </v-card>
        <v-card flat class="miscard" shaped>
          <v-card-title class="white-text font-weight-bold">{{
            $t("vision.title")
          }}</v-card-title>
          <v-card-text>{{ $t("vision.content") }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- end of the visino and mission -->
    <!-- start policy analysis --->
    <!-- start the history timeline  -->
    <v-row id="history">
      <v-col cols="12" md="12" lg="12">
        <v-card flat color="secondary">
          <v-card-title class="font-weight-black">{{
            $t("history.title")
          }}</v-card-title>
          <v-card-text>
            <p class="white--text">
              {{ $t("history.desc") }}
            </p>
          </v-card-text>
        </v-card>
        <history />
      </v-col>
    </v-row>
    <v-row class="board-row">
      <v-col cols="12">
        <h3 class="text-center">{{ $t("board-dirs.title") }}</h3>
        <p class="pa-5 text-center">{{ $t("board-dirs.desc") }}</p>
      </v-col>
      <v-col
        cols="12"
        md="4"
        id="board"
        v-for="director in directors"
        :key="director.id"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="leader" min-width="360">
              <v-img
                :src="director.img"
                height="300"
                :aspect-ratio="16 / 9"
              ></v-img>
              <v-card-subtitle class="pb-0 text-uppercase">{{
                director.position
              }}</v-card-subtitle>
              <v-card-text>
                <h4 class="primary--text text-capitalize">
                  {{ director.names }}
                </h4>
              </v-card-text>
              <v-expand-transition>
                <v-overlay
                  v-if="hover"
                  opacity="0.90"
                  absolute
                  color="#00adef"
                  style="height: 100%; cursor: alias"
                  class="d-flex transition-fast-in-fast-out darken-2 pa-5 v-card--reveal"
                >
                  <p>{{ director.desc }}</p>
                  <v-chip
                    color="secondary"
                    small
                    :href="'mailto:' + director.email"
                    target="_black"
                    >{{ director.email }}</v-chip
                  >
                </v-overlay>
              </v-expand-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CoreValues from "@/components/helpers/CoreValues.vue";
import History from "@/components/helpers/History.vue"
export default {
  components: {
    "core-values": CoreValues,
    "history": History
  },
  data() {
    return {
      ///board of member sliders
      model: null,
      //core values
      directors: [
        {
          id: 1,
          names: "ISAAC AWUONDO",
          position: "BOARD CHAIR",
          email: "(isaac.awuondo@cbagroup.com)",
          desc:
            "Group Managing Director, Commercial Bank of Africa, Based in Nairobi, Kenya.",
          img:
            "https://copiaglobal.com/wp-content/uploads/2019/09/IMG_0001.jpeg",
        },

        {
          id: 2,
          names: "Professor Alan Whiteside",
          position: "BOARD Member",
          email: "(awhiteside@balsillieschool.ca)",
          desc:
            "Founder and Executive Director of the Health Economics and HIV/AIDS Research Division at the University of KwaZulu-Natal",
          img:
            "data:image/jpeg;base64,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",
        },
        {
          id: 3,
          names: "Djalo Mele",
          email: "(djalomele@yahoo.fr)",
          position: "BOARD Member",
          desc:
            "President of the Country Coordinating Mechanism in Niger, Based in Niamey, Niger.",
          img:
            "https://pbs.twimg.com/profile_images/1314529600391782400/DLaH6sEX_400x400.jpg",
        },
        {
          id: 4,
          names: "Dr. Jesse Boardman Bump",
          email: "bump@hsph.harvard.edu",
          position: "BOARD Member",
          desc:
            "Executive director of the Takemi Program in International Health and lecturer on global health policy at the Harvard T.H. Chan School of Public Health.",
          img: require("@/assets/images/common/board/bump.jpg"),
        },
        {
          id: 6,
          names: "Prof.Gavin George",
          position: "Board Member",
          img:
            "https://cdn.theconversation.com/avatars/1107047/width238/Gavin_George.jpg",
          desc:
            "Prof Gavin George is a Programme Leader at the Health Economics and HIV and AIDS Research Division (HEARD) and Associate Professor in the School of Accounting, Economics and Finance at the University of KwaZuluNatal, Durban, South Africa.",
          email: "(ida.hakizinka@aidspan.org)",
        },
        {
          id: 7,
          names: "Ida Hakizinka",
          position: "EXECUTIVE DIRECTOR",
          img: require("@/assets/images/common/board/ida.jpg"),
          desc: "Aidspan’s Executive Director",
          email: "(ida.hakizinka@aidspan.org)",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .cores {
    margin-bottom: 40px;
    height: 400px;
  }
  #history {
    padding: 0;
  }

  #board {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }

  #board .leader {
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
  }
}

#team {
  height: 160px;
  background-image: url("~@/assets/images/common/autumn.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  border-radius: 5px;
}
.mission-vision {
  color: "white";
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background: linear-gradient(171.1deg, #ffffff 4.98%, #e6e9ef 94.88%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.miscard {
  min-width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 10px 10px 18px rgba(244, 247, 252, 0.9),
    -10px -10px 18px rgba(255, 255, 255, 0.8);
}

.dirmail {
  background: red;
  width: 50%;
  bottom: 10px;
  border: 3px solid #8ac007;
}

.aidspan-name {
  font-weight: 200;
}
.web-slogan {
  font-weight: bold;
  color: white;
}
</style>
