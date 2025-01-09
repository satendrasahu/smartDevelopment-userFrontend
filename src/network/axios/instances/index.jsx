import axios from "axios";
import config from "../../../utils/config";
import { setupRequestInterceptor } from "../interceptors/requestInterceptor";
import { setupResponseInterceptor } from "../interceptors/responseInterceptor";

const axiosInstance = axios.create({
  baseURL: config?.apiUrl,
  timeout: config?.apiCallTimeOut,
  headers: {
    "Content-Type": "application/json",
  },
});
setupRequestInterceptor(axiosInstance);
setupResponseInterceptor(axiosInstance);

export default axiosInstance;
