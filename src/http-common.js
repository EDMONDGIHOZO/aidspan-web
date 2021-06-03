import Axios from "axios";
import urls from "./services/urls";

export default Axios.create({
  baseURL: urls.apiurl,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer",
  },
});
