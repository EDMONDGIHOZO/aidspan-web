<template>
  <v-list dense>
    <v-list-item>
      <v-text-field
        label="Search Article Type"
        type="text"
        ref="search"
        single-line
        hide-details
        background-color="white"
        prepend-inner-icon="mdi-magnify"
        dense
        v-model.trim="search"
      ></v-text-field>
    </v-list-item>
    <v-list-item-group color="secondary" rounded>
      <v-list-item v-for="artype in filteredtypes" :key="artype.id" @click="viewtype(artype.id)">
        <v-list-item-content>
          <v-list-item-title v-text="artype.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>


<script>
import Api from "@/services/Api";
export default {
  data() {
    return {
      search: "",
      types: []
    };
  },
  computed: {
    filteredtypes() {
      return this.types.filter(type => {
        return type.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    viewtype(typeId) {
      return this.$router.push({
        name: "articletype",
        params: { type_id: typeId }
      });
    }
  },
  created() {
    Api()
      .get("/article-types")
      .then(response => {
        this.types = response.data.data;
      })
      .catch(error => console.log(error));
  }
};
</script>
