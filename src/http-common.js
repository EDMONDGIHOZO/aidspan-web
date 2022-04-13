import Axios from 'axios'

export default Axios.create({
  baseURL: 'http://localhost:3333/api/v1/',
  // baseURL: 'https://webapi.aidspan.org/api/v1/',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer',
  },
})
