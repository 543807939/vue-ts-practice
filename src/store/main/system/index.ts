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
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0,
  },
  getters: {
    getPageList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    getDataCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    },
  },
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
    changeGoodsList(state, goodsList: IUserInfo[]) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList: IUserInfo[]) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
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
        case "goods": {
          pageUrl = "goods/list";
          break;
        }

        default: {
          break;
        }
      }
      const pageResult = await getPageListData(
        pageUrl ? pageUrl : `${pageName}/list`,
        payload.queryInfo
      );
      console.log(pageResult);
      const { list, totalCount } = pageResult?.data;
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
