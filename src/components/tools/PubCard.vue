<template>
  <div class="pub-card">
    <v-card rounded v-for="pub in data" :key="pub.id" class="my-5" outlined>
      <v-card-title>{{ pub.title }}</v-card-title>
      <div class="subtitles">
        <v-card-subtitle>{{ pub.author }}</v-card-subtitle>
        <v-card-subtitle>{{
          pub.published_at | formatDateNormal
        }}</v-card-subtitle>
      </div>
      <v-card-text>
        <p>
          {{ pub.description | str_limit(limit) }}
          <text-dialog :title="pub.title" :description="pub.description" />
        </p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions v-if="pub.files.length !== 0">
        <div class="actions">
          <div class="files">
            <strong class="mx-5">Files</strong>
            <v-btn
              color="info"
              class="mx-2"
              icon
              v-for="file in pub.files"
              :key="file.id"
              @click="downloadFile(file.filename)"
              ><v-icon :color="file.format == 'pdf' ? 'red' : 'info'"
                >mdi-file-{{ file.format }}-box</v-icon
              ></v-btn
            >
          </div>
          <div class="category">
            <v-chip color="secondary">{{ pub.category }}</v-chip>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import TextDialog from "@/components/tools/TextDialog.vue";

export default {
  name: "pubcard",
  props: ["data"],
  data() {
    return {
      limit: 300,
    };
  },


  components: {
    "text-dialog": TextDialog,
  },

  methods: {
    downloadFile(name) {
      const downloadLink =
        `https://webapi.aidspan.org/api/v1/` + "fileget/" + name;
      const link = document.createElement("a");
      link.href = downloadLink;
      link.setAttribute("download", link);
      document.body.appendChild(link);
      link.click();
    },
  },
};
</script>

<style scoped>
.subtitles {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>