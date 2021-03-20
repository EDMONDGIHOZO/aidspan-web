<template>
  <div class="container">
    <div class="single-strategy" v-if="loaded">
      <!-- thumbnail full image -->
      <div class="image-container">
        <v-parallax
          v-if="strategy.image !== null"
          :src="
            `https://gfo.aidspan.org/sites/default/files/strategic/${strategy.image.image.filename}`
          "
        ></v-parallax>
        <v-parallax
          v-else
          height="300"
          rounded
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        ></v-parallax>
      </div>

      <div class="title-container">
        <h1>{{ strategy.title }}</h1>
        <v-chip color="secondary" class="my-4">
          {{ strategy.created | formatDate }}
        </v-chip>
      </div>

      <div class="content">
        <span v-html="strategy.description.body_value"></span>
      </div>
    </div>

    <div class="contents" v-else>
      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
      ></v-skeleton-loader>

      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar-three-line, image, article"
      ></v-skeleton-loader>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api";
export default {
  name: "strategy",
  props: ["id"],
  data() {
    return {
      strategy: null,
      loaded: false,
    };
  },

  mounted() {
    this.getAsingle();
  },

  methods: {
    // fetch the strategy
    getAsingle() {
      Api()
        .get(`strategies/${this.id}`)
        .then((response) => {
          console.log(response.status);
          if (response.status == "200") {
            this.strategy = response.data;
            this.loaded = true;
          } else {
            alert("someting went wrong, please check your network");
          }
        });
    },
  },
};
</script>

<style scoped>
.single-strategy {
  width: 98%;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.single-strategy :is(.image-container, .title-container, .contents) {
  width: 100%;
  padding: 10px;
}

.title-container h1{
  color: #00AEEF;
}
</style>
