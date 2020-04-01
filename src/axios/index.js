import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://data-service.theglobalfund.org/v3.3/odata'
})