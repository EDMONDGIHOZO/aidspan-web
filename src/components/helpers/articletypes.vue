<template>
  <v-list dense>
    <v-list-item>
      <v-text-field
        label="Search Article Type"
        type="text"
        ref="search"
        single-line
        hide-details
        dense
        v-model.trim="search"
      ></v-text-field>
    </v-list-item>
    <v-list-item-group color="secondary" rounded>
      <v-list-item v-for="artype in filteredtypes" :key="artype.id">
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
      articletypes: []
    };
  },
  computed: {
    filteredtypes() {
      return this.articletypes.filter(type => {
        return type.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  },
  created() {
    Api().get("/articletypes")
      .then(response => (this.articletypes = response.data.data))
      .catch(error => console.log(error));
  }
};
</script>
