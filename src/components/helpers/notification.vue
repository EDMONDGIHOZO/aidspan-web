<template>

  <div class="message" :class="type">
    <v-alert type="error"
              border="right"
             icon="mdi-alert-rhombus-outline"
             transition="scale-transition">
      {{message}}
    </v-alert>
  </div>

</template>

<script>

  export default {
    name: 'Notification',
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    }
  }

</script>
