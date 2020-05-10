<template>
  <div>
    <v-row id="sub-footer">
      <v-col cols="12" md="4" class="twitter-card">
        <v-card height="300">
          <Timeline
            id="aidspan"
            sourceType="profile"
            :options="{ tweetLimit: '5' }"
            widget-class="mt-3 tweetbox"
          />
          <Timeline id="aidspan" sourceType="likes" :options="{ theme: 'dark' }" />
          <Timeline id="aidspan" sourceType="list" />
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="mx-auto" tile flat>
          <v-list shaped dense>
            <v-subheader class="title">QUICK LINKS</v-subheader>
            <v-list-item-group v-model="link" color="primary">
              <v-list-item v-for="(link, i) in quicklinks" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="link.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="mx-auto" tile flat>
          <v-list shaped dense>
            <v-subheader class="title">CONTACT</v-subheader>
            <v-list-item-group v-model="info" color="primary">
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
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-2 text-center">
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
    }
  },
  components: {
    Timeline
  }
};
</script>

<style lang="scss">

#quick-links-card {
  border-left: solid 4px #f46517;
}

#quick-links-card .title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
}

#contacts-card .title {
  font-family: Open Sans;
  font-style: normal;
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
    box-shadow: 0px 0 10px rgba(182, 228, 255, 0.8);
}
#sub-footer .twitter-card{
    overflow-y: scroll;
}
</style>
