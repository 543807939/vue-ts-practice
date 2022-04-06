import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerApp } from "@/global/index";

import myRequest from "./service";

myRequest.request({
    url:'/home/multidata'
})
const app = createApp(App);
registerApp(app);
app.use(store).use(router).mount("#app");
console.log(process.env.VUE_APP_BASE_URL);
console.log(process.env);
console.log(process.env.VUE_APP_BASE_NAME);
console.log(process.env.VUE_APP_NAME);
