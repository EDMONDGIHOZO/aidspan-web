<template>
  <v-col class="d-flex" cols="4">
    <v-select :items="types" :v-model="types" item-value="name" item-text="name" filled rounded label="Article Type"></v-select>
  </v-col>
</template>

<script>
export default {
    props: ['types']
};
</script>