<template>
  <v-container class="pa-5">
    <v-row id="team"></v-row>
    <!-- Start aidspan about us test -->
    <v-row class="my-5">
      <v-col cols="3" id="abouttext">
        <p class="font-weight-black display-2 appname">AIDSPAN</p>
        <v-caption class="white--text caption"
          >{{$t('slogan')}}
        </v-caption>
      </v-col>

      <v-col cols="9" id="aboutus-container">
        <v-card flat>
          <v-card-title class="title">{{$t('whatwedo.title')}}</v-card-title>
          <v-card-text>{{$t('whatwedo.content')}}</v-card-text>
        </v-card>
        <v-card class="my-5" flat>
          <v-card-title class="title">{{$t('whatweare.title')}}</v-card-title>
          <v-card-text
            ><p class="body-2">
              {{$t('whatweare.content')}}
            </p></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>

    <!--- starting the tabs of core values and mission and vision section -->
    <v-row style="margin-top:50px;">
      <v-col cols="12" md="8">
        <v-tabs horizontal>
          <v-tab
            v-for="value in coreValues"
            :key="value.id"
            id="tabstitle"
            tab-reverse-transition
          >
            <p>{{ value.title }}</p>
          </v-tab>

          <v-tab-item v-for="value in coreValues" :key="value.id">
            <v-card flat id="tabcontainer" height="265px">
              <v-card-text>
                <p class="desc">
                  {{ value.desc }}
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
      <!-- end of core values-->
      <!-- start of the mission and vision -->
      <v-col cols="12" md="4" class="mission-vision">
        <v-card flat >
            <v-card-title class="white-text">
                {{$t('mission.title')}}
            </v-card-title>
            <v-card-text>
                 {{$t('mission.short')}}
            </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title class="white-text">
                {{$t('vision.title')}}
            </v-card-title>
            <v-card-text>
                 {{$t('vision.content')}}
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- end of the visino and mission -->
    <!-- start policy analysis --->
    <v-row>
      <v-col cols="12">
        <v-card color="primary" flat shaped id="policy">
          <v-card-title>
          <p class="title">POLICY ANALYSIS</p>
          </v-card-title>
          <v-card-text>
            <p class="font-weight-black">
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
        <v-card class="elevation-15">
          <v-card-title class="title">
            <p class="display-1">OUR HISTORY</p>
          </v-card-title>
          <v-card-text>
            <p class="title">
              Aidspan is currently focused exclusively on the Global Fund and
              its implementing countries. Since its founding in 2002, Aidspan
              has contributed extensively to improving knowledge and insight
              into this multilateral health financing mechanism. Selected
              highlights of Aidspan's work include:
            </p>
          </v-card-text>
        </v-card>
        <v-timeline>
          <v-timeline-item
            v-for="year in achieves"
            :key="year.year"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <v-card class="elevation-14">
              <v-card-text>
                {{ year.describe }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <!-- end of the history timeline  -->
    <v-divider></v-divider>
    <!-- start showing the board of directorys  -->
    <v-row>
      <v-col cols="12" id="board">
        <p class="display-1 font-weight-black secondary--text">
          BOARD OF DIRECTORS
        </p>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item v-for="director in directors" :key="director.name">
              <v-card class="ma-3" max-width="344">
                <v-img :src="director.img" height="320px" width="344"></v-img>
                <v-card-title>
                  <p class="title">
                    {{ director.names }}
                  </p>
                </v-card-title>
                <v-card-actions>
                  <v-list-item>
                    <v-row align="center" justify="end">
                      {{ director.position }}
                      <v-spacer> </v-spacer>
                      <v-icon class="mr-1">mdi-twitter</v-icon>
                      <v-icon class="mr-1">mdi-email</v-icon>
                      <v-icon class="mr-1">mdi-linkedin</v-icon>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
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
          describe:
            "Aidspan launched Global Fund Observer (GFO), rapidly establishing it as the definitive source of news, analysis and commentary about the Global Fund."
        },
        {
          color: "green",
          year: "March, 2004",
          describe:
            "Aidspan published its first “Guide to Applying to the Global Fund”. The guide has been updated annually since, reflecting the evolution of the Fund itself."
        },
        {
          color: "pink",
          year: "March, 2004",
          describe:
            "In the first two years of the existence of the Global Fund, Aidspan and two partners developed and refined the Equitable Contributions Framework : an equation that proposed the optimal size of the contribution from each donor country to the Fund based on its relative wealth. This approach was eventually adopted by a number of advocacy groups and by the Fund itself, in a modified form."
        },
        {
          color: "amber",
          year: "May, 2005",
          describe:
            "The Global Fund launched an in-depth external audit of Secretariat procedures after Aidspan wrote a confidential memo to the chair of the Global Fund Board raising certain concerns."
        },
        {
          color: "orange",
          year: "August, 2005",
          describe:
            "The Global Fund temporarily suspended all grants to Uganda after confirming allegations of corruption raised by a GFO reader and shared with the Fund by Aidspan."
        },
        {
          color: "cyan",
          year: "January, 2007",
          describe:
            "Aidspan convened a round table on problems faced by Global Fund recipients in accessing technical assistance, attended by the heads of UNAIDS, PEPFAR, the WHO and World Bank AIDS programmes, and other global health leaders."
        },
        {
          color: "green",
          year: "May, 2007",
          describe:
            "Aidspan moved its headquarters from New York, US, to Nairobi, Kenya."
        },
        {
          color: "pink",
          year: "January, 2009",
          describe:
            "Aidspan developed its Strategic Plan for 2010-2013, helping to drive an increase in its annual operating budget that led to the expansion of its programs and staff."
        },
        {
          color: "amber",
          year: "March, 2009",
          describe:
            "Uganda jailed the first two of four officials for Global Fund-related corruption that was first reported by Aidspan."
        },
        {
          color: "orange",
          year: "April, 2012",
          describe:
            "Aidspan provided testimony to a UK parliamentary committee in which it said that the Global Fund could not afford to have a second year like 2011, and might be permanently damaged if it did."
        },
        {
          color: "green",
          year: "May, 2007",
          describe:
            "Aidspan moved its headquarters from New York, US, to Nairobi, Kenya."
        },
        {
          color: "pink",
          year: "January, 2015",
          describe:
            "Aidspan developed its third strategic plan, covering the period 2016-2018."
        }
      ],
      // end of timeline //
      coreValues: [
        {
          desc:
            "Aidspan aims to use resources towards results through a proactive and thoughtful approach to events and stakeholders.",
          id: "ffighs",
          title: "EFFECTIVENESS"
        },
        {
          desc:
            "Aidspan aims to deliver the most pertinent content when it is most useful to its audiences through proactive research, prospective analysis, and prompt reporting.",
          id: "ffighsDSREW3",
          title: "TIMELINESS"
        },
        {
          desc:
            "Aidspan promotes and holds itself to the highest standards of honesty, accuracy, truthfulness and ethical conduct.",
          id: "ffighsDSRESSW3",
          title: "INTEGRITY"
        },
        {
          desc:
            "Aidspan values stakeholder engagement which leads to ownership of the grant and improved results. Aidspan embraces cooperation in its work, valuing an integrated, interdisciplinary approach to research, analysis, and publication.",
          id: "ffighsDSRESSsdwW3",
          title: "COLLABORATION"
        },
        {
          desc:
            "Aidspan promotes full accountability for the use of the Global Fund resources at the global and country levels. Aidspan takes full responsibility for the content it publishes, paying close attention to its sources, as well as listening to its audience, to respond as best as it can to questions or criticism, including correcting errors or mistakes should they occur.",
          id: "fdwsfighsDSRESSsdwW3",
          title: "ACCOUNTABILITY"
        }
      ],
      //core values
      directors: [
        {
          names: "Ida Hakizinka",
          position: "EXECUTIVE DIRECTOR",
          img: require("@/assets/images/common/board/ida.jpg")
        },
        {
          names: "Alan Whiteside",
          position: "BOARD CHAIR",
          img: 'https://docs.aidspan.org/wl/?id=YhTbOclCgKCrLQfdKECJ12M6fA900Gle'
        },
        {
          names: "ISAAC AWUONDO",
          position: "BOARD CHAIR",
          img: 'https://docs.aidspan.org/wl/?id=aazZXluCOo8zJh8nqPEeLauoSifzTAGb'
        },
        {
          names: "Djalo",
          position: "BOARD CHAIR",
          img: 'https://docs.aidspan.org/wl/?id=cGkX28dT7hAocIbRky6ZrxMW5gBxD6ZJ'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#team {
  height: 160px;
  background-image: url("~@/assets/images/common/autumn.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  border-radius: 5px;

}
.mission-vision{
    border: solid #1ba4e4 1px;
    color: 'white';
    border-radius: 20px;
}

</style>
