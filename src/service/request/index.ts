import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { MyInterceptors, MyConfig } from "./type";
import { ElLoading } from "element-plus";
// import {ILoadingInstance} from 'element-plus/lib/components/'

class MyRequest {
  instance: AxiosInstance;
  interceptors?: MyInterceptors;
  loading?: any;
  showLoading: boolean;
  // loading?: ILoadingInstance;
  constructor(config: MyConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 创建的实例的时候确认是否展示loading,如果不传 默认展示
    this.showLoading = config.showLoading ?? true;

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
        console.log(config);

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求...",
            background: "rgba(255,0,128,.2)",
          });
        }

        return config;
      },
      (err) => {
        console.log(err);
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.loading.close();

        return res;
      },
      (err) => {
        this.loading.close();
      }
    );
  }
  request<T>(config: MyConfig): Promise<T> {
    if (config.interceptors?.myRequestInterceptor) {
      config = config.interceptors.myRequestInterceptor(config);
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          return err;
        });
    });
  }

  get<T>(config: MyConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }
  post<T>(config: MyConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }
  delete<T>(config: MyConfig): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
  put<T>(config: MyConfig): Promise<T> {
    return this.request({ ...config, method: "PUT" });
  }
}
export default MyRequest;
