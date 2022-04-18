export const contentTableConfig = {
  title: "用户列表",
  showIndexColume: true,
  showSelectionColume: true,
  propList: [
    {
      prop: "name",
      label: "用户名",
      "min-width": "130",
    },
    {
      prop: "realname",
      label: "真实姓名",
      "min-width": "130",
    },
    {
      prop: "cellphone",
      label: "手机号码",
      "min-width": "130",
    },
    {
      prop: "enable",
      label: "状态",
      "min-width": "100",
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
