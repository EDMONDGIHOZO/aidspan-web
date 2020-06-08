<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="typeslist">
        <v-btn
          v-for="type in types"
          :key="type.id"
          class="ma-4 type-name"
          rounded
          color="accent"
          @click="update_publications(type.name)"
        >{{type.name}}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  props: ["types"],
  data() {
    return {
      currentType: "all"
    };
  },

  methods: {
    update_publications: function(pub_type) {
      this.currentType = pub_type;
      alert(pub_type);
    }
  }
};
</script>

<style lang="scss" scoped>
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