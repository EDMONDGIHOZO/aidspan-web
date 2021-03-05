<template>
  <div class="key_docs">
    <p class="doc_title font-weight-bold text-center text-uppercase">
      Key Documents
    </p>
    <div class="doc_list_container">
      <v-card v-if="docs.length < 1" flat>
        <v-card-text>
          <h1 class="text-center">No document found</h1>
        </v-card-text>
      </v-card>
      <v-card
        class="pa-2 doc"
        v-for="doc in docs"
        :key="doc.id"
        flat
        outlined
        v-else
      >
        <v-row align="center">
          <v-col cols="10" md="9">
            <h4 class="text-left">{{ doc.title }}</h4>
          </v-col>
          <v-col cols="12" md="2" class="links">
            <div v-if="doc.files.length !== null">
              <v-btn
                
                small
                :color="file.format === 'word' ? 'info' : 'red'"
                class="my-2"
                v-for="file in doc.files"
                :key="file.id"
                @click="downloadPublication(file.filename)"
                rounded
                dark
                depressed
              >
                <v-icon left>{{ 'mdi-file-' +file.format }}</v-icon>
                download</v-btn
              >
            </div>
            <small v-else>no file available</small>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>
import Api from "@/services/Api";
import DownloadPublication from "@/mixins/downloadPublication";

export default {
  mixins: [DownloadPublication],

  data: () => ({
    docs: [],
  }),
  mounted() {
    Api()
      .get("/key-documents")
      .then((response) => {
        this.docs = response.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.key_docs {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.doc_title {
  font-size: 30px;
  line-height: 60px;
  /* identical to box height */
  color: #a6acbe;
}
.doc {
  max-width: 80%;
  margin: 10px auto 10px auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.doc:hover {
  background: #f6f8ff;
  cursor: pointer;
}

@media screen and (max-width: 520px) {
  .key_docs {
    padding: 0;
    margin-top: 50px;
  }
  .doc {
    max-width: 98%;
  }
  .doc_list_container {
    padding: 0;
    border-radius: 0;
  }

  .doc .links {
    display: flex;
    justify-content: space-between;
    background: red;
  }
}
</style>
