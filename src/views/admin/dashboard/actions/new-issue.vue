<template>
  <div class="new-issue">
    <v-row>
      <v-col cols="12">
        <form-top :titleValue="title"> </form-top>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-select :items="issues" label="select Issue Type" rounded outlined dense></v-select>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Enter an Issue Number" outlined dense rounded></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              outlined
              rounded
              dense
              label="select issue date"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12">
        <v-textarea
          name="input-7-1"
          label="Enter an Issue Note"
          value="Issue Note"
          hint="issue note "
          auto-grow
          rows="1"
          outlined
          dense
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn block rounded color="primary" large depressed>Create</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import formTop from '@/components/tools/formtops'
export default {
    name:'create issue',
    components: {
        'form-top': formTop
    },
  data: () => ({
      title:' Create new Issue',
    issues: ["GFO", "OFM"],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false
  })
};
</script>

<style lang="scss" scoped>
.new-issue {
  width: 50%;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: auto;
}

.new-issue .heading {
  text-align: center;
  text-transform: uppercase;
}
</style>