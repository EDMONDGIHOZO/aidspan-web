<template>
  <div class="pa-4">
    <v-sheet>
      <div v-if="loading">
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
      </div>
      <div v-else>
        <div class="gallery-head">
          <h3 class="display-1 text-center">{{ $t("gallery") }}</h3>
          <small>{{ $t("total-gallery") }} : {{ totalImages }}</small>
          <a
            href="https://www.flickr.com/photos/185978622@N04/albums/"
            target="_blank"
            >view albums</a
          >
        </div>
        <LightGallery
          :images="images"
          :index="index"
          @close="index = null"
          :disable-scroll="true"
        />

        <div class="gallery-row">
          <v-card
            outlined
            hover
            v-for="(thumb, thumbIndex) in images"
            :key="thumb.id"
            @click="index = thumbIndex"
            class="gallery-image ma-2"
          >
            <v-img :src="thumb.thumb" alt="image" height="300" width="300" />
          </v-card>
        </div>
      </div>
      <div class="gallery-row my-10">
        <v-btn
          v-if="page > 1"
          class="secondary mr-10"
          @click="restart"
          depressed
          >{{ $t("fromtop") }}</v-btn
        >
        <v-btn
          class="primary"
          v-if="page < totalPages"
          @click="loadMore"
          depressed
          >{{ loading ? "loading" : $t("loadmore") }}</v-btn
        >
      </div>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";
import { LightGallery } from "vue-light-gallery";

export default {
  name: "home",
  components: {
    LightGallery,
  },
  data() {
    return {
      loading: false,
      tag: "",
      images: [],
      page: 1,
      totalPages: 0,
      totalImages: 0,
      index: null,
    };
  },
  methods: {
    loadImages() {
      this.loading = true;
      this.fetchImages()
        .then((response) => {
          const results = response.data.photos.photo.map((image) => ({
            url: image.url_l,
            title: image.title,
            thumb: image.url_n,
          }));
          this.totalPages = response.data.photos.pages;
          this.totalImages = response.data.photos.total;
          this.images = results;
          this.loading = false;
        })
        .catch((error) => {
          console.log("An error ocurred: ", error);
        });
    },
    loadMore() {
      this.page = this.page + 1;
      this.loadImages();
    },
    restart() {
      this.page = 1;
      this.loadImages();
    },
    fetchImages() {
      return axios({
        method: "get",
        url: "https://api.flickr.com/services/rest",
        params: {
          method: "flickr.people.getPhotos",
          api_key: "e035c78a5818235757b5b57c1ff356cd",
          user_id: "185978622@N04",
          tags: this.tag,
          extras: "url_n,url_l, owner_name, date_taken, views",
          page: this.page,
          format: "json",
          nojsoncallback: 1,
          per_page: 60,
        },
      });
    },
  },
  created() {
    this.loadImages();
  },
};
</script>
<style scoped>
.gallery-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.gallery-head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin: auto;
}
</style>