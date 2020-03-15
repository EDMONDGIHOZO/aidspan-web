import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const editorial = new Vuex.Store({
  state: {
    //current issue number
    issues: {
      iss_id: 341,
      iss_number: 3412,
      iss_date: "12 march 2020",
      iss_desc: "the new issue from aidspan staff",
      lang: "en",
      timestamp: "1580733020"
    },
    //current articles must have the relation with the current issue above
    articles: {
      parent_issue: 345,
      article_title: "first GFO Article in the database",
      article_second_title: "yes it is the first",
      article_abstract: "very first abstract",
      article_content: "very very first article content",
      article_tags: [
        {
          tagname: "corona",
          tagUrl: "/corona"
        },
        {
            tagname: "pendemic",
            tagUrl: "/corona"
          }
      ],
      article_author: { author_id: 23 , author_url: "/id" },
      article_language: "en",
      article_type: { type_name: "things", type_url: "/things" }
    }
  }
});
