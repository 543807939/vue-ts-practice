import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import {
  accountLogin,
  getUserInfoByID,
  getMuensByRoleId,
} from "@/service/login";
import { IAccount } from "@/service/login/type";

import localCache from "@/utils/cache";
import mapMenusToRoutes, { mapMenusToPermissions } from "@/utils/map-menus";

import router from "@/router";
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: [],
    };
  },
  getters: {},
  mutations: {
    // 设置token
    changeToken(state, payload: string) {
      state.token = payload;
    },
    changeUserInfo(state, payload: any) {
      state.userInfo = payload;
    },
    // 设置menu
    changeUserMenus(state, payload: any[]) {
      state.userMenus = payload;
      const res = mapMenusToRoutes(payload);

      res.forEach((item) => {
        router.addRoute("main", item);
      });
      const permissions = mapMenusToPermissions(payload);
      state.permissions = permissions;
    },
  },
  actions: {
    async loginAccountAction(context, payload: IAccount) {
      try {
        const loginRes = await accountLogin(payload);

        const { id, token } = loginRes.data;
        // 存储token
        context.commit("changeToken", token);
        localCache.setCache("token", token);

        // 获取角色信息
        const userInfo = await getUserInfoByID(id);
        context.commit("changeUserInfo", userInfo.data);
        localCache.setCache("userInfo", userInfo.data);

        const {
          data: {
            role: { id: roleId },
          },
        } = userInfo;

        // 通过角色信息获取菜单
        const menuRes = await getMuensByRoleId(roleId);
        const menu = menuRes.data;
        context.commit("changeUserMenus", menu);
        localCache.setCache("userMenus", menu);

        router.push("/main");
      } catch (error) {
        console.log(error);
      }
    },

    loadLocalLoginData(context) {
      const token = localCache.getCache("token");
      if (token) {
        context.commit("changeToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        context.commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        context.commit("changeUserMenus", userMenus);
      }
    },
  },
};

export default loginModule;
