<template>
  <v-container class="my-1" id="article-container">
    <v-col cols="12" v-if="loading">
      <v-progress-linear color="orange accent-4" indeterminate rounded height="10"></v-progress-linear>
    </v-col>
    <v-row v-for="article in article_data" :key="article.nid">
      <v-col cols="12">
        <v-col id="articleSection">
          <v-flex md12>
            <p class="article-title">{{ article.title }}</p>
            <p
              class="second-article-title"
              v-if="article.article_second_title.field_article_secondary_title_value !== null"
            >{{ article.article_second_title.field_article_secondary_title_value }}</p>
          </v-flex>
          <v-row>
            <v-col cols="12" md="8">
              <v-chip class="ma-2" small color="secondary" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-feather</v-icon>
                </v-avatar>
                By
                {{ article.article_author.field_article_author_value }}
              </v-chip>

              <v-chip class="ma-2" small color="primary" text-color="white">
                <v-avatar
                  left
                  class="primary darken-4"
                >{{ article.article_number.field_article_number_value }}</v-avatar>
                <span v-for="type in article.article_types" :key="type.id">{{ type.name }}</span>
              </v-chip>
              <span class="mx-5 text-lg-right">{{ article.created | formatDate }}</span>
            </v-col>
            <v-col cols="5" md="1">
              <v-btn class="mr-2" icon @click="fonter" small outlined color="primary">
                <v-icon color="primary" small>mdi-format-font-size-increase</v-icon>
              </v-btn>
              <v-btn class="mr-2" icon small @click="fontSize--" outlined color="secondary">
                <v-icon color="secondary" small>mdi-format-font-size-decrease</v-icon>
              </v-btn>
            </v-col>
            <!-- start the social sharing icons -->
            <v-col cols="7" md="3" class="text-right">
              <social-sharing
                :url="currentlink"
                :title="article.title"
                :description="article.article_abstract.field_article_abstract_value"
                :quote="article.article_abstract.field_article_abstract_value"
                hashtags="aidspan,GFO,OFM, GlobalFund"
                twitter-user="aidspan"
                inline-template
              >
                <div id="social-icons">
                  <network network="whatsapp">
                    <i class="fa fa-whatsapp"></i>
                  </network>
                  <network network="twitter">
                    <i class="fa fa-twitter"></i>
                  </network>
                  <network network="email">
                    <i class="fa fa-envelope"></i>
                  </network>
                  <network network="facebook">
                    <i class="fa fa-facebook fa-5x"></i>
                  </network>

                  <network network="linkedin">
                    <i class="fa fa-linkedin"></i>
                  </network>
                </div>
              </social-sharing>
            </v-col>
            <!--- end of the social sharing icons -->
            <v-col cols="12">
              <v-card class="abstract" flat>
                <v-card-title>Abstract</v-card-title>
                <v-card-text>
                  <span v-html="article.article_abstract.field_article_abstract_value" class="text"></span>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12">
              <p class="content" v-bind:style="{fontSize: fontSize +'px'}">
                <span v-html=" article.article_content.field_article_content_value "></span>
              </p>
            </v-col>
          </v-row>

          <v-card class="pa-5" id="comments-box" flat>
            <v-row>
              <v-col cols="12">
                <v-card flat outlined class="mb-3">
                  <v-card-text>
                    <span class="subheading">Tags:</span>
                    <v-chip-group mandatory v-if="article.Tags !== 0">
                      <v-chip
                        v-for="tag in article.Tags"
                        :key="tag.tid"
                        color="primary"
                        @click="viewtag(tag.tid)"
                      >
                        {{
                        tag.name
                        }}
                      </v-chip>
                    </v-chip-group>
                    {{language}}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12 comments">
                <div v-if="article.comments.length > 0">
                  <v-badge
                    color="blue"
                    class="title mb-5 mt-5"
                    :content="article.__meta__.comments_count"
                  >
                    COMMENTS
                    <v-icon right color="primary">mdi-comment</v-icon>
                  </v-badge>
                  <v-card v-for="comment in article.comments" :key="comment.id" class="mb-5" flat>
                    <v-card-title>{{comment.user.name }}</v-card-title>
                    <v-card-text>{{comment.comment}}</v-card-text>
                    <v-card-actions>
                      <span class="px-3">{{comment.created_at | formatDateWords }}</span>
                    </v-card-actions>
                  </v-card>
                </div>
                <h3 v-else>No comments Yet, you can add one.</h3>

                <v-form ref="form" @submit.prevent="submit">
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12">
                        <p class="font-weight-black">Add Comment</p>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.first"
                          :rules="rules.name"
                          color="purple darken-2"
                          label="Names"
                          required
                          solo
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.names"
                          :rules="rules.email"
                          color="blue darken-2"
                          label="email"
                          required
                          solo
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea v-model="form.comment" solo color="teal">
                          <template v-slot:label>
                            <div>
                              comment
                              <small>(recommended)</small>
                            </div>
                          </template>
                        </v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-card-actions>
                    <v-btn text @click="resetForm" outlined>Cancel</v-btn>
                    <v-btn
                      :disabled="!formIsValid"
                      outlined
                      text
                      color="primary"
                      type="submit"
                    >Submit</v-btn>
                  </v-card-actions>
                </v-form>
              </v-col>
            </v-row>

            <v-snackbar v-model="snackbar" absolute top right color="success">
              <span>Thanks for your comment , highly appreciated</span>
              <v-icon dark>mdi-checkbox-marked-circle</v-icon>
            </v-snackbar>
          </v-card>
        </v-col>
      </v-col>
      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          color="secondary"
          dark
          bottom
          fixed
          small
          right
          fab
          @click.stop="issueview = !issueview"
        >
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-col cols="12" md="3">
        <v-row>
          <v-card flat v-for="issue in article.article_issue" :key="issue.nid" class="pa-5">
            <v-navigation-drawer
              fixed
              right
              bottom
              width="400"
              v-model="issueview"
              floating
              app
              class="navyside"
            >
              <v-list dense nav class="py-0" flat>
                <v-list-item>
                  <v-fab-transition>
                    <v-btn
                      v-show="!hidden"
                      color="secondary"
                      dark
                      bottom
                      small
                      class="visibility-button"
                      depressed
                      rounded
                      @click.stop="issueview = !issueview"
                    >
                      Hide Issue
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-fab-transition>
                </v-list-item>
                <v-list-item two-line :class="miniVariant && 'px-2'">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="issue.title"
                      class="issue-title-side font-weight-black title-2"
                    ></v-list-item-title>
                    <v-list-item-subtitle>{{issue.changed | formatDate}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon @click="downloadIssue(issue.title)">
                      <v-icon color="primary lighten-1">mdi-download</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
              <div class="bottom-articles">
                <v-card
                  v-for="article in issue.related_articles"
                  :key="article.nid"
                  class="my-2 article-summary"
                  flat
                  hover
                >
                  <v-card-title>
                    <p class="title-2" style="margin-bottom: -10px">{{ article.title }}</p>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      color="secondary"
                      text
                      @click="loading = true"
                      router
                      :to="{name: 'article', params: {article_id: article.nid}}"
                    >Read</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                      <v-icon>
                        {{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                        }}
                      </v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>
                      <v-card-text>
                        <span v-html="article.article_abstract.field_article_abstract_value"></span>
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </div>
            </v-navigation-drawer>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socialSharing from "vue-social-sharing";
import "font-awesome/css/font-awesome.min.css";
import DownloadIssue from "@/mixins/downloadIssue";

export default {
  props: ["article_id"],
  data() {
    const defaultForm = Object.freeze({
      names: "",
      comment: ""
    });

    return {
      //issue navigation
      issueview: null,
      hidden: false,
      loading: true,
      //font size of the text
      fontSize: 16,
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
      currentlink: ""
    };
  },

  mixins: [DownloadIssue],
  //props: ['article_id'],
  computed: {
    language() {
      return this.$store.state.activelang;
    },
    article_data() {
      return this.$store.state.article.data;
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
  mounted() {
    this.$store.dispatch("loadArticles", this.article_id);
    this.loading = false;
    this.currentlink = window.location.href;
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    viewtag(tagid) {
      return this.$router.push({ name: "articletags", params: { tid: tagid } });
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
    fonter() {
      if (this.fontSize < 80) {
        this.fontSize++;
      } else {
        this.fontSize = 15;
      }
    }
  },
  components: {
    "social-sharing": socialSharing
  },
  beforeDestroy() {
    this.issueview = false;
  }
};
</script>

<style lang="scss" scoped>
#sidebar-article {
  background-color: #00adef;
  width: 100%;
}
.navyside {
  box-shadow: 0 0 16px rgba(73, 89, 106, 0.1);
}
.article-summary {
  border-radius: 10px;
  margin: 10px;
  border: solid #6cd3fcad 1px;
}

#articleSection {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
#articleSection .article-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #00adef;
  text-transform: uppercase;
}

#articleSection .second-article-title {
  font-weight: bold;
  font-size: 18px;
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
  background: #42aeef;
  color: rgb(255, 255, 255);
  font-style: italic;
}

#articleSection .abstract .text {
  font-size: 16px;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

#articleSection .content {
  margin-top: 20px;
  color: #000000;
  font-weight: 400;
  box-shadow: 0 0 16px rgba(73, 89, 106, 0.1);
  border-radius: 16px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  overflow: hidden;
}

.bottom-articles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.comments {
  border-left: solid 4px rgb(40, 189, 248);
  border-radius: 10px;
  background-color: rgba(215, 213, 216, 0.178);
  height: 400px;
  overflow-y: scroll;
  padding: 20px;
}
.comments .title {
  color: #64b5f6;
  text-transform: uppercase;
  font-weight: bold;
}
.comments .number {
  font-weight: bold;
}
</style>
