export interface IUserInfo {
  cellphone: number;
  createAt: string;
  departmentId: number;
  enable: number;
  id: number;
  name: string;
  realname: string;
  roleId: number;
  updateAt: string;
}

export interface IUserData {
  list: IUserInfo[];
  totalCount: number;
}
