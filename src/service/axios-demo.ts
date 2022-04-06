import axios, { AxiosResponse } from "axios";

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use((res) => {
  return res.data;
});

axios
  .request({
    method: "GET",
    url: "http://123.207.32.32:8000/home/multidata",
  })
  .then((res) => {
    console.log(res);
  });
