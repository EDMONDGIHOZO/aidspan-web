<template>
  <v-row wrap id="landing-image">
    <v-col cols="12" class="landing-infos">
      <p class="webname" color="primary">WELCOME TO AIDSPAN</p>
      <p class="intro">
        Aidspan is a non-profit organization based in Kenya whose mission is to reinforce
        the effectiveness of the Global Fund to Fight AIDS, Tuberculosis and Malaria by serving
        as an independent watchdog of the Fund and its grant implementers.
      </p>
      <div class="call-to-action">
          <v-btn color="primary" depressed href="about-us">Read more </v-btn>
      <v-btn color="secondary mx-4" depressed href="https://data.aidspan.org"> Visit APW </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    slides() {
      return this.$store.state.slides;
    }
  }
};
</script>
