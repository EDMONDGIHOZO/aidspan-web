import Axios from 'axios'

export default Axios.create({
    baseURL: "http://localhost:3331/api/v1",
    headers: {
        "Content-type": "application/json"
    }
})
