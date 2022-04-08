import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerApp } from "@/global/index";
import "normalize.css";
import "@/assets/css/index.scss";

const app = createApp(App);
registerApp(app);
app.use(store).use(router).mount("#app");
