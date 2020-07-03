import axios from 'axios'
export default {
    methods: {
        downloadIssue: function(title) {
            var str = title
            let languagedir = ''
            let base_url = window.location.origin
            str = str.replace('GFO Issue ', '')
            if (str.includes('GFO')) {
                str = str.replace('GFO Issue ', '')
                languagedir = 'English'
            } else {
                str = str.replace('OFM-Edition ', '')
                languagedir = 'French'
            }
            axios({
                url: `${base_url}/sites/default/files/gfo/${str}/${languagedir}/GFO-Issue-${str}.pdf`,
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