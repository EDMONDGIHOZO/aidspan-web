import Axios from 'axios'
import {apiurl} from './services/helpers'

export default Axios.create({
  baseURL: apiurl,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer',
  },
})
