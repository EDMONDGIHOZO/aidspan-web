import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://localhost:3331/api/v1',
        withCredentials: false,
        timeout: 1000,
        headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    })
}
