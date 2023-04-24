<template>
    <v-container class="pa-5">
        <div class="watchDogTitleContainer">
            <h1>
                {{ $t("watchdogContent.title") }}
            </h1>
        </div>
        <v-row>
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <v-img max-width="280" max-height="280"
                       src="@/assets/images/sliders/micro.png"
                ></v-img>
            </v-col>
            <v-col cols="12" md="6" class="watchDogListContainer">
                <div>
                    <h2>{{ $t("watchdogContent.subTitle") }}</h2>
                </div>
                <div>
                    <ul class="custom-list">
                        <li>{{ $t("watchdogContent.effectiveLista") }}</li>
                        <li>{{ $t("watchdogContent.effectiveListb") }}</li>
                        <li>{{ $t("watchdogContent.effectiveListc") }}</li>
                        <li>{{ $t("watchdogContent.effectiveListd") }}</li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="12" class="my-16">
                <p class="font-weight-bold">{{ $t("watchdogContent.description") }}</p>
            </v-col>
            <v-col cols="12" md="6" class="watchDogListContainer">
                <div>
                    <h2>{{ $t("watchdogContent.keySkillsTitle") }}</h2>
                </div>
                <div>
                    <ul class="custom-list">
                        <li>{{ $t("watchdogContent.keySkills1") }}</li>
                        <li>{{ $t("watchdogContent.keySkills2") }}</li>
                        <li>{{ $t("watchdogContent.keySkills3") }}</li>
                        <li>{{ $t("watchdogContent.keySkills4") }}</li>
                    </ul>
                </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <v-img max-width="280" max-height="280"
                       src="@/assets/images/sliders/craps.png"
                ></v-img>
            </v-col>
            <v-col cols="12" class="my-16">
                <h3 style="font-size: 2rem; margin-bottom: 20px">{{ $t("watchdogContent.riseVoiceTitle") }}</h3>
                <p class="font-weight-bold">{{ $t("watchdogContent.riseVoiceContent") }}</p>
            </v-col>
            <v-col cols="12" class="share_container">
                <span>{{ $t("share") }}</span>
                <social-sharing
                        :url="currentLink"
                        title="Watchdogs’ Mentoring Project"
                        :description="shareable"
                        :quote="shareable"
                        hashtags="aidspan,GFO,OFM, GlobalFund"
                        twitter-user="aidspan"
                        inline-template
                >
                    <div id="social-icons">
                        <network network="whatsapp">
                            <i class="fa fa-whatsapp"></i>
                        </network>
                        <network network="twitter">
                            <i class="fa fa-twitter"></i>
                        </network>
                        <network network="email">
                            <i class="fa fa-envelope"></i>
                        </network>
                        <network network="facebook">
                            <i class="fa fa-facebook"></i>
                        </network>

                        <network network="linkedin">
                            <i class="fa fa-linkedin"></i>
                        </network>
                    </div>
                </social-sharing>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'watch-dog',
    data: () => {
        return {
            currentLink: '',
            shareable: this.$t("watchdogContent.riseVoiceContent")
        }
    },
    mounted() {
        this.currentLink = window.location.href
    }
}
</script>

<style lang="scss" scoped>
.watchDogTitleContainer {
  border-bottom: solid 10px #e8953c;
  margin-bottom: 100px;
}

.background::before {
  background: radial-gradient(41.76% 41.76% at 50% 50%, #F46517 0%, rgb(0, 158, 218) 100%);
  filter: blur(134.034px);
  fill-opacity: 0.2%;
}

.watchDogTitleContainer h1 {
  font-size: 3rem;
  color: #00a4e4;
  background: radial-gradient(41.76% 41.76% at 50% 50%, #F46517 0%, rgb(0, 158, 218) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.watchDogListContainer {
  z-index: 999;
  background: linear-gradient(262.06deg, #7B61FF -11.14%, rgba(167, 97, 255, 0.96) 56.18%);
  border-radius: 30px 10px 30px 10px;
  color: white;
}

.watchDogListContainer h2 {
  font-weight: bold;
  font-size: 1.6rem;
  margin: 20px;
}

.custom-list li {
  list-style-image: url('../../../assets/images/sliders/star.png');
  margin-bottom: 10px;
}

.share_container {
  left: calc(50% - 195.29px / 2 - 450.12px);
  top: 579.84px;
}

</style>