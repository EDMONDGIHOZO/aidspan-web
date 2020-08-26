<template>
  <v-row wrap :id="lander">
    <v-col cols="12" class="landing-infos">
      <div class="call-to-action">
        <v-btn
          color="primary"
          depressed
          @click="more"
          class="slide_in"
          target="_black"
        >{{$t('readmore')}}</v-btn>
        <v-btn
          color="secondary mx-4"
          depressed
          href="https://data.aidspan.org"
          target="_black"
          class="slide_in"
        >{{$t('visitapw')}}</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    lander: "landing-image",
  }),
  computed: {
    slides() {
      return this.$store.state.slides;
    },
  },
  mounted() {
    const currentlang = this.$i18n.locale;
    if (currentlang === "en") {
      this.lander = "landing-image";
    } else {
      this.lander = "landing-image-fr";
    }
  },
  methods: {
    more() {
      return this.$router.push({ name: "about" });
    },
  },
};
</script>

<style lang="scss" scoped>
#landing-image {
  background-image: url("~@/assets/images/common/corners-01.svg");
  height: 510px;
  background-position: center;
  background-size: cover;
  margin: auto;
  background-repeat: no-repeat;
  padding: 5px;
  border-radius: 20px;
  margin-bottom: 20px;
}
#landing-image-fr {
  background-image: url("~@/assets/images/common/corners-fr.svg");
  height: 510px;
  background-position: center;
  background-size: cover;
  margin: auto;
  background-repeat: no-repeat;
  padding: 5px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.call-to-action {
  margin-top: 18%;
  padding: 40px;
  margin-left: 60px;
}
.slide_in {
  animation: slideit 0.9s ease-in;
}

@keyframes slideit {
  0% {
    transform: skewX(55deg) translateX(-500px);
  }
  60% {
    transform: translateX(0px);
  }
  64% {
    transform: skewX(33deg) translateX(30px);
  }

  80% {
    transform: scaleX(1);
  }
  100% {
    transform: skewX(0deg);
  }
}

@media screen and (max-width: 520px) {
  #landing-image {
    background-image: url("~@/assets/images/common/corners-02.svg");
    padding: 0;
  }

  .call-to-action {
    padding: 0;
    margin-top: 78%;
    margin-left: 10%;
  }
}
</style>
