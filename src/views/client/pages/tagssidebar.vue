<template>
    <v-col cols="3">
        <v-card flat class="mb-4" outlined>
          <v-card-title>{{sidetitle}}</v-card-title>
        </v-card>
        <div id="sidebar-tags">
            <v-card flat outlined>
          <v-list>
            <v-list-item-group mandatory color="indigo">
              <v-list-item v-for="tag in loadedTags" :key="tag.tid">
                <v-list-item-icon>
                  <v-icon>mdi-tag-text-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="tag.name" router :to="'/article-tags/' + tag.tid"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
        </div>
    </v-col>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    data() {
    return {
      sidetitle: "Featured Tags"
    };
  },
    computed: {
        ...mapGetters(['loadedTags'])
    },
    mounted(){
        this.$store.dispatch("loadArticleTags");
    }
}
</script>

<style lang="scss" scoped>
#sidebar-tags{
  max-height: 20%;
  overflow-x: scroll;
}
</style>