import { App } from "vue";
import registerElement from "./register-element";
import registerGlobal from "./register-globalConfig";
export function registerApp(app: App) {
  registerElement(app);
  registerGlobal(app);
}
