<template id="subsption-form">
  <v-form ref="form" v-model="valid" lazy-validation justify-center>
    <v-text-field
      v-model="subscriber.email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
      rounded
      color="secondary"
      background-color="white"
    ></v-text-field>

    <v-select
      v-model="subscriber.select"
      :items="newsletters"
      :rules="[v => !!v || 'Item is required']"
      label="GFO or OFM ?"
      required
      class="white--text"
    ></v-select>

    <div class="text-center">
      <v-dialog v-model="dialog" max-width="400">
        <template v-slot:activator="{ on }">
          <v-chip class="ma-2" color="secondary" text-color="white" v-on="on">
            <v-avatar left>
              <v-icon>mdi-information</v-icon>
            </v-avatar>Read our user Agreements.
          </v-chip>
        </template>
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>
          <v-card-text>By subscribing to this website you agree to receive our newsletter every month.</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
              rounded
            ></v-checkbox>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-btn
      :disabled="!valid"
      color="secondary"
      class="mr-8"
      rounded
      outlined
      block
      large
      @click="saveSubscriber"
    >Subscribe</v-btn>
  </v-form>
</template>
