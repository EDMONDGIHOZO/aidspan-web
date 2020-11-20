<template>
  <div class="main-footer">
    <v-row id="sub-footer">
      <v-col cols="12" md="3" class="twitter-card">
        <v-card color="primary">
          <Timeline
            id="aidspan"
            sourceType="profile"
            :options="{ tweetLimit: '4' }"
          />
          <Timeline
            id="aidspan"
            sourceType="likes"
            :options="{ theme: 'dark' }"
          />
          <Timeline id="aidspan" sourceType="list" />
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <ul class="contact-list">
          <li>
            <h4>{{ $t("quicklinks") }}</h4>
          </li>
          <li @click="goto('careers')" class="linked">
            <v-badge color="primary" content="New">{{ $t("quicks.careers") }} </v-badge>
          </li>
          <li @click="goto('gallery')" class="linked">
            {{ $t("quicks.gallery") }}
          </li>
          <li @click="goto('key-documents')" class="linked">
            {{ $t("quicks.key-docs") }}
          </li>
        </ul>
      </v-col>
      <v-col cols="12" md="3">
        <ul class="contact-list">
          <li><h4>CONTACT</h4></li>
          <li v-for="(info, i) in contacts" :key="i">
            <v-icon small color="white" large class="mx-2">{{
              info.icon
            }}</v-icon>
            <span>{{ info.title }}</span>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="ma-2">
          <v-card-text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.837859457764!2d36.80554231475391!3d-1.270237999073516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19adefd9df75%3A0x89171157b4b95624!2sAidspan!5e0!3m2!1sen!2srw!4v1598303758988!5m2!1sen!2srw"
              frameborder="0"
              style="border: 0"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
              id="mapbox"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-footer padless dark color="secondary">
      <v-card class="flex mt-4" flat tile hover color="primary darken-2">
        <feedback />
        <v-card-title class="primary">
          <strong class="subheading mx-4">{{ $t("getconnected") }}</strong>
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
import feedback from "@/components/helpers/feedback";
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
    feedback,
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

.feedback {
  font-size: 18px;
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

#mapbox {
  min-width: 100%;
  height: 250px;
}
.contact-list {
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  text-align: left;
  line-height: 20px;
}

.contact-list h4 {
  font-size: 20px;
  margin-bottom: 10px;
}
.contact-list li {
  padding: 10px;
  font-size: 14px;
}
.contact-list .linked {
  cursor: pointer;
  list-style: circle;
}

.contact-list .linked:hover {
  color: #000000;
  font-size: 18px;
}
</style>
