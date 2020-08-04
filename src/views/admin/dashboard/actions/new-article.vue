<template>
  <div class="new-article">
    <v-form>
      <form-top :titleValue="title"></form-top>
      <v-row>
        <issue-number></issue-number>
        <v-col class="d-flex" cols="4">
          <v-select
            :items="loadedArticleTypes"
            v-model="type"
            item-value="name"
            item-text="name"
            outlined
            rounded
            dense
            label="Article Type"
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Article Number"
            type="number"
            v-model="number"
            outlined
            dense
            depressed
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Article main title" dense v-model="art_title" outlined rounded></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Article second title" dense v-model="secondTitle" outlined rounded></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="abstract"
            name="input-7-1"
            label="Article Abstract"
            value="Article Abstract"
            hint="article Abstract "
            auto-grow
            rows="3"
            dense
            outlined
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="content"
            name="input-7-1"
            label="Article Content"
            value="Article Content"
            auto-grow
            rows="10"
            outlined
            dense
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <article-tag v-model="tags"></article-tag>
          <file-upload />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn depressed color="primary" @click="saveArticle">SAVE ARTICLE</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import FileUpload from "@/components/tools/Upload.vue";
import formtop from "@/components/tools/formtops.vue";
import articleTag from "@/components/tools/articletags.vue";
import issueNumber from "@/components/tools/issuenumber.vue";
import { mapGetters } from "vuex";
//import articleType from "@/components/tools/articleType.vue";
export default {
  name: "newArticle",
  components: {
    "form-top": formtop,
    "article-tag": articleTag,
    //"article-type": articleType,
    "issue-number": issueNumber,
    "file-upload": FileUpload,
  },
  data: () => {
    return {
      title: "Create New Article",
      art_title: "",
      secondTitle: "",
      tags: [],
      number: "",
      content: "",
      abstract: "",
      issue: {},
      type: {},
      language: "",
      published: false,
    };
  },
  computed: {
    ...mapGetters(["loadedArticleTypes"]),
  },
  mounted() {
    return this.$store.dispatch("fetchtypes");
  },
  methods: {
    saveArticle() {
      const articleData = {
        title: this.art_title,
        second_title: this.secondTitle,
        tags: this.tags,
        issue_id: this.issue.id,
        content: this.content,
        abstract: this.abstract,
        language: this.language,
        number: this.number,
        published: this.published,
      };

      console.log(articleData);
    },
  },
};
</script>

<style lang="scss" scoped>
.new-article {
  background: #ffffff;
  border: solid 1px #4ac7ff;
  box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px;
}
</style>