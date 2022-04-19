export const contentTableConfig = {
  title: "用户列表",
  showIndexColume: true,
  showSelectionColume: true,
  propList: [
    {
      prop: "name",
      label: "角色名",
      "min-width": "130",
    },
    {
      prop: "intro",
      label: "权限",
    },
    {
      prop: "createAt",
      label: "创建时间",
      "min-width": "250",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      "min-width": "250",
    },
    {
      label: "操作",
      prop: "handler",
      "min-width": "180",
    },
  ],
};
