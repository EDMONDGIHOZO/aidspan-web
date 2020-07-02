<template>
  <div class="authholder">
    <v-content>
      <v-row class="authentication-box">
        <v-col cols="12" sm="6" md="6" id="auth-logo-holder" class="d-none d-md-flex">
          <v-card flat>
            <v-img :src="logo" alt="aidspan-logo" />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" id="forms-holder">
          <v-card flat  width="600">
            <keep-alive>
              <router-view :key="$route.path"></router-view>
            </keep-alive>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
export default {
  computed: {
    logo() {
      return this.$store.state.logo;
    }
  }
};
</script>


<style lang="scss" scoped>
@media only screen and (max-width: 768px){
    .authentication-box{
      max-width: 90%;
    }
}
.authholder {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 240px;
}

.authentication-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  height: 567px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 14px rgba(166, 172, 190, 0.53);
}

#auth-logo-holder {
  min-height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #FF7A00;
}

#forms-holder {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
