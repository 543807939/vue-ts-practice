import MyRequest from "../index";
import { IAccount, ILoginResult } from "./type";
import { IDataType } from "../types";
enum LoginApi {
  AccountLogin = "/login",
  GetUserInfoByID = "/users", // 用法 users/id
  GetMuensByRoleId = "/role", // 用法 role/id/menu
}

// 账号登陆
export function accountLogin(account: IAccount) {
  return MyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  });
}

// 通过id查询用户信息
export function getUserInfoByID(id: number) {
  return MyRequest.get<IDataType>({
    url: `${LoginApi.GetUserInfoByID}/${id}`,
  });
}

// 通过角色id查询角色菜单
export function getMuensByRoleId(id: string) {
  return MyRequest.get<IDataType>({
    url: `${LoginApi.GetMuensByRoleId}/${id}/menu`,
  });
}
