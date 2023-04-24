<template>
    <v-sheet
            color="orange"
            height="100%"
            tile
    >
        <v-row
                class="fill-height"
                align="center"
                justify="center"
        >
            <v-img
                    src="@/assets/images/common/media-hero-2020-04-30.jpg"
                    cover
                    height="600"

            >
                <div class="fill-height d-flex flex-column text-center justify-center">
                    <div class="moto-container">
                        <p>
                            Responsible reporting, commentary and analysis on all aspects of the Global Fund ecology
                            since 2002.
                        </p>
                    </div>
                </div>
            </v-img>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    name: "middle-slider"
}
</script>

<style lang="scss" scoped>
.aidspan-title {
  font-weight: bolder;
  color: #F46517;
  font-size: 6rem;
}

.moto-container {
  background-color: rgba(14, 170, 231, 0.74);
  width: 50%;
  height: 300px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}


.moto-container p {
  font-size: 3rem;
  color: white;
}

@media screen and (max-width: 600px) {
  .moto-container {
    width: 100%;
    margin: 0;
      padding: 0 40px;
  }
  .moto-container p {
    font-size: 1.6rem;
    color: white;
  }
}
</style>