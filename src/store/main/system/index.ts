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
    roleList: [],
    roleCount: 0,
  },
  getters: {},
  mutations: {
    changeUserList(state, userList: IUserInfo[]) {
      state.userList = userList;
    },
    changeUserCount(state, totalCount: number) {
      state.userCount = totalCount;
    },
    changeRoleList(state, roleList: IUserInfo[]) {
      state.roleList = roleList;
    },
    changeRoleCount(state, totalCount: number) {
      state.roleCount = totalCount;
    },
  },
  actions: {
    // 获取信息
    async getPageList(context, payload) {
      let pageUrl = "";
      const pageName = payload.pageName;
      switch (pageName) {
        case "user": {
          pageUrl = "users/list";
          break;
        }
        case "role": {
          pageUrl = "role/list";
          break;
        }

        default: {
          break;
        }
      }
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      console.log(pageResult);
      const { list, totalCount } = pageResult.data;
      context.commit(
        `change${
          (pageName as string).charAt(0).toUpperCase() +
          (pageName as string).substring(1)
        }List`,
        list
      );
      context.commit(
        `change${
          (pageName as string).charAt(0).toUpperCase() +
          (pageName as string).substring(1)
        }Count`,
        totalCount
      );
    },
  },
};

export default systemModule;
