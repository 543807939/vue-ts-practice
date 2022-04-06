import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class MyRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  request(config: AxiosRequestConfig) {
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
