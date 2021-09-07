import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://webapi.aidspan.org/api/v1/',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer',
  },
})
