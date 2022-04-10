import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerApp } from "@/global/index";
import "normalize.css";
import "@/assets/css/index.scss";
import { setupStore } from "@/store";

const app = createApp(App);
registerApp(app);
setupStore();
app.use(store).use(router).mount("#app");
