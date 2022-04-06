import { App } from "vue";
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
} from "element-plus/lib/components";
import "element-plus/dist/index.css";

const components = [ElButton, ElForm, ElFormItem, ElInput, ElRadio];

export default function registerElement(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
