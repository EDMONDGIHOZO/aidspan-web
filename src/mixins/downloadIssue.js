import axios from 'axios'
export default {
    methods: {
        downloadIssue: function(title) {
            var str = title
            let languagedir = ''
            let defaultname = ''
            let base_url = window.location.origin
            str = str.replace('GFO Issue ', '')

            if (str.includes('GFO')) {
                //  block of code to be executed if condition1 is true
                str = str.replace('GFO Issue ', '')
                languagedir = 'English'
                defaultname = 'GFO-Issue'
            } else if (str.includes('OFM')) {
                //  block of code to be executed if the condition1 is false and condition2 is true
                str = str.replace('OFM Edition ', '')
                languagedir = 'French'
                defaultname = 'OFM-Edition'
            } else {
                //  block of code to be executed if the condition1 is false and condition2 is false
                alert('something is wrong on our side, we are fixing the issue soon')
            }

            axios({
                url: `${base_url}/sites/default/files/gfo/${str}/${languagedir}/${defaultname}-${str}.pdf`,
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