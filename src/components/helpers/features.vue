<template>
  <v-container id="features-container">
    <div class="boxi-1">
      <div class="sticks">
        <h4 class="text-center my-4">ARTICLE TYPES</h4>
      </div>
      <article-types />
    </div>
    <div class="boxi-2">
      <div class="sticks">
        <h4 class="text-center my-4">LATEST TAGS</h4>
      </div>
      <tags />
    </div>
  </v-container>
</template>

<script>
import tags from "@/views/client/pages/tagssidebar.vue";
import Articletypes from "@/components/helpers/articletypes.vue";
export default {
  name: "features",
  components: {
    tags,
    "article-types": Articletypes
  },
  data() {
    return {
      searchbtn: false,
      searchtype: "",
      searchauth: ""
    };
  },
  computed: {
    filteredauthors() {
      return this.authors.filter(author => {
        return author.title
          .toLowerCase()
          .includes(this.searchauth.toLowerCase());
      });
    }
  }
};
</script> 

<style lang="scss" scoped>
#features-container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 70px;
  margin-top: 70px;
  box-shadow: 4px 1px 10px rgba(0, 0, 0, 0.075);
}

.boxi-1 {
  border: 1px solid #dadce6;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
  height: 569px;
  overflow: hidden;
  overflow-y: scroll;
  margin: 3px;
  padding: 10px;
  padding-top: 0;
  width: 45%;
}

.boxi-1::-webkit-scrollbar {
  display: none;
}

.boxi-2::-webkit-scrollbar {
  display: none;
}
.boxi-2 {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #dadce6;
  box-sizing: border-box;
  height: 569px;
  overflow: hidden;
  overflow-y: scroll;
  margin: 10px;
  padding: 10px;
  padding-top: 0;
  width: 45%;
}
.typename {
  font-size: 0pt;
}

.typename::first-letter {
  font-size: 12px;
  font-weight: bold;
}

.author-avatar {
  background-color: #58c8fc;
}

.author-avatar:nth-child(2) {
  background-color: #fcf958;
}

@media screen and (max-width: 520px) {
  .boxi-1 {
    width: 100%;
    margin: 0;
    border: solid #58c8fc 1px;
  }

  .boxi-2 {
    width: 100%;
    margin: 10px 0 0 0;
  }
}
</style>
