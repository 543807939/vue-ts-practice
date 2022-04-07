import MyRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

export default new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    myRequestInterceptor: (config) => {
      console.log(config);
      return config;
    },
    myRequestInterceptorCatch: (err) => {
      console.log(err);
    },
    myResponseInterceptor: (res) => {
      if (!res.data.success) {
        console.log("响应失败");
      }
      return res.data;
    },
    myResponseInterceptorCatch: (err) => {
      console.log(err);
    },
  },
  showLoading: true,
});
