import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ISystemState } from "./types";
import {
  createPageData,
  deletePageData,
  editPageData,
  getPageListData,
} from "@/service/system/index";
import { IUserInfo } from "@/service/system/types";

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
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
    changeUsersList(state, userList: IUserInfo[]) {
      state.usersList = userList;
    },
    changeUsersCount(state, totalCount: number) {
      state.usersCount = totalCount;
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

    // 删除信息
    async deletePageData({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageUrl = `${pageName}/${id}`;
      try {
        await deletePageData(pageUrl);
        dispatch("getPageList", {
          pageName,
          queryInfo: {
            offset: 0,
            size: 10,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },

    // 新建信息
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
    // 编辑信息
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData,id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
  },
};

export default systemModule;
