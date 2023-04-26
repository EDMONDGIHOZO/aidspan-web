<template>
    <v-sheet
            color="primary"
            height="100%"
            tile
    >
        <v-row
                class="fill-height"
                align="center"
                justify="center"
        >
            <v-img
                    src="@/assets/images/sliders/old-woman-asian.jpeg"
                    cover
                    height="600"
            >
                <div class="fill-height d-flex flex-column text-center justify-center">
                    <h2 class="aidspan-title">AIDSPAN</h2>
                    <div class="moto-container">
                        <p>{{ $t('slider3Text') }}
                            <span class="font-weight-bold text--red text-decoration-underline text-uppercase"
                                  style="color: #b71c1c">{{ $t('sida') }}, </span>,
                            <span class="font-weight-bold text--red text-decoration-underline text-uppercase"
                                  style="color: #00AEEF"> {{ $t('tuberclosis') }}, </span>,
                            <span class="font-weight-bold text--red text-decoration-underline text-uppercase"> {{ $t('malaria') }} </span>
                        </p>
                    </div>
                </div>
            </v-img>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    name: "intro-slider"
}
</script>

<style lang="scss" scoped>
.aidspan-title {
  font-weight: bolder;
  color: #F46517;
  font-size: 5rem;
}

.moto-container {
  padding: 0 3em;
}

.moto-container p {
  font-size: 2rem;
  color: white;
}
</style>