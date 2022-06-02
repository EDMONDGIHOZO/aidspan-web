import axios from "axios";
import { globalFundUrl } from "../services/helpers";

export default () => {
  return axios.create({
    baseURL: globalFundUrl,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  });
};
