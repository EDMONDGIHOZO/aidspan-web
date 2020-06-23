<template>
  <div class="gallery">
    <h1>AIDSPAN GALLERY</h1>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {
      gallery_images: [
        {
          img_url: "",
          img_caption: "",
          id: "",
          event_date: ""
        }
      ]
    };
  }
};
</script>