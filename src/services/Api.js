import axios from 'axios'

export default () => {
    return axios.create({
        // baseURL: 'https://webapi.aidspan.org/api/v1',
        baseURL: 'http://localhost:3331/api/v1', 
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
        },
    })
}