<template>
  <div class="new-key-doc">
    <v-form @submit.prevent="save_doc()">
      <v-row>
        <v-col cols="12">
          <v-textarea
            name="input-7-1"
            label="Document Name"
            value="Issue Note"
            hint="issue note "
            auto-grow
            rows="1"
            v-model="document.doc_name"
            outlined
            dense
          ></v-textarea>
        </v-col>
        <v-col cols="8">
          <v-textarea
            name="input-7-1"
            label="Document Link"
            value="Document link"
            hint=" paste document link from docs.aidspan.org"
            auto-grow
            rows="1"
            outlined
            v-model="document.doc_link"
            dense
          ></v-textarea>
        </v-col>
        <v-col cols="4">
          <v-select
            :items="formats"
            item-value="icon"
            item-text="name"
            label="select document format"
            outlined
            dense
            v-model="document.format"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-btn block rounded color="primary" large depressed type="submit">Create</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>


<script>
import Api from "@/services/Api";
export default {
  data: () => ({
    formats: [
      { name: "word document", icon: "mdi-file-word-box" },
      { name: "PDF document", icon: "mdi-file-pdf-box" },
    ],
    document: {
      doc_name: "",
      doc_link: "",
      format: "",
    },
  }),

  methods: {
    save_doc() {
      const data = {
        doc_name: this.document.doc_name,
        doc_link: this.document.doc_link,
        format: this.document.format,
      };

      Api()
        .post("/key-documents", data)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.new-key-doc {
  width: 50%;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: auto;
}

.new-issue .heading {
  text-align: center;
  text-transform: uppercase;
}
</style>