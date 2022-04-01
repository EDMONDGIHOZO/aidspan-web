<template>
  <v-container class="my-1" id="article-container">
    <v-row v-if="!loading">
      <v-col cols="12">
        <v-col id="articleSection">
          <v-flex md="12">
            <p class="article-title">{{ article.title }}</p>

            <p
              class="second-article-title"
              v-if="article.article_second_title !== null"
            >
              {{
                article.article_second_title.field_article_secondary_title_value
              }}
            </p>
            <p v-else>-</p>
          </v-flex>
          <v-row>
            <v-col cols="12" md="8">
              <v-chip class="ma-2" small color="secondary" text-color="white">
                <span class="font-weight-bold">By:</span>
                <span v-if="article.article_author !== null" class="mx-2">{{
                  article.article_author.field_article_author_value
                }}</span>
                <span v-else>not found</span>
              </v-chip>

              <v-chip class="ma-2" small color="primary" text-color="white">
                <v-avatar
                  left
                  class="primary darken-4"
                  v-if="article.article_number !== null"
                  >{{
                    article.article_number.field_article_number_value
                  }}</v-avatar
                >
                <span v-if="article.article_types !== null">{{
                  article.article_types[0].name
                }}</span>
                <span v-else> no type found </span>
              </v-chip>

              <span class="mx-5 text-lg-right">
                <small class="font-weight-bold">{{
                  article.created | formatDate
                }}</small>
              </span>
            </v-col>
            <!-- start the social sharing icons -->
            <v-col cols="7" md="4" class="text-right">
              <social-sharing
                :url="currentlink"
                :title="article.title"
                :description="shareable"
                :quote="shareable"
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
                    <i class="fa fa-facebook"></i>
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
                <v-card-title class="black--text">{{
                  $t("abstract")
                }}</v-card-title>
                <v-card-text v-if="article.article_abstract !== null">
                  <span
                    v-html="
                      article.article_abstract.field_article_abstract_value
                    "
                    class="text"
                    ref="abs"
                  ></span>
                </v-card-text>
                <span v-else> no abstract available now</span>
              </v-card>
            </v-col>

            <v-col cols="12" class="content">
              <v-row wrap>
                <v-col cols="12" class="adjuster">
                  <v-btn
                    class="mr-2"
                    @click="fonter"
                    small
                    color="primary"
                    icon
                  >
                    <v-icon color="primary" small
                      >mdi-format-font-size-increase</v-icon
                    >
                  </v-btn>
                  <v-btn
                    class="mr-2"
                    small
                    @click="fontSize--"
                    color="secondary"
                    icon
                  >
                    <v-icon color="secondary" small
                      >mdi-format-font-size-decrease</v-icon
                    >
                  </v-btn>
                </v-col>
              </v-row>
              <p
                v-bind:style="{ fontSize: fontSize + 'px' }"
                class="article-contents"
              >
                <span
                  v-html="article.article_content.field_article_content_value"
                  v-if="article.article_content !== null"
                >
                </span>
              </p>
            </v-col>
          </v-row>

          <v-row wrap class>
            <v-col cols="12">
              <v-card flat class="feedback">
                <v-card-text>
                  <p>Feedback</p>
                  <v-btn
                    icon
                    @click="like"
                    class="mr-2 ml-3"
                    small
                    color="primary"
                    v-if="!hidebutton"
                  >
                    <v-icon color="primary">mdi-thumb-up-outline</v-icon>
                  </v-btn>
                  <small class="font-weight-bold orange--text lighten-3"
                    >{{ likes }} Likes</small
                  >

                  <v-btn
                    icon
                    @click="dislike"
                    class="mr-2 ml-5"
                    small
                    color="info"
                  >
                    <v-icon color="warning">mdi-thumb-down-outline</v-icon>
                  </v-btn>
                  <small class="font-weight-bold red--text lighten-3"
                    >{{ dislikes }} Dislikes</small
                  >
                  <small class="font-weight-bold white--text lighten-3 mx-5"
                    ><v-icon left small color="white">mdi-eye</v-icon
                    >{{ views }}</small
                  >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-card class="pa-5" id="comments-box" flat>
            <v-row>
              <v-col cols="12">
                <v-card flat outlined class="mb-3">
                  <v-card-text>
                    <span class="subheading">Tags:</span>
                    <v-chip-group mandatory v-if="article.Tags !== null">
                      <v-chip
                        v-for="tag in article.Tags"
                        :key="tag.tid"
                        color="primary"
                        @click="viewtag(tag.tid)"
                      >
                        {{ tag.name }}
                      </v-chip>
                    </v-chip-group>
                    {{ language }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12 comments">
                <div v-if="article.comments.length > 0">
                  <v-badge
                    color="blue"
                    class="title mb-5 mt-5"
                    :content="comments_count"
                  >
                    COMMENTS
                    <v-icon right color="primary">mdi-comment</v-icon>
                  </v-badge>
                  <v-card
                    v-for="comment in comments"
                    :key="comment.id"
                    class="mb-5"
                    flat
                  >
                    <v-card-title>{{ comment.user.name }}</v-card-title>
                    <v-card-text>{{ comment.comment }}</v-card-text>
                    <v-card-actions>
                      <span class="px-3">{{
                        comment.created_at | formatDateWords
                      }}</span>
                    </v-card-actions>
                  </v-card>
                </div>
                <h3 v-else>No comments Yet, Please add one.</h3>

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
                          label="Name (optional)"
                          required
                          solo
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.names"
                          :rules="rules.email"
                          color="blue darken-2"
                          label="Email"
                          required
                          solo
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea v-model="form.comment" solo color="teal">
                          <template v-slot:label>
                            <span>Comment</span>
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
                      >Submit</v-btn
                    >
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
          rounded
          depressed
          @click.stop="issueview = !issueview"
        >
          <v-icon left color="white">mdi-chevron-left</v-icon>
          <strong>Show Issue</strong>
        </v-btn>
      </v-fab-transition>
      <v-col cols="12" md="3">
        <v-row>
          <v-card
            flat
            v-for="issue in article.article_issue[0].related_articles"
            :key="issue.nid"
            class="pa-5"
          >
            <v-navigation-drawer
              fixed
              right
              bottom
              width="400"
              v-model="issueview"
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
                      <v-icon color="white">mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-fab-transition>
                </v-list-item>
                <v-card outlined>
                  <v-card-text>
                    <h3 class="text-center">
                      {{ article.article_issue[0].title }}
                    </h3>
                  </v-card-text>
                </v-card>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="issue.title"
                      class="issue-title-side font-weight-black title-2"
                    ></v-list-item-title>
                    <v-list-item-subtitle>{{
                      issue.created | formatDate
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn
                      icon
                      @click="downloadIssue(issue.title, issue.language)"
                    >
                      <v-icon color="primary lighten-1">mdi-download</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
              <div class="bottom-articles">
                <v-card
                  v-for="(article, index) in issue_articles"
                  :key="index"
                  class="my-2 article-summary"
                  flat
                  hover
                >
                  <div class="side-title">
                    <v-chip color="primary">
                      {{ article.article_number.field_article_number_value }}
                    </v-chip>
                    <strong>{{ article.title }}</strong>
                  </div>
                  <v-card-actions>
                    <v-btn
                      color="secondary"
                      text
                      @click="loading = true"
                      router
                      :to="{
                        name: 'article',
                        params: { article_id: article.nid },
                      }"
                      >Read</v-btn
                    >
                    <v-spacer></v-spacer>
                    <!-- <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                          @click="show = !show"
                          icon
                        >
                          <v-icon>
                            {{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Show Related Issue</span>
                    </v-tooltip> -->
                  </v-card-actions>
                  <!-- <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>
                      <v-card-text>
                        <span v-html="abstracts"></span>
                      </v-card-text>
                    </div>
                  </v-expand-transition> -->
                </v-card>
              </div>
            </v-navigation-drawer>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <v-sheet color="white" class="pa-3" min-width="900">
          <v-skeleton-loader class="mx-auto" type="article"></v-skeleton-loader>
          <v-skeleton-loader
            class="mx-auto"
            type="paragraph"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="mx-auto"
            type="paragraph"
          ></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socialSharing from "vue-social-sharing";
import "font-awesome/css/font-awesome.min.css";
import DownloadIssue from "@/mixins/downloadIssue";
import Api from "@/services/Api";
export default {
  props: ["article_id"],
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  data() {
    const defaultForm = Object.freeze({
      names: "",
      comment: "",
    });
    return {
      //issue navigation
      issue_articles: [],
      issueview: false,
      hidden: false,
      loading: true,
      article: [],
      /// article data
      main_title: "",
      second_title: "",
      author: "",
      type: "",
      article_date: "",
      abstracts: "",
      contents: "",
      tags: [],
      number: "",
      article_type: "",
      comments: [],
      comments_count: "",
      nid: "",
      shareable: "",
      article_issue: [],
      /** end of article data */
      hidebutton: false,
      likes: 0,
      dislikes: 0,
      errors: [],
      //font size of the text
      fontSize: 16,
      // end
      form: Object.assign({}, defaultForm),
      snackbar: false,
      rules: {
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
      },
      defaultForm,
      // id: this.$route.params, this will come from the url
      show: false,
      currentlink: "",
      user_inf: {},
      views: 0,
    };
  },
  mixins: [DownloadIssue],
  //props: ['article_id'],
  computed: {
    language() {
      return this.$store.state.activelang;
    },
    formIsValid() {
      return this.form.names;
    },
    fontAdjust: function () {
      return {
        increase: this.bigger,
        decrease: this.normal,
      };
    },
  },

  metaInfo() {
    return {
      title: `${this.main_title} - #GFO & OFM Articles`,
      meta: [
        {
          name: "description",
          content: this.abstracts.slice(0, 120),
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: "charset",
          content: "UTF-8",
        },
        {
          name: "http-equiv",
          content: "Content-Type",
        },
        {
          name: "content",
          content: "text/html",
        },
      ],
    };
  },

  created() {
    Api()
      .get(`Articles/${this.article_id}`)
      .then((response) => {
        if (response.statusText === "OK") {
          this.article = response.data.article;
          this.loading = false;
          this.issue_articles =
            response.data.article.article_issue[0].related_articles.sort(
              function (a, b) {
                return (
                  a.article_number.field_article_number_value -
                  b.article_number.field_article_number_value
                );
              }
            );

          this.shareable = this.removeSpecials(
            response.data.article.article_abstract.field_article_abstract_value
          );
          ///end of article data
          this.views = response.data.views[0].v;
          document.title = response.data.article.title;
        }

        this.currentlink = window.location.href;
        ////end of
        if (response.data.likes !== null) {
          this.likes = response.data.article.likes.likes;
        }
        ///-----
      })
      .then(this.userInformation())
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    // async userInformation() {
    //   await Axios.get(
    //     `https://api.ipregistry.co/?key=${urls.ipregistrykey}`
    //   ).then((res) => {
    //     const data = {
    //       ip: res.data.ip,
    //       page_title: this.article.title,
    //       country: res.data.location.country.name,
    //       city: res.data.location.country.capital,
    //       node_id: this.article_id,
    //     };

    //     // send info to the server
    //     this.$store.dispatch("webvisit", data);
    //   });
    // },

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
    },
    like() {
      const formdata = {
        article_nid: this.article_id,
      };
      this.hidebutton = true;
      this.likes += 1;
      Api().post("article-like", formdata);
      localStorage.setItem("liked", true);
    },
    dislike() {
      const formdata = {
        article_nid: this.article_id,
      };
      this.hidebutton = true;
      this.dislikes += 1;
      Api().post("article-dislike", formdata);
    },
    removeSpecials(str) {
      let parser = new DOMParser().parseFromString(str, "text/html");
      return parser.documentElement.textContent;
    },
  },
  components: {
    "social-sharing": socialSharing,
  },
  beforeDestroy() {
    this.issueview = false;
  },
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
  width: 100%;
}
#articleSection {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
#articleSection .article-title {
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #00adef;
  text-transform: uppercase;
}
#articleSection .second-article-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  /* identical to box height */
  color: #424242;
  font-style: italic;
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
  background: #42aeef;
  font-style: italic;
}
.abstract .text {
  color: #000000;
  font-weight: bold;
  line-height: 25px;
}
.abstract .text a {
  color: #000000;
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
.adjuster {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
i {
  color: red !important;
}
.feedback {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.side-title {
  margin: 10px;
  display: flex;
  gap: 10px;
  justify-items: center;
  align-items: center;
}
</style>
