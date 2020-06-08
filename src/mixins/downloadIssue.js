export default {
    methods: {
        downloadIssue: function(title) {
            var str = title
            str = str.replace('GFO Issue ', '')
            if (str.includes('GFO')) {
                str = str.replace('GFO Issue ', '')
            } else {
                str = str.replace('OFM-Edition ', '')
            }
            let downloadLink = `https://aidspan.org/sites/default/files/gfo/${str}/English/GFO-Issue-${str}.pdf`
                /// add download power
            window.location.assign(downloadLink)
        },
    },
}