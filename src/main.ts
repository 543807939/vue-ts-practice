import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerApp } from "@/global/index";
import "normalize.css";
import "@/assets/css/index.scss";

import myRequest from "./service";

interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}

myRequest
  .request<DataType>({
    url: "/home/multidata",
    interceptors: {
      myRequestInterceptor: (config) => {
        console.log("单独定义");
        return config;
      },
    },
    showLoading: false,
  })
  .then((res) => {
    console.log(res, 27);
  });

const app = createApp(App);
registerApp(app);
app.use(store).use(router).mount("#app");
