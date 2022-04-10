export const category = {
  name: "category",
  path: "/main/product/category",
  component: () => import("@/views/main/product/category/Category.vue"),
  children: [],
};
export const goods = {
  name: "goods",
  path: "/main/product/goods",
  component: () => import("@/views/main/product/goods/Goods.vue"),
  children: [],
};
