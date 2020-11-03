<template>
  <div class="previewer">
    <v-row wrap>
      <v-col cols="2">
        <v-btn color="secondary" text outlined @click="$router.go(-1)">Back</v-btn>
      </v-col>
      <v-col cols="10">
           <h3>{{url}}</h3>
      </v-col>
      <v-col cols="12">
        <WebViewer
          :path="`${publicPath}lib`"
          :url="`${url}`"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WebViewer from "@/views/client/pages/WebViewer.vue";
export default {
  props: ["url"],
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
  components: {
    WebViewer,
  },
};
</script>

.<style lang="scss" scoped>
.previewer {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}
</style>