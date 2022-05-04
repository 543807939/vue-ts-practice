import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { IDashboardState } from "./types";
import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
} from "@/service/analysis/index";
const analysisModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: [],
  },
  getters: {},
  mutations: {
    changeCategoryGoodsCount(state, payload) {
      state.categoryGoodsCount = payload;
    },
    changeCategoryGoodsSale(state, payload) {
      state.categoryGoodsSale = payload;
    },
    changeCategoryGoodsFavor(state, payload) {
      state.categoryGoodsFavor = payload;
    },
    changeAddressGoodsSale(state, payload) {
      state.addressGoodsSale = payload;
    },
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const { data: categoryGoodsCount } = await getCategoryGoodsCount();
      commit("changeCategoryGoodsCount", categoryGoodsCount);
      const { data: categoryGoodsSale } = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", categoryGoodsSale);
      const { data: categoryGoodsFavor } = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", categoryGoodsFavor);
      const { data: addressGoodsSale } = await getAddressGoodsSale();
      commit("changeAddressGoodsSale", addressGoodsSale);
    },
  },
};

export default analysisModule;
