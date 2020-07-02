<template>
  <div class="tags">
    <v-list dense>
      <v-list-item-group mandatory color="primary">
        <v-list-item v-for="tag in loadedTags" :key="tag.tid" @click="gototag(tag.tid)">
          <v-list-item-icon>
            <v-icon>mdi-tag-text-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="tag.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      sidetitle: "Featured Tags"
    };
  },
  computed: {
    ...mapGetters(["loadedTags"])
  },
  mounted() {
    this.$store.dispatch("loadArticleTags");
  },

  methods: {
    gototag(tid) {
      this.$router.push({
        name: "articletags",
        params: { tid: tid }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#sidebar-tags {
  max-height: 20%;
  overflow-x: scroll;
}
</style>