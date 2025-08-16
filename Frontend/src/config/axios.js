import axios from "axios";
import AuthStore from "stores/AuthStore";
import Qs from "qs";

const { REACT_APP_BASE_URL, REACT_APP_PROXY } = process.env;

const BASE_URL = `${REACT_APP_BASE_URL}${REACT_APP_PROXY}`;

let isRefreshing = false;
let refreshPromise = null;
const requestQueue = [];

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Authorization: `Token *token*`,
  },
  paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: "repeat" }),
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response && err.response.status === 401) {
      AuthStore.logout();
    }
    return Promise.reject(err);
  }
);

const publicAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "multipart/form-data" },
});

export { publicAxios, BASE_URL };

export default instance;
