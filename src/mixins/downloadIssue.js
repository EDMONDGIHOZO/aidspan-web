export default {
    methods: {
        downloadIssue: function(title) {
            var str = title
            let languagedir = ''
            str = str.replace('GFO Issue ', '')
            if (str.includes('GFO')) {
                str = str.replace('GFO Issue ', '')
                languagedir = 'English'
            } else {
                str = str.replace('OFM-Edition ', '')
                languagedir = 'French'
            }
            let downloadLink = `https://aidspan.org/sites/default/files/gfo/${str}/${languagedir}/GFO-Issue-${str}.pdf`
                /// add download power
            window.location.assign(downloadLink)
        },
    },
}