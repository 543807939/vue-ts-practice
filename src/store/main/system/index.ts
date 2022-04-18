import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ISystemState } from "./types";
import { getPageListData } from "@/service/system/index";
import { IUserInfo } from "@/service/system/types";
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    userList: [],
    userCount: 0,
  },
  getters: {},
  mutations: {
    changeUserList(state, userList: IUserInfo[]) {
      state.userList = userList;
    },
    changeUserCount(state, totalCount: number) {
      state.userCount = totalCount;
    },
  },
  actions: {
    // 获取用户信息
    async getPageList(context, payload) {
      const pageResult = await getPageListData(
        `${payload.pageName}/list`,
        payload.queryInfo
      );
      console.log(pageResult);
      const { list, totalCount } = pageResult.data;
      context.commit("changeUserList", list);
      context.commit("changeUserCount", totalCount);
    },
  },
};

export default systemModule;
