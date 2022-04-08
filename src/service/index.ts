import MyRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

export default new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    myRequestInterceptor: (config) => {
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
