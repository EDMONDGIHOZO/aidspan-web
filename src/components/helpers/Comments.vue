<template>
  <div class="comments">
    <v-divider></v-divider>
    <div class="contents" v-if="saving">
      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar, divider, actions"
      ></v-skeleton-loader>

      <v-skeleton-loader
        v-bind="attrs"
        type="list-item-avatar-three-line, image, article"
      ></v-skeleton-loader>
    </div>
    <v-form ref="form" @submit.prevent="saveComment" v-else>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <p class="font-weight-black">Ajoutez votre commentaire</p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="comment.name"
              :rules="[rules.required]"
              color="purple darken-2"
              label="votre nom"
              required
              filled
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="comment.email"
              :rules="[rules.required]"
              color="blue darken-2"
              label="email"
              required
              filled
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="comment.body"
              :rules="[rules.required]"
              filled
              color="teal"
            >
              <template v-slot:label>
                <div>
                  votre commentaire
                </div>
              </template>
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn @click="resetForm" depressed rounded color="secondary">Annuler</v-btn>
        <v-btn depressed rounded color="primary" type="submit">envoyer</v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
import Api from "@/services/Api";
// import Axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      saving: false,
      comment: {
        name: "",
        email: "",
        body: "",
        contentType: "",
        contentId: null,
      },
      rules: {
        required: (value) => !!value || "obligatoire!",
      },
    };
  },

  methods: {
    resetForm() {
      (this.comment.name = ""),
        (this.comment.email = ""),
        (this.comment.body = ""),
        (this.comment.contentType = ""),
        (this.comment.contentId = "");
    },

    saveComment() {
      const formData = {
        name: this.comment.name,
        body: this.comment.body,
        email: this.comment.email,
        contentType: "strategic_info",
        contentId: this.id,
      };
      this.saving = true;
      Api()
        .post(`comments`, formData)
        .then((response) => {
          console.log(response.data);
          this.saving = false;
          this.$root.$refs.A.getAsingle();
          this.resetForm();
        });
    },
  },
};
</script>

<style scoped>
.comments {
  overflow-x: scroll;
  max-width: 700px;
}
</style>
