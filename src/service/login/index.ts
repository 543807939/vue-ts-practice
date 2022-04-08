import MyRequest from "../index";
import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginApi {
  AccountLogin = "/login",
  GetUserInfoByID = "/users",
}

export function accountLogin(account: IAccount) {
  return MyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  });
}

export function getUserInfoByID(id: number, token: string) {
  return MyRequest.get({
    url: `${LoginApi.GetUserInfoByID}/${id}`,
    headers: {
      Authorization: token,
    },
  });
}
