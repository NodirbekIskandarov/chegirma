import axios from "axios";
import { host } from "./API_urls";
import { getStorage } from "./storage";

const instance = axios.create({
    baseURL: `${host}/api/v1/`,
});

instance.interceptors.request.use(
  (config) => {
    const token = getStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Accept-Language"] = `uz`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
