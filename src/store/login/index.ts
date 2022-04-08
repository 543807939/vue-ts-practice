import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: "",
    };
  },
  getters: {},
  mutations: {},
  actions: {
    loginAccountAction(context, payload) {
      console.log(context, payload);
    },
  },
};

export default loginModule;
