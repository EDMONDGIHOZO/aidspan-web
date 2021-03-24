<template>
  <section class="introduction">
    <div class="container">
      <v-row wrap v-if="language === 'fr'">
        <v-col cols="12" md="6">
          <div class="definition">
            <p>
              {{ definition }}
            </p>
          </div>

          <ul class="intro-list">
            <li v-for="(tit, index) in titles" :key="index">
              <h4>{{ tit }}</h4>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="6">
          <div class="cont">
            <p>{{ intro }}</p>
            <ul class="right-intro-list">
              <li v-for="(tit, index) in rightTitles" :key="index">
                <h4>{{ tit }}</h4>
              </li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12">
          <div class="section-title">
            <h2>{{ resTitle }}</h2>
          </div>
        </v-col>

        <!-- <v-col cols="12" md="3" v-for="(res, index) in resources" :key="index">
          <v-card height="325" rounded outlined>
            <v-card-title color="primary">
              {{ res.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p
                v-for="(cont, index) in res.pieces"
                :key="index"
                class="font-weight-bold"
              >
                {{ cont }}
              </p>
            </v-card-text>
          </v-card>
        </v-col> -->
        <v-col cols="12">
          <div class="articles">
            <Articles />
          </div>
          
        </v-col>
      </v-row>
      <v-row wrap v-else class="strategy">
        <v-col cols="12">
          <v-card flat>
            <v-card-text class="text-center">
             <span class="display-3">COMING SOON </span>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="info"  depressed router href="/fr/c/strategy"
                >Read in French</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import Articles from "@/components/pages/strategyArticles.vue";
export default {
  name: "policy",
  components: {
    Articles,
  },
  data() {
    return {
      definition:
        "2020 et 2021 sont des années cruciales dans la définition de la nouvelle stratégie du Fonds mondial, qui couvrira une période charnière dans l’atteinte des objectifs de 2030. Pour répondre à cet ambition, le Fonds mondial a mis en place un processus de large consultation auprès de ses partenaires et des populations récipiendaires. Pour ce faire, le Fonds mondial dispose de nombreuses enceintes dans lesquelles les axes de réflexion stratégiques sont discutés:",
      titles: [
        "Comité de la stratégie",
        "Conseil d ‘Administration du FM",
        "Forum des partenariats",
        "Consultation en ligne sur le site internet du Fonds mondial",
      ],

      rightTitles: [
        "Evaluations thématique conduites par le TERG (sur les user fees, sur la politique STC, sur le modèle de partenariat, le RSS)",
        "Evaluation stratégique à mi-parcours de la stratégie 2017-2022",
        "Etudes lancées par l’OIG",
        "Rapports du TRP pour l’année 2020",
      ],
      resTitle: "RESSOURCE STRATEGIQUE DU FOND MONDIAL",
      resources: [
        {
          title: "Developement de la strategie",
          pieces: [
            "Documents du processus (FM)",
            "Analyse de contribution de tous les partenaires",
            "Document discute en commites",
            "Articles d AIDSPAN",
          ],
        },
        {
          title: "Documents d analyse des resultats/tendances",
          pieces: [
            "Evaluation du TERG",
            "Rapports de l'OIG",
            "Articles d AIDSPAN",
            "Articles d'autres",
            "partenaires (OMS, UNUSIDA, RMB , Stop TB Partnership)",
          ],
        },
        {
          title: "Ressources strategiques externes",
          pieces: [
            "Plans strategiques des organisations gouvernomentales regionales en matiere de sante (UA, LAC) Cadres (RSS, RSI, chargement climatique) ",
            "Articles de presse Etudes",
          ],
        },
        {
          title: "Ressources audio visuelles",
          pieces: [
            "Video de partenaires (OMS, Stop TB, RBM, ONUSIDA, FRONTLINE Aids) Interviews aux participants au Forum des partenaires (Video et audio) Liens vers des webinaires",
            "Articles de presse Etudes",
          ],
        },
      ],

      intro:
        "De nombreux documents sont produits au cours de ces débats, dont certains sont disponibles sur le site internet du Fonds mondial mais pas tous, et la langue officielle reste l’anglais. Par ailleurs, plusieurs documents clés ont été produits ces derniers mois, qui éclairent l’efficacité et les performances obtenues grâce à la stratégie actuelle :",
    };
  },

  computed: {
    language() {
      const current = this.$i18n.locale;
      return current;
    },
  },
};
</script>

<style scoped>
.definition {
  border-left: #ff7a2b 4px solid;
  margin: 15px auto;
  padding-left: 14px;
}

.intro-list {
  padding: auto;
  box-sizing: border-box;
}
.intro-list li {
  list-style: none;
  padding: 14px;
  background: #ff7a2b;
  border-radius: 6px;
  color: white;
  margin-bottom: 10px;
  margin-left: -22px;
}
.right-intro-list li {
  list-style: none;
  padding: 10px;
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-left: -22px;
  color: black;
}

.section-title {
  margin: 10px;
}

.cont {
  background: #ff7a2b;
  border-radius: 6px;
  padding: 14px;
  margin-top: 33px;
  color: white;
}

.strategy {
  min-height: 100vh;
}

.articles {
  background: linear-gradient(#00AEEF, #FF7A2B);
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0px 4px 19px rgba(43, 183, 255, 0.46);
}
</style>