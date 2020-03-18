<template>
  <div id="editorial">
    <v-container id="gfo-intro">
      <v-layout row wrap>
        <v-flex xs12 md12 lg12>
          <div class="title">
            <p class="font-weight-black display-1">GLOBAL FUND OBSERVER</p>
          </div>
          <div class="content" v-scrollAnimation>
            <p class="ma-10">
              The Global Fund Observer is the leading independent voice
              providing insight, analysis and opinion about the Global Fund.
              Subscribe to our free, twice-monthly newsletter for authoritative
              and credible explanations about the policies, practices and
              procedures at the Secretariat, insider information about Global
              Fund Board meetings, analysis on reports from the Office of the
              Inspector General, and real stories capturing the impact and role
              of the Global Fund at the country level, Please add
              gfo-newsletter@aidspan.org to your list of approved email senders
              to avoid your email system treating incoming issues of the Global
              Fund Observer as spam.
            </p>
          </div>
          <div class="bottom-toolbar">
            <v-btn text color="secondary" v-for="link in gfoLinks" :key="link.title" router :to="link.route"> {{link.title}} </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return {
            gfoLinks:[
                {title: 'CURRENT ISSUE' , route: '#current-issue'},
                {title: 'GFO LIVE' , route: '#live'},
                {title: 'ALL ISSUE ' , route: '#current-issue'},
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
#gfo-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2fbff;
  box-shadow: inset 1px 15px 27px rgba(0, 0, 0, 0.1);
  min-width: 100%;
  height: 322px;
  margin-bottom: 40px;
}
@media only screen and (max-width: 768px) {
  #gfo-intro {
    height: auto;
    position: relative;
    margin-top: 12%;
  }
  #gfo-intro .bottom-toolbar {
      display: none;
  }
}

#gfo-intro .title {
  color: rgba(71, 71, 71, 0.75);
  text-align: center;
}

#gfo-intro .content {
  line-height: 200%;
  text-align: center;
  color: #000000;
  width: 98%;
}

#gfo-intro .bottom-toolbar {
    flex-direction: row;
    flex-grow: 3;
    align-self: center;
  background: #ffffff;
  box-shadow: 0px 1px 23px rgba(0, 0, 0, 0.1);
  border-radius: 31.5px;
  margin-bottom: -80px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  text-align: center;
  padding-top:11px;
  
}
</style>
