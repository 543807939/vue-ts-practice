import MyRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import localCache from "@/utils/cache";
import { AxiosRequestHeaders } from "axios";
export default new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    myRequestInterceptor: (config) => {
      const token = localCache.getCache("token");
      if (token) {
        // config.headers.Authorization =
        (
          config.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${token}`;
      }
      return config;
    },
    myRequestInterceptorCatch: (err) => {
      console.log(err);
    },
    myResponseInterceptor: (res) => {
      return res.data;
    },
    myResponseInterceptorCatch: (err) => {
      console.log(err);
    },
  },
  showLoading: true,
});
