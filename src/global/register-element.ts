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
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElDivider,
  ElAvatar,
  ElBadge,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElOption,
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
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElDivider,
  ElAvatar,
  ElBadge,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElOption,
];

export default function registerElement(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
