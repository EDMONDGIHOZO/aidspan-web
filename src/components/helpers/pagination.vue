<template>
  <div>
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination v-model="page" class="my-4" :length="lastPage"></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["collection"],
  watch: {
    page(newVal) {
      this.paginatePage(newVal);
    }
  },
  computed: {
    page: {
      get() {
        return this.$store.state[this.collection].page;
      },
      set: function(value) {
        this.$store.commit("setPage", value);
      }
    },
    lastPage: {
      get() {
        return this.$store.state.issues.lastPage;
      }
    }
  },

  methods: {
      paginatePage(pageNumber){
          this.$store.dispatch('loadIssues', pageNumber);
      }
  }
};
</script>