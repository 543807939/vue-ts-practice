export const user = {
  name: "user",
  path: "/main/system/user",
  component: () => import("@/views/main/system/user/User.vue"),
  children: [],
};
export const department = {
  name: "department",
  path: "/main/system/department",
  component: () => import("@/views/main/system/department/Department.vue"),
  children: [],
};
export const menu = {
  name: "menu",
  path: "/main/system/menu",
  component: () => import("@/views/main/system/menu/Menu.vue"),
  children: [],
};
export const role = {
  name: "role",
  path: "/main/system/role",
  component: () => import("@/views/main/system/role/Role.vue"),
  children: [],
};
