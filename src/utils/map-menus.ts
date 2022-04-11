import { RouteRecordRaw } from "vue-router";
// import { overview, dashboard } from "@/router/main/analysis";
// import { category, goods } from "@/router/main/product";
// import { chat, list } from "@/router/main/story";
// import { user, department, menu, role } from "@/router/main/system";

// const routeList = [
//   overview,
//   dashboard,
//   category,
//   goods,
//   chat,
//   list,
//   user,
//   department,
//   menu,
//   role,
// ];
export default function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const arr = require.context("../router/main", true, /\.ts/);
  const allRoute: RouteRecordRaw[] = [];
  arr.keys().forEach((key) => {
    const res = require("../router/main" + key.split(".")[1]);

    Object.keys(res).forEach((item) => {
      allRoute.push(res[item]);
    });
  });

  function recurseGetRoute(menus: any[]) {
    menus.forEach((item) => {
      if (item.type == 2) {
        const route = allRoute.find((route) => route.path === item.url);
        if (route) {
          routes.push(route);
        }
      } else {
        recurseGetRoute(item.children);
      }
    });
  }
  recurseGetRoute(userMenus);
  return routes;
}
