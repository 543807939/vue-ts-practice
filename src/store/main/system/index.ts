import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ISystemState } from "./types";

const systemModule: Module<ISystemState, IRootState> = {
  state: {
    userList: [],
    userCount: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
};

export default systemModule;
