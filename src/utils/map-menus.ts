import { IBreadcrumb } from "@/base-ui/breadcrumb";
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

export let firstMenu: any = null;
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
        if (!firstMenu) {
          firstMenu = item;
        }
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

export function pathMapBreadcrumb(menu: any[], path: string) {
  const BreadCrumbs: IBreadcrumb[] = [];
  pathMapToMenu(menu, path, BreadCrumbs);
  return BreadCrumbs;
}

export function pathMapToMenu(
  menu: any[],
  path: string,
  BreadCrumbs?: IBreadcrumb[]
): any {
  for (const route of menu) {
    if (route.type == 1) {
      const res = pathMapToMenu(route.children ?? [], path, BreadCrumbs);
      if (res) {
        if (BreadCrumbs) {
          BreadCrumbs.push({ name: route.name, path: route.url });
          BreadCrumbs.push({ name: res.name, path: res.url });
        }
        return res;
      }
    } else {
      if (route.url == path) {
        return route;
      }
    }
  }
}
