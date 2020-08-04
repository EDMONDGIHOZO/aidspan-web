<template>
  <v-row justify="left">
    <v-col cols="12" v-if="uploaded">
      <h3>Uploaded file : {{filename}}</h3>
    </v-col>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">upload File</v-btn>
      </template>
      <v-form @submit.prevent="uploadfile" enctype="multipart/form-data">
        <v-card class="pa-3">
          <v-card-title>
            <span class="font-weight-bold text-uppercase">File Upload</span>
          </v-card-title>
          <v-card-text>
            <v-alert :type="results" v-if="message">{{message}}</v-alert>
            <v-container v-if="!uploaded">
              <v-row>
                <v-col cols="12">
                  <v-file-input
                    v-model="file"
                    placeholder="click here to select"
                    label="file upload"
                    prepend-icon="mdi-paparclip"
                    dense
                    outlined
                    @change="selectFile"
                    ref="upFile"
                    enctype="multipart/form-data"
                  >
                    <template v-slot:selection="{ text }">
                      <v-chip small label color="primary">{{ text }}</v-chip>
                    </template>
                  </v-file-input>
                </v-col>
              </v-row>
            </v-container>
            <v-progress-linear v-model="progressSize" color="success" height="25" v-if="uploading">
              <strong>{{ Math.ceil(progressSize) }}%</strong>
            </v-progress-linear>
            <small class="orange--text" v-if="!uploaded">Please close this when upload is done</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" outlined @click="closeUploader">Close</v-btn>
            <v-btn color="success" depressed type="submit">Upload</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
import Api from "@/services/Api";
export default {
  data: () => ({
    dialog: false,
    file: null,
    uploaded: false,
    message: "",
    results: "",
    filename: "",
    progressSize: null,
    uploading: false,
    link_name: "",
  }),
  methods: {
    selectFile() {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const file = this.$refs.upFile.files[0];
      const MAX_SIZE = 200000;
      const tooLarge = file.size > MAX_SIZE;

      if (allowedTypes.includes(file.type) && !tooLarge) {
        this.file = file;
        this.message = "";
      } else {
        (this.results = "error"),
          (this.message =
            "This file is too large or it has unsupported format");
      }
    },
    uploadfile() {
      this.uploading = true;
      const formdata = new FormData();
      formdata.append("file", this.file);
      Api()
        .post("/file-upload", formdata, {
          onUploadProgress: (uploadEvent) => {
            this.progressSize = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
          },
        })
        .then((response) => {
          if (response.data.message === "success") {
            this.uploaded = true;
            this.results = "success";
            this.message = "file Uploaded successfully";
            this.filename = response.data.file_name;
          } else {
            this.message = "some error occurred , we are sorry for that.";
            this.results = "error";
          }
        });
    },
    closeUploader() {
      (this.file = null), (this.progressSize = 0);
      (this.dialog = false), (this.message = "")((this.uploaded = false));
    }
  },
};
</script>