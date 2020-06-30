<template>
  <div class="form-top">
    <v-row>
      <v-col cols="8">
        <p class="title">{{titleValue}}</p>
      </v-col>
      <v-col cols="4" class="previewbtns">
          <v-btn color="secondary" depressed class="mx-4"> Preview </v-btn>
          <v-btn color="primary" depressed class="mx-4"> Save </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["titleValue"]
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
  border-left: solid 7px #33a7f5;
  padding: 5px;
}

.previewbtns {
   display: flex;
   flex-direction: row;
   justify-content: flex-end;

}
</style>