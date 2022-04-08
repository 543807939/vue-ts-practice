import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import { accountLogin, getUserInfoByID } from "@/service/login";
import { IAccount } from "@/service/login/type";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: "",
    };
  },
  getters: {},
  mutations: {
    changeToken(state, payload: string) {
      state.token = payload;
    },
  },
  actions: {
    async loginAccountAction(context, payload: IAccount) {
      try {
        console.log(payload);
        const loginRes = await accountLogin(payload);
        console.log(loginRes.data);
        const { id, token } = loginRes.data;
        context.commit("changeToken", token);
        console.log(context.state.token);
        const userInfo = await getUserInfoByID(id, token);
        console.log(userInfo);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default loginModule;
