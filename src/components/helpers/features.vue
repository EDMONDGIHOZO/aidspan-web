<template>

  <v-container id="features-container">
    <div class="boxi-1">
      <div class="sticks">
        <h4 class="text-center my-4">ARTICLE TYPES </h4>
      </div>
      <v-list dense>

        <v-list-item-group color="secondary" rounded>
          <v-list-item v-for="artype in articletypes" :key="artype.id">
            <v-list-item-content>
              <v-list-item-title v-text="artype.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </div>
    <div class="boxi-1">
      <div class="sticks">
        <h4 class="text-center my-4">GFO & OFM AUTHORS </h4>
      </div>
      <v-list dense>
       <v-list-item-group color="primary">
            <v-list-item v-for="artype in articleTypes" :key="artype.id">
          <v-list-item-content>
            <v-list-item-title v-text="artype.title"></v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-list-item-avatar class="author-avatar" size="40">
            <span class="font-weight-bold white--text typename">{{artype.title}}</span>
          </v-list-item-avatar>
        </v-list-item>
       </v-list-item-group>
      </v-list>
    </div>
    <div class="boxi-2">
    <div class="sticks">
      <h4 class="text-center my-4">FEATURED TAGS </h4>
    </div>
     <tags />
    </div>
  </v-container>

</template>

<script>

  import { mapGetters } from 'vuex'
  import tags from '@/views/client/pages/tagssidebar.vue'
  export default {
    name: 'features',
    components: {
        tags
    },
    data() {
      return {
        articleTypes: [
          { title: 'Adele Sulcas', id: '1' },
          { title: 'David Garmaise', id: '3' },
          { title: 'IDA HAKIZINKA', id: '4' },
          { title: 'AIDSPAN STAFF', id: '5' },
          { title: 'BERNARD', id: '6' },
        ]
      }
    },
    computed: {
      ...mapGetters(['articletypes'])
    },
    mounted() {
      return this.$store.dispatch('fetchtypes')
    }
  }

</script>

<style lang="scss" scoped>

  #features-container {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 70px;
    margin-top: 70px;
    box-shadow: 4px 1px 10px rgba(0, 0, 0, 0.075);
  }

  .boxi-1 {
    border: 1px solid #dadce6;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 10px;
    height: 569px;
    overflow: hidden;
    overflow-y: scroll;
    margin: 3px;
    padding: 10px;
    padding-top: 0;
    width: 23%;
  }

  .boxi-1::-webkit-scrollbar {
    display: none;
  }

  .boxi-2::-webkit-scrollbar {
    display: none;
  }
  .boxi-2 {
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #dadce6;
    box-sizing: border-box;
    height: 569px;
    overflow: hidden;
    overflow-y: scroll;
    margin: 10px;
    padding: 10px;
    padding-top: 0;
    width: 50%;
  }
  .typename {
    font-size: 0pt;
  }

  .typename::first-letter {
    font-size: 12px;
    font-weight: bold;
  }

  .author-avatar {
      background-color: #58c8fc;
  }

   .author-avatar:nth-child(2) {
      background-color: #fcf958;
  }

  @media screen and (max-width: 520px) {
    .boxi-1 {
      width: 100%;
      margin: 0;
      border: solid #58c8fc 1px;
    }

    .boxi-2 {
      width: 100%;
      margin: 10px 0 0 0;
    }
  }

</style>
