<template>
  <div>
    <v-col cols="12" md="3" lg="4">
      <v-card>
        <v-img :src="image.url_n" :alt="image.title" />
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: ["image"],
};
</script>