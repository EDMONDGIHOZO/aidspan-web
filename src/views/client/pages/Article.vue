<template>
  <v-container class="my-2">
    <v-row>
      <v-col id="articleSection" v-bind:class="fontAdjust">
        <v-flex md12>
          <p class="article-title">{{ article.title }}</p>
          <p class="second-article-title">{{ article.secondTitle }}</p>
        </v-flex>
        <v-row>
          <v-flex md12 xs12 class="authoring">
            <v-chip class="ma-2" color="secondary" text-color="white">
              <v-avatar left>
                <v-img
                  class="elevation-6 "
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-avatar>
              {{ article.author }} | {{ article.date }}
            </v-chip>
            <v-chip class="ma-2" color="primary" text-color="white">
              <v-avatar left class="primary darken-4">
                {{ article.number }}
              </v-avatar>
              {{ article.type }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-2" @click="bigger = !bigger">
              <v-icon>mdi-format-font-size-increase</v-icon>
            </v-btn>
            <v-btn icon class="mr-2" @click="decreaseFont">
              <v-icon>mdi-format-font-size-decrease</v-icon>
            </v-btn>
            |
            <div class="social">
              <v-btn icon color="#1873EC">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon color="#2571AE">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon color="green">
                <v-icon>mdi-whatsapp</v-icon>
              </v-btn>
              <v-btn icon color="#379DEC">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </div>
          </v-flex>
          <v-card md12 class="abstract" flat>
            <v-card-title>
              Abstract
            </v-card-title>
            <v-card-text>
              {{ article.abstract }}
            </v-card-text>
          </v-card>
          <v-html class="content">
            {{ article.content }}
          </v-html>
          <v-card flat>
            <v-card-text>
              <span class="subheading">Tags: </span>
              <v-chip-group
                active-class="deep-purple--text text--accent-4"
                mandatory
              >
                <v-chip v-for="tag in article.tags" :key="tag.title">{{
                  tag.title
                }}</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
          <v-card flat width="100%">
            <v-divider></v-divider>
            <P class="font-weight-regular display-1">COMMENT </P>
            <v-snackbar v-model="snackbar" absolute top right color="success">
              <span>Thanks for your comment , highly appreciated </span>
              <v-icon dark>mdi-checkbox-marked-circle</v-icon>
            </v-snackbar>
            <v-form ref="form" @submit.prevent="submit">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.first"
                      :rules="rules.name"
                      color="purple darken-2"
                      label="Names"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.names"
                      :rules="rules.email"
                      color="blue darken-2"
                      label="email"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="form.comment" color="teal" outlined>
                      <template v-slot:label>
                        <div>comment <small>(recommended)</small></div>
                      </template>
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-btn text @click="resetForm">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!formIsValid"
                  text
                  color="primary"
                  type="submit"
                  >Submit</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-card id="sidebar-article" width="100%">
        <v-col>
          <v-list dense nav class="py-0" flat>
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-content>
                Related Articles from:
                <v-list-item-title
                  v-text="issue.title"
                  class="issue-title-side"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-text="issue.iss_date"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-download</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <div class="bottom-articles">
            <v-card
              v-for="article in relatedArticles"
              :key="article.art_id"
              class="my-2"
              hover
              md6
              xs12
              sm6
              lg3
            >
              <v-card-title>
                <p class="body-2" style="margin-bottom: -10px">
                  {{ article.art_title }}
                </p>
              </v-card-title>
              <v-card-actions>
                <v-btn text>Share</v-btn>
                <v-btn color="purple" text href="/article">
                  Read
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    {{ article.art_abstract }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      names: "",
      comment: ""
    });

    return {
      //font size of the text
      bigger: false,
      normal: false,
      // end
      form: Object.assign({}, defaultForm),
      snackbar: false,
      rules: {
        email: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ]
      },
      defaultForm,
      // id: this.$route.params, this will come from the url
      show: false,
      issue: {
        title: "issue 324",
        issueNumber: 324,
        iss_id: "fadfhs",
        iss_date: "12 mar 2020",
        link: "/download"
      }
    };
  },
  computed: {
    article() {
      return this.$store.state.article;
    },
    relatedArticles() {
      return this.$store.state.articles;
    },
    formIsValid() {
      return this.form.names;
    },
    fontAdjust: function() {
      return {
        increase: this.bigger,
        decrease: this.normal
      };
    }
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    }
  }
};
</script>

<style lang="scss" scoped>
#sidebar-article {
  background: #f2fbff;
  box-shadow: 2px 0px 6px rgba(98, 212, 255, 0.48);
}
#sidebar-article .issue-title-side {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
}

#articleSection .article-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #00adef;
  text-transform: uppercase;
}

#articleSection .second-article-title {
  font-family: Open Sans;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  color: #000000;
}

#articleSection .authoring {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
}

#articleSection .authoring .social {
  justify-self: center;
}

#articleSection .abstract {
  text-align: left;
  text-transform: capitalize;
  background: rgba(63, 192, 252, 0.096);
  font-style: italic;
  color: #000000;
}

#articleSection .content {
  margin-top: 20px;
  color: #000000;
  padding: 10px;
}

.bigger {
  font-size: 30px;
}

.normal {
  font-size: 14px;
}

.bottom-articles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
