import { createStore } from "vuex";
import loginModule from "./login";

import { IRootState } from "./types";

export default createStore<IRootState>({
  state: {
    name: "",
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule,
  },
});
