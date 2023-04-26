<template>
    <div style="margin-bottom: 7%">
        <v-carousel
                hide-delimiter-background
                height="600"
                cycle
                delimiter-icon="mdi-minus"
                :show-arrows="false"
                continuous
        >
            <v-carousel-item v-for="(component, index) in components" :key="index">
                <component :is="component"></component>
            </v-carousel-item>
        </v-carousel>
        <v-card class="mx-auto cardColor youtube_card" color="transparent" elevation="3"
                width="400">
            <v-card-title>
                <small class="caption">{{ $t('youtubetitle') }}</small>
            </v-card-title>
            <vue-plyr>
                <div class="plyr__video-embed">
                    <iframe
                            src="https://www.youtube.com/embed/gnjjNiDcVuU?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                            allowtransparency
                            allow="autoplay"
                    ></iframe>
                </div>
            </vue-plyr>
        </v-card>
    </div>
</template>

<script>
import introSlider from "@/components/sliders/introSlider.vue";
import middleSlider from "@/components/sliders/middleSlider.vue";

export default {
    name: "main-slider",
    components: [introSlider, middleSlider],
    data() {
        return {
            components: [introSlider, middleSlider],
            videoUrl: "https://www.youtube.com/watch?v=GdL5VBabNy0",
        }
    }
}
</script>

<style lang="scss" scoped>
.youtube_card {
  position: absolute;
  margin-top: -12%;
  right: 30px;
  border-radius: 10px;
}

.cardColor .v-card__title {
  background-color: #000000 !important;
  border-color: transparent !important;
  opacity: 0.65;
  color: #fafafa;
}

@media screen and (max-width: 520px) {
  .youtube_card {
    position: relative;
    margin-top: 0;
    right: 0;
    left: 0;
    border-radius: 10px;
    margin-bottom: 20px;
  }
}
</style>