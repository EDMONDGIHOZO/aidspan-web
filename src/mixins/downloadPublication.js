import axios from 'axios'
export default {
    methods: {
        downloadPublication: function(url) {
            const filename = url
            var str = url
            let base_url = window.location.origin
                //window.location.origin
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