<template>
  <div class="container">
    <v-tabs horizontal background-color="#e9edf0">
      <v-tab tab-reverse-transition>
        {{ $t("core.timeliness.title") }}
      </v-tab>
      <v-tab tab-reverse-transition>
        {{ $t("core.integrity.title") }}
      </v-tab>
      <v-tab tab-reverse-transition>
        {{ $t("core.collab.title") }}
      </v-tab>

      <v-tab tab-reverse-transition>
        {{ $t("core.accountability.title") }}
      </v-tab>

      <v-tab-item>
        <v-card flat id="tabcontainer" height="265px">
          <v-card-text class="body-text">
            {{ $t("core.timeliness.body") }}
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat id="tabcontainer" height="265px">
          <v-card-text class="body-text">
            {{ $t("core.integrity.body") }}
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat id="tabcontainer" height="265px">
          <v-card-text class="body-text">
            {{ $t("core.collab.body") }}
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat id="tabcontainer" height="265px">
          <v-card-text class="body-text">
            {{ $t("core.accountability.body") }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>


<style scoped>
#tabcontainer .body-text {
  font-size: 20px;
  line-height: 30px;
  color: black;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-left: 4px solid #FF7A00;
}
</style>
