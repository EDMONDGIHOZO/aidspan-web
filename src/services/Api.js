import axios from "axios";
import { urls } from "./urls";

export default () => {
    return axios.create({
        baseURL: urls.apiurl,
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
    });
};