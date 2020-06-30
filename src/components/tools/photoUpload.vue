<template>
  <div class="photoUpload elevation-4">
    <v-container grid-list-md text-xs-center fill-height>
      <v-row align-center>
        <v-col cols="12">
          <p class="font-weight-black text-center">Upload Image</p>
        </v-col>
        <v-col cols="12">
          <v-file-input
            label="add Image"
            outlined
            dense
            prepend-icon="mdi-camera"
            @change="fileSelected"
          ></v-file-input>
          <v-btn @click="upload">Upload now</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import staffer from "@/services/staffer";
export default {
  data() {
    return {
      url: "",
      image: "",
      imageName: "",
      imageId: 0
    };
  },
  methods: {
    fileSelected(file) {
      this.image = file;
      this.imageName = file.name;
      this.url = URL.createObjectURL(this.image);
    },

    upload() {
      const fd = new FormData();
      fd.append("image", this.image, this.imageName);
      staffer.imageupload(fd).then(res => {
          console.log(res)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.photoUpload {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 40%;
  margin: auto;
  border-radius: 20px;
  box-sizing: border-box;
}
</style>