import MyRequest from "../index";
import { IDataType } from "../types";

enum DashboardApi {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale",
}

export function getCategoryGoodsCount() {
  return MyRequest.get<IDataType>({
    url: DashboardApi.categoryGoodsCount,
  });
}
export function getCategoryGoodsSale() {
  return MyRequest.get<IDataType>({
    url: DashboardApi.categoryGoodsSale,
  });
}
export function getCategoryGoodsFavor() {
  return MyRequest.get<IDataType>({
    url: DashboardApi.categoryGoodsFavor,
  });
}
export function getAddressGoodsSale() {
  return MyRequest.get<IDataType>({
    url: DashboardApi.addressGoodsSale,
  });
}
