<template>
<div id="footer">
    <v-container class="my-5">
        <v-card flat>
            <v-layout row wrap>
                <v-flex xs12 md4 sm4 lg4 id="twitter-card">
                    <v-card class="mx-auto" max-width="400" flat>
                        <a class="twitter-timeline" data-height="240" href="https://twitter.com/aidspan?ref_src=twsrc%5Etfw">Tweets by aidspan</a>
                    </v-card>
                </v-flex>
                <v-flex xs12 md4 sm4 lg4 id="quick-links-card">
                    <v-card class="mx-auto" max-width="300" tile flat>
                        <v-list shaped dense>
                            <v-subheader class="title">QUICK LINKS</v-subheader>
                            <v-list-item-group v-model="link" color="primary">
                                <v-list-item v-for="(link, i) in quicklinks" :key="i">
                                    <v-list-item-content>
                                        <v-list-item-title v-text="link.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex xs12 md4 sm4 lg4 id="contacts-card">
                    <v-card class="mx-auto" max-width="300" tile flat>
                        <v-list shaped dense>
                            <v-subheader class="title">CONTACT</v-subheader>
                            <v-list-item-group v-model="info" color="primary">
                                <v-list-item v-for="(info, i) in contacts" :key="i">
                                    <v-list-item-icon>
                                        <v-icon small>{{info.icon}}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="info.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
    <v-footer padless dark>
        <v-card class="flex" flat tile hover>
            <v-card-title class="primary">
                <strong class="subheading">Get connected with us on social networks!</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" dark icon>
                    <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="py-2 text-center">
                {{ new Date().getFullYear() }} — <strong>AIDSPAN</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</div>
</template>

<script>
export default {
    computed: {
        icons() {
            return this.$store.state.icons;
        },
        quicklinks() {
            return this.$store.state.quicklinks;
        },
        contacts() {
            return this.$store.state.basicInfo;
        }
    }
};
</script>

<style lang="scss">
#twitter-card {

    padding: 5px;
    display: flex;
    justify-content: center;
}

#quick-links-card {
    border-left: solid 4px #F46517;
}

#quick-links-card .title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
}

#contacts-card .title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
}

#contacts-card {
    border-left: solid 4px #3DC0FC;

}

#footer {
    display: inline;
    justify-content: center;
}
</style>
