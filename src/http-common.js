import Axios from 'axios'

export default Axios.create({
    baseURL: "http://backend.aidspan.org/api/v1",
    headers: {
        "Content-type": "application/json"
    }
})
