<template>
  <v-container class="pa-5">
    <!-- Start aidspan about us test -->
    <v-row class="my-5">
      <v-col cols="12" id="aboutus-container">
        <v-card class="abt">
          <v-card-title class="text-uppercase font-weight-bold">{{$t('whatwedo.title')}}</v-card-title>
          <v-card-text>{{$t('whatwedo.content')}}</v-card-text>
        </v-card>
        <v-card class="my-5 abt">
          <v-card-title class="font-weight-bold">{{$t('whatweare.title')}}</v-card-title>
          <v-card-text>
            <p>{{$t('whatweare.content')}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!--- starting the tabs of core values and mission and vision section -->
    <v-row wrap class="justify-1">
      <v-col cols="12" md="8" class="cores">
        <h4 class="px-5 my-4 text-uppercase my-1">Core Values</h4>
        <v-tabs horizontal background-color="#e9edf0">
          <v-tab v-for="value in coreValues" :key="value.id" id="tabstitle" tab-reverse-transition>
            <p class="font-weight-bold">{{ value.title }}</p>
          </v-tab>

          <v-tab-item v-for="value in coreValues" :key="value.id">
            <v-card flat id="tabcontainer" height="265px" color="#e9edf0">
              <v-card-text>
                <p class="desc">{{ value.desc }}</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
      <!-- end of core values-->
      <!-- start of the mission and vision -->
      <v-col cols="12" md="4" class="mission-vision">
        <v-card flat class="miscard" shaped>
          <v-card-title class="white-text font-weight-bold">{{$t('mission.title')}}</v-card-title>
          <v-card-text>{{$t('mission.short')}}</v-card-text>
        </v-card>
        <v-card flat class="miscard" shaped>
          <v-card-title class="white-text font-weight-bold">{{$t('vision.title')}}</v-card-title>
          <v-card-text>{{$t('vision.content')}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- end of the visino and mission -->
    <!-- start policy analysis --->
    <v-row>
      <v-col cols="12">
        <v-card color="primary" flat shaped id="policy">
          <v-card-title>
            <h4>POLICY ANALYSIS</h4>
          </v-card-title>
          <v-card-text>
            <p class="white--text">
              Aidspan conducts independent and critical analysis and
              investigation of Global Fund policies, strategies, processes and
              structures, funding mechanisms, transparency and data quality. We
              publish its analytical content through reports, case studies,
              peer-reviewed articles, and reviews. Aidspan also provides
              guidance to those applying for, implementing or overseeing Global
              Fund grants by publishing guides on diverse subjects. Aidspan
              relies on a small team of in-house researchers and external
              collaborators with expertise in health economics, epidemiology,
              governance, health systems strengthening, and Global Fund
              processes among others. We are developing collaborations with
              research institutions and other policy-focused organizations.
              Aidspan aims to provide independent analyses on the Global Fund
              policies that can be used by our stakeholders. They include the
              Global Fund (Secretariat, Office of the Inspector General (OIG)
              and Board, including the committees), Global Fund donors,
              implementers, civil society researchers, and media. All Aidspan
              publications are open access. We welcome suggestions for articles
              and research collaborations.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- start the history timeline  -->
    <v-row id="history">
      <v-col cols="12" md="12" lg="12">
        <v-card flat color="secondary">
          <v-card-title class="font-weight-black">OUR HISTORY</v-card-title>
          <v-card-text>
            <p class="white--text">
              Aidspan is currently focused exclusively on the Global Fund and
              its implementing countries. Since its founding in 2002, Aidspan
              has contributed extensively to improving knowledge and insight
              into this multilateral health financing mechanism. Selected
              highlights of Aidspan's work include:
            </p>
          </v-card-text>
        </v-card>
        <v-timeline dense align-top light>
          <v-timeline-item v-for="year in achieves" :key="year.id" :color="year.color" small>
            <template v-slot:opposite>
              <span :class="`font-weight-bold ${year.color}--text`" v-text="year.year"></span>
            </template>
            <v-card flat class="hiscard">
              <v-card-text>{{ year.describe }}</v-card-text>
              <v-card-actions>
                <small class="font-weight-bold">{{year.year}}</small>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row class="board-row">
      <v-col cols="12">
        <h3 class="text-center">BOARD OF DIRECTORS</h3>
        <p class="pa-5 text-center">
          Aidspan has two 2-day board meetings per year. Board members are not paid for their work.
          Aidspan is headed by a Board of Directors composed of four accomplished professionals with diverse skills.
        </p>
      </v-col>
      <v-col cols="12" id="board">
        <v-hover v-for="director in directors" :key="director.names">
          <template v-slot:default="{ hover }">
            <v-card class="leader" width="400">
              <v-img :src="director.img" height="300" :aspect-ratio="16/9"></v-img>
              <v-card-subtitle class="pb-0 text-uppercase">{{director.position}}</v-card-subtitle>
              <v-card-text>
                <h4 class="primary--text text-capitalize">{{director.names}}</h4>
              </v-card-text>
              <v-expand-transition>
                <v-overlay
                  v-if="hover"
                  opacity="0.90"
                  absolute
                  color="#00adef"
                  style="height: 100%; cursor: alias"
                  class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal"
                >
                  <p>{{director.desc}}</p>
                  <v-chip color="secondary" small :href="'mailto:'+director.email" target="_black">{{director.email}}</v-chip>
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
export default {
  data() {
    return {
      ///board of member sliders
      model: null,
      /// years
      achieves: [
        {
          color: "cyan",
          year: "December, 2002",
          id: 12,
          describe:
            "Aidspan launched Global Fund Observer (GFO), rapidly establishing it as the definitive source of news, analysis and commentary about the Global Fund.",
        },
        {
          color: "green",
          year: "March, 2004",
          id: 11,
          describe:
            "Aidspan published its first “Guide to Applying to the Global Fund”. The guide has been updated annually since, reflecting the evolution of the Fund itself.",
        },
        {
          color: "pink",
          year: "March, 2004",
          id: 10,
          describe:
            "In the first two years of the existence of the Global Fund, Aidspan and two partners developed and refined the Equitable Contributions Framework : an equation that proposed the optimal size of the contribution from each donor country to the Fund based on its relative wealth. This approach was eventually adopted by a number of advocacy groups and by the Fund itself, in a modified form.",
        },
        {
          color: "amber",
          year: "May, 2005",
          id: 9,
          describe:
            "The Global Fund launched an in-depth external audit of Secretariat procedures after Aidspan wrote a confidential memo to the chair of the Global Fund Board raising certain concerns.",
        },
        {
          color: "orange",
          year: "August, 2005",
          id: 8,
          describe:
            "The Global Fund temporarily suspended all grants to Uganda after confirming allegations of corruption raised by a GFO reader and shared with the Fund by Aidspan.",
        },
        {
          color: "cyan",
          year: "January, 2007",
          id: 7,
          describe:
            "Aidspan convened a round table on problems faced by Global Fund recipients in accessing technical assistance, attended by the heads of UNAIDS, PEPFAR, the WHO and World Bank AIDS programmes, and other global health leaders.",
        },
        {
          color: "green",
          year: "May, 2007",
          id: 4,
          describe:
            "Aidspan moved its headquarters from New York, US, to Nairobi, Kenya.",
        },
        {
          color: "pink",
          year: "January, 2009",
          id: 6,
          describe:
            "Aidspan developed its Strategic Plan for 2010-2013, helping to drive an increase in its annual operating budget that led to the expansion of its programs and staff.",
        },
        {
          color: "amber",
          year: "March, 2009",
          id: 3,
          describe:
            "Uganda jailed the first two of four officials for Global Fund-related corruption that was first reported by Aidspan.",
        },
        {
          color: "orange",
          year: "April, 2012",
          id: 2,
          describe:
            "Aidspan provided testimony to a UK parliamentary committee in which it said that the Global Fund could not afford to have a second year like 2011, and might be permanently damaged if it did.",
        },
        {
          color: "green",
          year: "May, 2007",
          id: 5,
          describe:
            "Aidspan moved its headquarters from New York, US, to Nairobi, Kenya.",
        },
        {
          color: "pink",
          year: "January, 2015",
          id: 1,
          describe:
            "Aidspan developed its third strategic plan, covering the period 2016-2018.",
        },
      ],
      // end of timeline //
      coreValues: [
        {
          desc:
            "Aidspan aims to use resources towards results through a proactive and thoughtful approach to events and stakeholders.",
          id: "ffighs",
          title: "EFFECTIVENESS",
        },
        {
          desc:
            "Aidspan aims to deliver the most pertinent content when it is most useful to its audiences through proactive research, prospective analysis, and prompt reporting.",
          id: "ffighsDSREW3",
          title: "TIMELINESS",
        },
        {
          desc:
            "Aidspan promotes and holds itself to the highest standards of honesty, accuracy, truthfulness and ethical conduct.",
          id: "ffighsDSRESSW3",
          title: "INTEGRITY",
        },
        {
          desc:
            "Aidspan values stakeholder engagement which leads to ownership of the grant and improved results. Aidspan embraces cooperation in its work, valuing an integrated, interdisciplinary approach to research, analysis, and publication.",
          id: "ffighsDSRESSsdwW3",
          title: "COLLABORATION",
        },
        {
          desc:
            "Aidspan promotes full accountability for the use of the Global Fund resources at the global and country levels. Aidspan takes full responsibility for the content it publishes, paying close attention to its sources, as well as listening to its audience, to respond as best as it can to questions or criticism, including correcting errors or mistakes should they occur.",
          id: "fdwsfighsDSRESSsdwW3",
          title: "ACCOUNTABILITY",
        },
      ],
      //core values
      directors: [
        {
          names: "Ida Hakizinka",
          position: "EXECUTIVE DIRECTOR",
          img: require("@/assets/images/common/board/ida.jpg"),
          desc: "Aidspan’s Executive Director, ex officio",
          email: "(ida.hakizinka@aidspan.org)",
        },
        {
          names: "Professor Alan Whiteside",
          position: "BOARD Member",
          email: "(awhiteside@balsillieschool.ca)",
          desc:
            "Founder and Executive Director of the Health Economics and HIV/AIDS Research Division at the University of KwaZulu-Natal",
          img:
            "https://docs.aidspan.org/wl/?id=36GwStX5S3Ao7OeYlBiNXp2bsmgbgaYF",
        },
        {
          names: "ISAAC AWUONDO",
          position: "BOARD CHAIR",
          email: "(isaac.awuondo@cbagroup.com)",
          desc:
            "Group Managing Director, Commercial Bank of Africa, Based in Nairobi, Kenya.",
          img:
            "https://docs.aidspan.org/wl/?id=BvU25i9fMQLpXUUD0TgcoQLHGeAwzd4O",
        },
        {
          names: "Djalo",
          email: "(djalomele@yahoo.fr)",
          position: "BOARD Member",
          desc:
            "President of the Country Coordinating Mechanism in Niger, Based in Niamey, Niger.",
          img:
            "https://docs.aidspan.org/wl/?id=X97aIrA2uNvi1UlMaNE862iSEgYfWBBz",
        },
        {
          names: "Dr. Jesse Boardman Bump",
          email: "(bump@hsph.harvard.edu)",
          position: "BOARD Member",
          desc:
            "Executive director of the Takemi Program in International Health and lecturer on global health policy at the Harvard T.H. Chan School of Public Health.",
          img:
            "https://pkimgcdn.peekyou.com/932a0368033d136a8c1130738c513a4e.jpeg",
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
    justify-content: space-between;
    flex-direction: column;
  }

  #board .leader {
    width: 100%;
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
.desc {
  font-size: 20px;
}
.cores {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-right: solid 3px #24b3f5;
  background-color: #e9edf0;
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
