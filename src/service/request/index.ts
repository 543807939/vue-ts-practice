import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { MyInterceptors, MyConfig } from "./type";
import { ElLoading } from "element-plus";
// import {ILoadingInstance} from 'element-plus/lib/components/'
class MyRequest {
  instance: AxiosInstance;
  interceptors?: MyInterceptors;
  loading?: any;
  // loading?: ILoadingInstance;
  constructor(config: MyConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // 实例自定义拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.myRequestInterceptor,
      this.interceptors?.myRequestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.myResponseInterceptor,
      this.interceptors?.myResponseInterceptorCatch
    );

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        this.loading = ElLoading.service({
          lock: true,
          text: "正在请求...",
          background: "#f08",
        });
        console.log("请求拦截器拦截成功");
        return config;
      },
      (err) => {
        console.log("请求拦截器拦截失败");
        console.log(err);
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading.close();
        console.log("响应拦截器拦截成功");
        return res;
      },
      (err) => {
        this.loading.close();
        console.log("响应拦截器拦截失败");
      }
    );
  }
  request(config: MyConfig) {
    if (config.interceptors?.myRequestInterceptor) {
      config = config.interceptors.myRequestInterceptor(config);
    }
    this.instance
      .request(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
export default MyRequest;
