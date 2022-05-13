import { createStore } from "vuex";
import loginModule from "./login";
import systemModule from "./main/system";
import analysisModule from "./main/analysis";
import { IRootState } from "./types";
import { getPageListData } from "@/service/system/index";
import { useRoute } from "vue-router";
const store = createStore<IRootState>({
  state: {
    name: "",
    entireDepartment: [],
    entireRole: [],
    entireMenu: [],
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    },
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求部门数据

      const {
        data: { list: departmentList },
      } = await getPageListData("department/list", {
        offset: 0,
        size: 1000,
      });
      commit("changeEntireDepartment", departmentList);
      // 请求角色数据
      const {
        data: { list: roleList },
      } = await getPageListData("role/list", {
        offset: 0,
        size: 1000,
      });

      commit("changeEntireRole", roleList);

      // 请求菜单数据
      const {
        data: { list: menuList },
      } = await getPageListData("menu/list", {});

      commit("changeEntireMenu", menuList);
    },
  },
  modules: {
    loginModule,
    systemModule,
    analysisModule,
  },
});

// 用户刷新之后将localStorage中的信息重新储存到vuex中
export function setupStore() {
  store.dispatch("loginModule/loadLocalLoginData");
  if (location.hash !== "#/login") {
    store.dispatch("getInitialDataAction");
  }
}

export default store;
