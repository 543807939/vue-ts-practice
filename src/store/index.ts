import { createStore } from "vuex";
import loginModule from "./login";
import systemModule from "./main/system";
import { IRootState } from "./types";

const store = createStore<IRootState>({
  state: {
    name: "",
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
    systemModule,
  },
});

// 用户刷新之后将localStorage中的信息重新储存到vuex中
export function setupStore() {
  store.dispatch("loginModule/loadLocalLoginData");
}

export default store;
