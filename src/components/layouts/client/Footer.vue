<template>
  <div class="main-footer">
    <v-row id="sub-footer">
      <v-col cols="12" md="3" class="twitter-card">
        <v-card color="primary">
          <Timeline id="aidspan" sourceType="profile" :options="{ tweetLimit: '4' }" />
          <Timeline id="aidspan" sourceType="likes" :options="{ theme: 'dark' }" />
          <Timeline id="aidspan" sourceType="list" />
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-list one-line class="quicks" color="secondary">
          <v-list-item>
            <h4 class="white--text my-4">{{$t('quicklinks')}}</h4>
          </v-list-item>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-content class="white--text">{{$t('quicks.careers')}}</v-list-item-content>
            </v-list-item>
            <v-list-item router to="key-documents">
              <v-list-item-content class="white--text">{{$t('quicks.key-docs')}}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="white--text">{{$t('quicks.gallery')}}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="mx-auto" tile flat>
          <v-list shaped color="secondary">
            <v-subheader class="white--text">
              <h3>CONTACT</h3>
            </v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="(info, i) in contacts" :key="i">
                <v-list-item-icon>
                  <v-icon small color="white">{{info.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    <p class="white--text">{{info.title}}</p>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="ma-2">
          <v-card-text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.837859457764!2d36.80554231475391!3d-1.270237999073516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19adefd9df75%3A0x89171157b4b95624!2sAidspan!5e0!3m2!1sen!2srw!4v1598303758988!5m2!1sen!2srw"
              width="300"
              height="200"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-footer padless dark>
      <v-card class="flex" flat tile hover>
        <v-card-title class="primary">
          <strong class="subheading mx-4">{{$t('getconnected')}}</strong>
          <socials color="white" />
          <v-spacer></v-spacer>
          <small>
            <b>&copy; Copyright {{ new Date().getFullYear() }} — AIDSPAN</b>
          </small>
        </v-card-title>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
import socials from "@/components/tools/sociallinks";
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
    socials,
  },
};
</script>

<style lang="scss">
.twitter-card {
  width: 300px;
  padding: 25px;
  height: 280px;
  overflow-y: scroll;
}

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

.last-footer {
  background-color: #f46517;
}

.quicks {
  text-transform: uppercase;
}
</style>
