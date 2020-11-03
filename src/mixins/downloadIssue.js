import axios from 'axios'
export default {
    methods: {
        downloadIssue: function(title, language) {
            const filename = title
            var str = title
            let islanguage = language
            let base_url = window.location.origin
            let link = ''
            let number = str.replace(/\D/g, '')

            if (islanguage === 'en') {
                link = `/sites/default/files/gfo/${number}/English/GFO-Issue-${number}.pdf`
            } else {
                link = `/sites/default/files/gfo/${number}/French/OFM-Edition-${number}.pdf`
            }
            axios({
                url: `${base_url}${link}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Content-Disposition': 'attachement',
                },
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', `${filename}.pdf`)
                document.body.appendChild(link)
                link.click()
            })
        },
        downloadPublication: function(title) {
            const filename = title
            var str = title
            let base_url = window.location.origin
            let link = `/sites/default/files/publications/${str}`
            axios({
                url: `${base_url}${link}`,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', `${filename}.pdf`)
                document.body.appendChild(link)
                link.click()
            })
        },
    },
}