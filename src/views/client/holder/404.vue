<template>
  <div class="notFound">
    <div class="notice-info">
      <p class="notice">SORRY</p>
      <p class="sub-notice">We couldn't find the page you were looking for!</p>
      <p class="sub-notice-sub">
        Try to
        <strong @click="search = !search" class="search">search</strong> , or start
        <a href="/">Over</a>
      </p>
    </div>
    <div v-if="search">
      <v-row wrap width="400">
        <v-col cols="12">
          <v-text-field label="search" v-model="searchQuery" solo hint="Article Title"></v-text-field>
          <v-btn color="secondary" large @click="finder">search</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: false,
    searchQuery: "",
  }),

  methods: {
    finder() {
      return this.$router.push({
        path: `/gfo_article/${this.searchQuery}`,
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.notFound {
  height: 100%;
  display: flex;
  padding-left: 60px;
  padding-right: 60px;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  color: #ffffff;
  background: #00adef;
}
.search {
  cursor: pointer;
}

.notice-info {
  text-align: center;
  margin-top: 80px;
}

.notice {
  font-size: 95px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.sub-notice {
  font-size: 30px;
}
.sub-notice-sub {
  font-size: 20px;
}

.sub-notice-sub a {
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
}
.sub-notice-sub a:hover {
  color: #f46517;
}
</style>

