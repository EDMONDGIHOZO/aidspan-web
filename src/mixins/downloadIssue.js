import axios from 'axios'
export default {
    methods: {
        downloadIssue: function(title, language) {
            var str = title
            let islanguage = language
            let base_url = window.location.origin
            let link = ''
            str = str.replace('GFO Issue ', '')

            if (islanguage === 'en') {
                link = `/sites/default/files/gfo/${str}/English/GFO-Issue-${str}.pdf`
            } else {
                link = `/sites/default/files/gfo/${str}/French/OFM-Edition-${str}.pdf`
            }
            axios({
                url: `${base_url}${link}`,
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'file.pdf')
                document.body.appendChild(link)
                link.click()
            })
        },
    },
}