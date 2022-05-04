import MyRequest from "../index";
import { IDataType } from "../types";
import { IUserData } from "./types";
export function getPageListData(url: string, queryInfo: any) {
  return MyRequest.post<IDataType<IUserData>>({
    url,
    data: queryInfo,
  });
}

export function deletePageData(url: string) {
  return MyRequest.delete<IDataType>({
    url,
  });
}

export function createPageData(url: string, newData: any) {
  return MyRequest.post<IDataType>({
    url,
    data: newData,
  });
}
export function editPageData(url: string, editData: any) {
  return MyRequest.patch<IDataType>({
    url,
    data: editData,
  });
}
