import { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";

export interface MyInterceptors {
  myRequestInterceptor?: (
    config: AxiosRequestConfig<AxiosRequestHeaders>
  ) => AxiosRequestConfig;
  myRequestInterceptorCatch?: (error: any) => any;
  myResponseInterceptor?: (response: AxiosResponse) => AxiosResponse;
  myResponseInterceptorCatch?: (error: any) => any;
}

export interface MyConfig extends AxiosRequestConfig {
  interceptors?: MyInterceptors;
  showLoading?: boolean;
}
