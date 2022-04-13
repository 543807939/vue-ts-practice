import { ILoginState } from "./login/types";
import { ISystemState } from "./main/system/types";
export interface IRootState {
  name: string;
}

export interface IModule {
  loginModule: ILoginState;
  systemModule: ISystemState;
}

export type IStore = IModule & IRootState;
