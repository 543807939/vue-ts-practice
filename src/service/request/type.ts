import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface MyInterceptors {
  myRequestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  myRequestInterceptorCatch?: (error: any) => any;
  myResponseInterceptor?: (response: AxiosResponse) => AxiosResponse;
  myResponseInterceptorCatch?: (error: any) => any;
}

export interface MyConfig extends AxiosRequestConfig {
  interceptors?: MyInterceptors;
}
