<template>
  <div class="pagination">
    <v-row justify="center">
        <v-col cols="2">
        <v-snackbar v-model="snackbar" :timeout="timeout" color="secondary" top elevation="24">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
          </template>
        </v-snackbar>
      </v-col>
      <v-col cols="10">
        <v-container class="max-width">
          <v-pagination
            v-model="currentPage"
            class="my-1"
            :length="lastPage"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            total-visible="10"
            circle
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  watch: {
    currentPage(newVal) {
      this.paginatePage(newVal);
      if(newVal){
          this.snackbar = true
      }
    }
  },
  data: () => ({
    snackbar: false,
    text: "Please wait while loading",
  }),
  methods: {
    paginatePage(pageNumber) {
      this.$store.dispatch("fetchIssues", pageNumber);
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state.issues.page;
      },
      set(value) {
        this.$store.commit("SET_CURRENT_PAGE", value);
      }
    },
    lastPage: {
      get() {
        return this.$store.state.issues.lastPage;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  max-width: 98%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  -webkit-box-shadow: -1px -1px 18px 0px rgba(205, 209, 209, 0.69);
  -moz-box-shadow: -1px -1px 18px 0px rgba(205, 209, 209, 0.69);
  box-shadow: -1px -1px 18px 0px rgba(205, 209, 209, 0.69);
  
}
</style>