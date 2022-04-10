import { App } from "vue";
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElAside,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from "element-plus/lib/components";

import "element-plus/dist/index.css";

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElAside,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
];

export default function registerElement(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
