<template>
  <div class="main-footer">
    <v-row id="sub-footer">
      <v-col cols="12" md="4" class="twitter-card">
        <v-card height="300" color="primary">
          <Timeline id="aidspan" sourceType="profile" :options="{ tweetLimit: '4' }" />
          <Timeline id="aidspan" sourceType="likes" :options="{ theme: 'dark' }" />
          <Timeline id="aidspan" sourceType="list" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-list one-line class="quicks" color="secondary">
          <v-list-item>
            <h4 class="white--text my-4">{{$t('quicklinks')}}</h4>
          </v-list-item>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-content class="white--text">{{$t('quicks.staffweb')}}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="white--text">{{$t('quicks.careers')}}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="white--text">{{$t('quicks.key-docs')}}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="white--text">{{$t('quicks.gallery')}}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" tile flat>
          <v-list shaped color="secondary">
            <v-subheader class="white--text">
              <h3>CONTACT</h3>
            </v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="(info, i) in contacts" :key="i">
                <v-list-item-icon>
                  <v-icon small>{{info.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="info.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-footer padless dark>
      <v-card class="flex" flat tile hover>
        <v-card-title class="primary">
          <strong class="subheading">{{$t('getconnected')}}</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-2 text-center last-footer">
          {{ new Date().getFullYear() }} —
          <strong>AIDSPAN</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
export default {
  computed: {
    icons() {
      return this.$store.state.icons;
    },
    quicklinks() {
      return this.$store.state.quicklinks;
    },
    contacts() {
      return this.$store.state.basicInfo;
    },
  },
  methods: {
    goto(routeLink) {
      return this.$router.push({ name: routeLink });
    },
  },
  components: {
    Timeline,
  },
};
</script>

<style lang="scss">
#quick-links-card {
  border-left: solid 4px #f46517;
}

#quick-links-card .title {
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
}

#contacts-card .title {
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
}

#contacts-card {
  border-left: solid 4px #3dc0fc;
}

#sub-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
}
#sub-footer .twitter-card {
  overflow-y: scroll;
  overflow: hidden;
}

.last-footer {
  background-color: #f46517;
}

.quicks {
  text-transform: uppercase;
}
</style>
