import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";
import { firstMenu } from "@/utils/map-menus";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/main",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/main/Main.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 导航守卫
router.beforeEach((to, from) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      router.push("/login");
    }
    if (to.path === "/main") {
      return firstMenu.url;
    }
  }
});
export default router;
