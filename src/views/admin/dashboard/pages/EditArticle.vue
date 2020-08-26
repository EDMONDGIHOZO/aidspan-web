<template>
  <div class="edit">
    <v-row wrap>
      <v-col cols="6">
        <form v-on:submit.prevent="update">
          <v-textarea
            v-model="contents"
            name="input-7-1"
            label="Article Content"
            value="Article Content"
            hint="article Content"
            auto-grow
            rows="10"
            dense
            outlined
          ></v-textarea>
          <v-btn color="success" type="submit">update contents</v-btn>
        </form>
      </v-col>
      <v-col cols="6" class="preview">
        <div>
          <p v-html="contents"></p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Api from "@/services/Api";
export default {
  props: ["entity_id"],
  name: "edit-articles",
  data: () => ({
    contents: "",
  }),

  // update
  methods: {
    update() {
      const formdata = {
        contents: this.contents,
      };
      Api()
        .put(`/contents/5261`, formdata)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.preview {
    background-color: white;
}
</style>