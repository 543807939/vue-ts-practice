import { App } from "vue";
import { formatUtcString } from "@/utils/data-format";
function registerGlobal(app: App) {
  app.config.globalProperties.$filters = {
    formatDate(time: any) {
      return formatUtcString(time);
    },
  };
}
export default registerGlobal;
