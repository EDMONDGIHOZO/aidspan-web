import axios from 'axios'


export default () => {
  return axios.create({
    baseURL: 'http://localhost:3333/api/v1/',
    // baseURL: 'https://webapi.aidspan.org/api/v1/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
  })
}
