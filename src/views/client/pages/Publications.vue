<template>
  <div>
    <p class="display-1 text-center my-2">PUBLICATIONS</p>
    <v-row>
      <v-col cols="12" class="typeslist">
        <v-btn
          v-for="type in types"
          :key="type.id"
          class="ma-4 type-name"
          rounded
          color="success"
        >{{type.name}}</v-btn>
      </v-col>
    </v-row>
    <pub-list v-bind:publications="publications" id="publication-view"></pub-list>
  </div>
</template>


<script>
import publicationList from "@/views/client/pages/publications-list.vue";

export default {
  mounted() {
    this.$store.dispatch("getPublications");
    this.$store.dispatch("loadPublicationsTypes");
    this.$store.dispatch("loadSubscribers");
  },
  data() {
    return {
      currentType: "all"
    };
  },

  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return (
        value.charAt(0).toUpperCase() + value.slice(1).substr(0, 150) + "..."
      );
    }
  },

  computed: {
    publications() {
      return this.$store.getters.getPublications;
    },
    types() {
      return this.$store.getters.getAllPubTypes;
    },
  },
  components: {
    "pub-list": publicationList
  }
};
</script>

<style lang="scss" scoped>
.intro {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #f46517;
}

#publication-view {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: space-between;
}
.typeslist {
  max-width: 97%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: columns;
  margin-left: auto;
  margin-right: auto;
}
</style>