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
            let downloadLink = `${base_url}/sites/default/files/gfo/${str}/${languagedir}/GFO-Issue-${str}.pdf`
                /// add download power
            window.location.assign(downloadLink)
            alert(downloadLink)
        },
    },
}