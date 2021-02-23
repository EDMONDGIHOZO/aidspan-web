<template>
  <div class="info-box">
    <h3 class="info-title">{{ title }}</h3>
    <p class="info-data">{{ data }}</p>
    <v-list three-line v-if="isFiles" color="#e56d3b" class="files-list">
      <v-list-item v-for="file in files" :key="file.fid" dark>
        <v-list-item-content>
          <v-list-item-title v-text="file.file.filename"></v-list-item-title>
          <v-list-item-subtitle>{{
            file.file.filesize | formatDataSize
          }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <a :href="'https://aidspan.org/' + file.file.filepath" download>
            <v-btn icon>
              <v-icon color="white">mdi-download</v-icon>
            </v-btn>
          </a>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "infobox",
  props: ["title", "data", "isFiles", "filesNumber", "files"],
  methods: {
    download(path) {
      const url = `https://aidspan.org/${path}`;
      window.location.href = url;
      console.log(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.info-box {
  background-color: #e56d3b;
  padding: 8px;
  margin-bottom: 10px;
  color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
}

.info-data {
  font-size: 18px;
}

.files-list {
  max-height: 300px;
  overflow: auto;
  scrollbar-width: 3px;
  scrollbar-color: white;
}

.info-files {
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  padding: 10px;
  list-style: square;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #252525;
  margin-top: 5px;
  width: 100%;
  border-radius: 10px;
}
</style>