<template>
  <div class="pagination">
    <v-row justify="center">
      <v-col cols="12">
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
    }
  },
  data: () => ({
    text: "Please wait while loading"
  }),
  methods: {
    paginatePage(pageNumber) {
      this.$store.dispatch("fetchofms", pageNumber);
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state.ofmissues.page;
      },
      set(value) {
        this.$store.commit("SET_CURRENT_PAGE_OFM", value);
      }
    },
    lastPage: {
      get() {
        return this.$store.state.ofmissues.lastPage;
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

}
</style>