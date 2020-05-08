<template>

  <div class="notification">
    <v-alert dense :type="type">
      {{message}}
    </v-alert>
  </div>

</template>

<script>

  export default {
    name: 'notification',
    props: {
      message: {
        type: string,
        required: true
      },
      type: {
        type: string,
        required: true
      }
    }
  }

</script>
