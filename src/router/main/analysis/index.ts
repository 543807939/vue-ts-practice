export const overview = {
  name: "overview",
  path: "/main/analysis/overview",
  component: () => import("@/views/main/analysis/overview/Overview.vue"),
  children: [],
};

export const dashboard = {
  name: "dashboard",
  path: "/main/analysis/dashboard",
  component: () => import("@/views/main/analysis/dashboard/Dashboard.vue"),
  children: [],
};
