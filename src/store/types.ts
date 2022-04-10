import { ILoginState } from "./login/types";
export interface IRootState {
  name: string;
}

export interface IModule {
  loginModule: ILoginState;
}

export type IStore = IModule & IRootState;
