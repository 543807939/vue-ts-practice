import MyRequest from "../index";
import { IDataType } from "../types";
import { IUserData } from "./types";
export function getPageListData(url: string, queryInfo: any) {
  return MyRequest.post<IDataType<IUserData>>({
    url,
    data: queryInfo,
  });
}
