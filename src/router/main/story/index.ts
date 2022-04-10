export const chat = {
  name: "chat",
  path: "/main/story/chat",
  component: () => import("@/views/main/story/chat/Chat.vue"),
  children: [],
};
export const list = {
  name: "list",
  path: "/main/story/list",
  component: () => import("@/views/main/story/list/List.vue"),
  children: [],
};
