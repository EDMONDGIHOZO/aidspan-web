import Vue from 'vue'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        fonticons: 'mdi',
    },

    theme: {
        themes: {
            light: {
                primary: '#00AEEF',
                secondary: '#F46517',
                accent: '#393536',
                error: '#b71c1c',
                lightblue: '#62D4FF',
                white: '#FFFFFF',
                gradient: 'linear-gradient(165.08deg, #00ADEF 21.69%, rgba(0, 173, 239, 0) 106.19%)',
            },
        },
    },
})