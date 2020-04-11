<template>
  <div class="content">
    <v-container id="introRow">
      <v-row class="mb-2" no-gutters>
        <v-col cols="12">
          <p class="font-weight-black title blue--text lighten-2">
            {{ intro.title }}
          </p>
          <p class="intro">{{ intro.description }}</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="grant-portfolio">
        <v-col cols="12">
          <p class="text-center font-weight-black title orange--text">
            {{ grantPortfolio.title }}
          </p>
          <p>{{ grantPortfolio.description }}</p>
        </v-col>
        <v-col class="grant-cards">
          <v-card
            v-for="grant in grantsIntro"
            :key="grant.id"
            max-width="340"
            class="ma-5 card"
            height="220"
          >
            <v-card-title
              ><p class="text-center font-weight-black">
                {{ grant.title }}
              </p></v-card-title
            >
            <v-card-text
              ><p class="white--text">{{ grant.description }}</p></v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card flat class="problems">
            <v-tabs v-model="tab" background-color="primary" dark centered>
              <v-tab v-for="item in problems" :key="item.tab">
                {{ item.num }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in problems" :key="item.num">
                <v-card flat class="problemDesc">
                  <v-card-text
                    ><p>{{ item.description }}</p></v-card-text
                  >
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="5" class="donorsIntro elevation-10">
          <h1 class="white--text">{{ donorsIntrosTitle.title }}</h1>
          <v-card
            class="ma-2 donorIntroCards"
            v-for="don in donorsIntros"
            :key="don.title"
          >
            <v-card-title>
              <p>{{ don.title }}</p>
            </v-card-title>
            <v-card-text>
              <p>{{ don.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="7" id="data-analytics-glossary">
          <div class="cardsContainer">
            <div class="text-center display-1 ma-5">{{ dataAnalyticsGlossaryTitle.title }}</div>
            <v-row>
              <v-col
                cols="5"
                md="6"
                class="gloscard"
                v-for="glos in dataAnalyticsGlossary"
                :key="glos.title"
              >
                <v-card flat>
                  <v-card-title>
                    <p>{{ glos.title }}</p>
                  </v-card-title>
                  <v-card-text>
                    <p>{{ glos.description }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: {
        lang: "en",
        title: "DATA ANALYTICS",
        description: `Aidspan Has Developed A Series Of Data Tools To View, Analyze And Share Data From The Global Fund's Grant Portfolios. These Tools Are For Both Internal And External Users -- Anyone Who Has Interest In The Work Of The Global Fund To Fight AIDS, TB And Malaria. Data Are Displayed In An Intuitive Manner To Communicate Information Such As The Progress And Scope Of Different Grants, Classified By Country, Region, Principal Recipient And Other Categories. Aidspan Believes That Efficient Data Management By The Global Fund Will Help All Stakeholders To Better Understand The Policies, Programs And Grants In Place At The Global Level And In Their Countries. By Providing These Intuitive Tools That Paint Clear Pictures Of The Grants, Aidspan Is Providing A Platform Of Information That Will Help All Stakeholders At All Levels Ask Better-Informed Questions In Order To Participate In Constructive Dialogue About The Global Fund. Aidspan Is Continually Updating And Expanding Its Complement Of Tools To Help Improve Understanding Of The Global Fund. We See These Tools As Critical To Proving The Impact Of Our Work As The Leading Independent Monitor Of The Global Fund.`,
      },

      grantPortfolio: {
        title: "GRANTS PORTFOLIO | Methodology",
        lang: "en",
        description: `
                    This page explains the background and methodology used to create Aidspan's Global Fund Grants pages. Each Global Fund grant is divided into multiple 
                    3-month or 6-month periods. At the end of each period, the principal recipient (PR) sends to the Fund a “Progress Update” (PU) reporting on the PR’s 
                    performance during the period just completed, together with a “Disbursement Request” (DR) for a future period. The PU is supposed to be backed
                    by evidence that earlier disbursements have been effectively used and have achieved the results that were promised in the grant agreement.`,
      },

      grantsIntro: [
        {
          title: "BUDGET",
          description: `This is the cumulative amount of 
                        money that the Global Fund has agreed 
                        that the PR may – and should – spend
                        on activities funded by the grant.`,
          id: 1,
          lang: "en",
        },
        {
          title: "DISBURSEMENT",
          description: `This is the cumulative amount of money
                        that the Global Fund has disbursed
                        for expenditure by the PR on activities
                        to be funded by the grant.`,
          id: 2,
          lang: "en",
        },
        {
          title: "EXPENDITURE",
          description: `this is the cumulative amount of money
                        that the PR reports it has actually spent
                        on activities to be funded by the grant.`,
          id: 3,
          lang: "en",
        },
      ],

      //problems
      tab: null,
      problems: [
        {
          num: "Problem 1",
          description:
            "The cumulative expenditure by the PR under this grant is less than 75% of the agreed cumulative budget.",
          lang: "en",
        },
        {
          num: "Problem 2",
          description:
            "No disbursements have been made by the Global Fund for this grant for at least one year.",
          lang: "en",
        },
        {
          num: "Problem 3",
          description:
            "The cumulative expenditure by the PR is greater than the cumulative disbursements that have been made to the PR by the Global Fund, which means that the PR must be using money from some other source to finance activities that are supposed to be financed by the Global Fund.",
          lang: "en",
        },
        {
          num: "Problem 4",
          description:
            "The PR has not made (or at least has not reporting having made) any expenditure under this grant for at least one year",
          lang: "en",
        },
        {
          num: "Problem 5",
          description:
            "The Global Fund has disbursed less than 85% of the agreed budget.",
          lang: "en",
        },
      ],

      /// donors score intros
      donorsIntrosTitle: { lang: "en", title: "GLOBAL FUND DONORS | Glossary" },
      donorsIntros: [
        {
          lang: "en",
          title: "AMFm(Affordable Medicine Facility – malaria)",
          description:
            "a mechanism designed to expand access to affordable artemisinin combination therapies (ACT) for malaria through the private sector with subsidised drugs. Established as a pilot project in 2010 and to be discontinued as a stand-alone mechanism at the end of 2013.",
        },
        {
          lang: "en",
          title: "Contribution",
          description:
            "the actual amount of money a donor contributes to the Global Fund.",
        },
        {
          lang: "en",
          title: "Debt2Health",
          description:
            "a mechanism established by the Global Fund whereby a lending country forgives an amount of debt owed by a borrowing country on the condition that the borrowing country invest a portion of the amount in question, usually 50%, to its national programmes for HIV, TB or malaria, through the Global Fund. The investment can also be made to the national disease programmes of a third country.",
        },
        {
          lang: "en",
          title: "Economic classification",
          description:
            "a system used by the World Bank to classify economies (usually countries) by income level. Based on its gross national income per capita, every economy is classified as low-income, middle-income (subdivided into lower-middle and upper-middle), or high-income.",
        },
        {
          lang: "en",
          title: "Gross national income",
          description:
            "total value of goods and services produced within a country (i.e. its gross domestic product), together with income received from other countries (notably interest and dividends), less similar payments made to other countries. GNI per capita is the country’s GNI divided by the country’s population.",
        },
        {
          lang: "en",
          title: "Pledge",
          description:
            "the amount of money a donor says it will donate to the Global Fund.",
        },
      ],

      //// data analytics Glossary data
      dataAnalyticsGlossaryTitle: {
        lang: "en",
        title: "Data Analytics Glossary",
      },
      dataAnalyticsGlossary: [
        {
          title: "Type of PR",
          description: "type of Principal Recipient",
          lang: "en",
        },
        {
          title: "CS/PS",
          description: "Civil society/ private sector",
          lang: "en",
        },
        {
          title: "CS/FBO",
          description: "civil society/ faith-based organization",
          lang: "en",
        },
        {
          title: "NGO",
          description: "civil society/ nongovernmental organization",
          lang: "en",
        },
        {
          title: "CS/PS - PS",
          description: "civil society/private sector organization",
          lang: "en",
        },
        {
          title: "CS/PS - OTH",
          description: "civil society - other (ie non of the above)",
          lang: "en",
        },
        {
          title: "GOV - MOF",
          description: "Government - Ministry of Finance (or equivalent)",
          lang: "en",
        },
        {
          title: "GOV - MOH",
          description: "Government - Ministry of Health (or equivalent)",
          lang: "en",
        },
        {
          title: "MO - OTH",
          description: "Multilateral organization - other than UNDP",
          lang: "en",
        },
        {
          title: "MO - UNDP",
          description:
            "Multilateral organization - United National Development Programme",
          lang: "en",
        },
      ],
    };
  },
};
</script>

<style scoped>
#introRow {
  background: #f2fbff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  min-width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.intro {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.045em;
}

.grant-portfolio {
  background: #ffffff;
  margin-top: 30px;
  border: solid 1px #ff7a2b;
  border-radius: 20px;
}

.grant-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
}

.grant-cards .card {
  background: #ff7a2b;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  color: white;
}

.problemDesc {
  min-height: 80px;
  background: #dcf4ff;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  text-align: center;
}

.donorIntroCards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  align-self: center;
}

.donorsIntro {
  margin-top: 50px;
  background-color: #ff7a2b;
  border-radius: 20px;
  text-align: center;
}

#data-analytics-glossary {
  background: #ffffff;
  margin-top: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-items: center;
}

#data-analytics-glossary .gloscard {
  margin: 10px;
  max-width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

#data-analytics-glossary .gloscard:nth-child(even) {
  border-left: solid 4px #ff7a2b;
}
#data-analytics-glossary .gloscard:nth-child(odd) {
  border-left: solid 4px rgba(43, 183, 255, 0.46);
}
</style>
