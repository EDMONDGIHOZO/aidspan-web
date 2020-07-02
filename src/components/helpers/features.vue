<template>

  <v-container id="features-container">
    <div class="boxi-1">
      <h4 class="text-center my-4">ARTICLE TYPES </h4>
      <v-divider light class="my-5"></v-divider>
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
      <h4>GFO & OFM AUTHORS </h4>
      <v-divider light class="my-5"></v-divider>
      <v-list>
        <v-list-item v-for="artype in articleTypes" :key="artype.id">
          <v-list-item-content>
            <v-list-item-title v-text="artype.title"></v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-list-item-avatar color="primary" size="40">
            <span class="font-weight-bold white--text typename">{{artype.title}}</span>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </div>
    <div class="boxi-2">
      <h3 class="text-center">FEATURED ARTICLES </h3>
      <v-divider light class="my-5"></v-divider>
      <v-list dense>
        <v-list-item v-for="artype in articleTypes" :key="artype.id">
          <v-list-item-content>
            <v-list-item-title v-text="artype.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>

</template>

<script>

  import { mapGetters } from 'vuex'
  export default {
    name: 'features',
    data() {
      return {
        articleTypes: [
          { title: 'Politics', id: '1' },
          { title: 'Health', id: '3' },
          { title: 'Life', id: '4' },
          { title: 'Africans', id: '5' },
          { title: 'Who', id: '6' },
          { title: 'Health', id: '7' },
          { title: 'Health', id: '8' },
          { title: 'Health', id: '9' },
          { title: 'Politics', id: '10' },
          { title: 'Health', id: '30' },
          { title: 'Life', id: '40' },
          { title: 'Africans', id: '50' },
          { title: 'Who', id: '60' },
          { title: 'Health', id: '70' },
          { title: 'Health', id: '80' },
          { title: 'Health', id: '90' }
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
    background-color: #f8f8fb;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;
    box-shadow: 4px 1px 10px rgba(0, 0, 0, 0.2);
  }

  .boxi-1 {
    border: 1px solid #dadce6;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 10px;
    height: 569px;
    overflow: hidden;
    overflow-y: scroll;
    margin: 10px;
    padding: 10px;
    width: 20%;
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
    width: 50%;
  }
  .typename {
    font-size: 0pt;
  }

  .typename::first-letter {
    font-size: 12px;
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
