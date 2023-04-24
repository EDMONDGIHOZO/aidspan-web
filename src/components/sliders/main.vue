<template>
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
</template>

<script>
import introSlider from "@/components/sliders/introSlider.vue";
import middleSlider from "@/components/sliders/middleSlider.vue";

export default {
    name: "main-slider",
    components: [introSlider, middleSlider],
    data() {
        return {
            components: [introSlider, middleSlider]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>