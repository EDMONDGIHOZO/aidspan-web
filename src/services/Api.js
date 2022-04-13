import axios from "axios";
import { apiurl } from "../services/helpers";

export default () => {
  return axios.create({
    baseURL: apiurl,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  });
};
